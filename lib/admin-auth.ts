import type { NextRequest } from "next/server";

export const ADMIN_AUTH_COOKIE = "pca_admin_auth";

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "";
}

function getAdminSessionToken() {
  return process.env.ADMIN_SESSION_TOKEN || "pca_admin_session";
}

export function verifyAdminPassword(input: string) {
  const password = getAdminPassword();
  return Boolean(password) && input === password;
}

export function getAdminAuthCookieValue() {
  return getAdminSessionToken();
}

export function isAdminCookieValid(value?: string) {
  return Boolean(value) && value === getAdminSessionToken();
}

export function isAdminPageAuthorized(request: NextRequest) {
  const value = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;
  return isAdminCookieValid(value);
}

export function isAdminApiAuthorized(request: Request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = cookieHeader.split(";").map((item) => item.trim());
  const authCookie = cookies.find((item) => item.startsWith(`${ADMIN_AUTH_COOKIE}=`));

  if (!authCookie) {
    return false;
  }

  const rawValue = authCookie.split("=")[1] || "";
  const value = decodeURIComponent(rawValue);
  return isAdminCookieValid(value);
}
