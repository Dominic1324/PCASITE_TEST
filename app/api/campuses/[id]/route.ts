import { NextResponse } from "next/server";
import { deleteCampus, updateCampus } from "@/lib/campuses";
import { isAdminApiAuthorized } from "@/lib/admin-auth";
import {
  buildKakaoMapSearchLink,
  geocodeAddressWithKakao,
  isOpeningSoonAddress,
} from "@/lib/kakao-geocode";

export const runtime = "nodejs";

function getIdFromParams(params: { id: string }) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }
  return id;
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!isAdminApiAuthorized(request)) {
      return NextResponse.json({ message: "인증이 필요합니다." }, { status: 401 });
    }

    const id = getIdFromParams(params);
    if (!id) {
      return NextResponse.json({ message: "잘못된 캠퍼스 ID입니다." }, { status: 400 });
    }

    const body = (await request.json()) as {
      name?: string;
      type?: "pca" | "junior";
      region?: "서울" | "경기" | "인천";
      district?: string;
      address?: string;
      phone?: string;
      href?: string;
    };

    if (body.name !== undefined && !body.name.trim()) {
      return NextResponse.json({ message: "캠퍼스명은 비워둘 수 없습니다." }, { status: 400 });
    }

    if (body.type !== undefined && body.type !== "pca" && body.type !== "junior") {
      return NextResponse.json({ message: "캠퍼스 유형이 올바르지 않습니다." }, { status: 400 });
    }

    if (body.region !== undefined && body.region !== "서울" && body.region !== "경기" && body.region !== "인천") {
      return NextResponse.json({ message: "지역 값이 올바르지 않습니다." }, { status: 400 });
    }

    const nextPayload: {
      name?: string;
      type?: "pca" | "junior";
      region?: "서울" | "경기" | "인천";
      district?: string;
      address?: string;
      phone?: string;
      href?: string;
      latitude?: number;
      longitude?: number;
    } = { ...body };

    if (body.address !== undefined) {
      const isOpeningSoon = isOpeningSoonAddress(body.address);
      const geocoded = isOpeningSoon ? null : await geocodeAddressWithKakao(body.address);

      if (!isOpeningSoon && !geocoded) {
        return NextResponse.json(
          {
            message:
              "입력한 주소를 지도에서 찾지 못했습니다. 도로명/지번을 정확히 입력해주세요. (환경변수 KAKAO_REST_API_KEY 확인)",
          },
          { status: 400 }
        );
      }

      nextPayload.latitude = geocoded?.latitude;
      nextPayload.longitude = geocoded?.longitude;

      if (!body.href?.trim()) {
        nextPayload.href = buildKakaoMapSearchLink(body.address);
      }
    }

    const updated = await updateCampus(id, nextPayload);
    if (!updated) {
      return NextResponse.json({ message: "해당 캠퍼스를 찾을 수 없습니다." }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ message: "캠퍼스 수정에 실패했습니다." }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!isAdminApiAuthorized(_request)) {
      return NextResponse.json({ message: "인증이 필요합니다." }, { status: 401 });
    }

    const id = getIdFromParams(params);
    if (!id) {
      return NextResponse.json({ message: "잘못된 캠퍼스 ID입니다." }, { status: 400 });
    }

    const deleted = await deleteCampus(id);
    if (!deleted) {
      return NextResponse.json({ message: "해당 캠퍼스를 찾을 수 없습니다." }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ message: "캠퍼스 삭제에 실패했습니다." }, { status: 500 });
  }
}
