import { NextResponse } from "next/server";
import {
  ADMIN_AUTH_COOKIE,
  getAdminAuthCookieValue,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { password?: string };

    if (!verifyAdminPassword(body.password || "")) {
      return NextResponse.json({ message: "비밀번호가 올바르지 않습니다." }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: ADMIN_AUTH_COOKIE,
      value: getAdminAuthCookieValue(),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ message: "로그인 처리에 실패했습니다." }, { status: 500 });
  }
}
