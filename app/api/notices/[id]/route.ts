import { NextResponse } from "next/server";
import { deleteNotice, updateNotice } from "@/lib/notices";
import { isAdminApiAuthorized } from "@/lib/admin-auth";
import { sanitizeNoticeHtml } from "@/lib/notice-content";

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
      return NextResponse.json({ message: "잘못된 공지 ID입니다." }, { status: 400 });
    }

    const body = (await request.json()) as {
      title?: string;
      author?: string;
      category?: "공지사항" | "뉴스" | "IR";
      newsLink?: string;
      content?: string;
      imageUrl?: string;
      imageUrls?: string[];
    };

    if (body.title !== undefined && !body.title.trim()) {
      return NextResponse.json({ message: "제목은 비워둘 수 없습니다." }, { status: 400 });
    }

    const updated = await updateNotice(id, {
      ...body,
      content: body.content !== undefined ? sanitizeNoticeHtml(body.content) : undefined,
    });
    if (!updated) {
      return NextResponse.json({ message: "해당 공지를 찾을 수 없습니다." }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ message: "공지 수정에 실패했습니다." }, { status: 500 });
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
      return NextResponse.json({ message: "잘못된 공지 ID입니다." }, { status: 400 });
    }

    const deleted = await deleteNotice(id);
    if (!deleted) {
      return NextResponse.json({ message: "해당 공지를 찾을 수 없습니다." }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ message: "공지 삭제에 실패했습니다." }, { status: 500 });
  }
}
