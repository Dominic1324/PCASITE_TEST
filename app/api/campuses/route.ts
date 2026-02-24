import { NextResponse } from "next/server";
import { createCampus, getCampuses } from "@/lib/campuses";
import { isAdminApiAuthorized } from "@/lib/admin-auth";
import {
  buildKakaoMapSearchLink,
  geocodeAddressWithKakao,
  isOpeningSoonAddress,
} from "@/lib/kakao-geocode";

export const runtime = "nodejs";

export async function GET() {
  try {
    const campuses = await getCampuses();
    return NextResponse.json(campuses);
  } catch (error) {
    return NextResponse.json({ message: "캠퍼스 목록을 불러오지 못했습니다." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!isAdminApiAuthorized(request)) {
      return NextResponse.json({ message: "인증이 필요합니다." }, { status: 401 });
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

    if (!body.name?.trim() || !body.district?.trim() || !body.address?.trim() || !body.phone?.trim()) {
      return NextResponse.json({ message: "필수 항목을 모두 입력해주세요." }, { status: 400 });
    }

    if (body.type !== "pca" && body.type !== "junior") {
      return NextResponse.json({ message: "캠퍼스 유형이 올바르지 않습니다." }, { status: 400 });
    }

    if (body.region !== "서울" && body.region !== "경기" && body.region !== "인천") {
      return NextResponse.json({ message: "지역 값이 올바르지 않습니다." }, { status: 400 });
    }

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

    const href = body.href?.trim() || buildKakaoMapSearchLink(body.address);

    const campus = await createCampus({
      name: body.name,
      type: body.type,
      region: body.region,
      district: body.district,
      address: body.address,
      phone: body.phone,
      href,
      latitude: geocoded?.latitude,
      longitude: geocoded?.longitude,
    });

    return NextResponse.json(campus, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "캠퍼스 등록에 실패했습니다." }, { status: 500 });
  }
}
