import { NextResponse } from "next/server";
import { createNotice, getNotices } from "@/lib/notices";
import { isAdminApiAuthorized } from "@/lib/admin-auth";
import { sanitizeNoticeHtml } from "@/lib/notice-content";

export const runtime = "nodejs";

export async function GET() {
  try {
    const notices = await getNotices();
    return NextResponse.json(notices);
  } catch (error) {
    return NextResponse.json({ message: "공지 목록을 불러오지 못했습니다." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!isAdminApiAuthorized(request)) {
      return NextResponse.json({ message: "인증이 필요합니다." }, { status: 401 });
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

    if (!body.title?.trim()) {
      return NextResponse.json({ message: "제목은 필수입니다." }, { status: 400 });
    }

    if (body.category === "뉴스" && !body.newsLink?.trim()) {
      return NextResponse.json({ message: "뉴스 카테고리는 링크가 필요합니다." }, { status: 400 });
    }

    if (
      body.category === "뉴스" &&
      !(body.imageUrls && body.imageUrls.length > 0) &&
      !body.imageUrl?.trim()
    ) {
      return NextResponse.json({ message: "뉴스 카테고리는 썸네일 이미지가 필요합니다." }, { status: 400 });
    }

    const notice = await createNotice({
      title: body.title,
      author: body.author || "PCA 운영팀",
      category: body.category || "공지사항",
      newsLink: body.newsLink || "",
      content: sanitizeNoticeHtml(body.content || ""),
      imageUrl: body.imageUrl || "",
      imageUrls: body.imageUrls || [],
    });

    return NextResponse.json(notice, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "공지 등록에 실패했습니다." }, { status: 500 });
  }
}
