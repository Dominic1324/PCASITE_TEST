import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAdminPageAuthorized } from "@/lib/admin-auth";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const isLoginPage = pathname === "/admin/login";
  const isAuthorized = isAdminPageAuthorized(request);

  if (!isAuthorized && !isLoginPage) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/admin/login";
    loginUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthorized && isLoginPage) {
    const nextUrl = request.nextUrl.searchParams.get("next") || "/admin";
    return NextResponse.redirect(new URL(nextUrl, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
