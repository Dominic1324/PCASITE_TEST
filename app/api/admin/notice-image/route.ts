import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { isAdminApiAuthorized } from "@/lib/admin-auth";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    if (!isAdminApiAuthorized(request)) {
      return NextResponse.json({ message: "인증이 필요합니다." }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ message: "이미지 파일이 필요합니다." }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ message: "이미지 파일만 업로드할 수 있습니다." }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ message: "이미지 용량은 5MB 이하만 가능합니다." }, { status: 400 });
    }

    const extension = file.name.includes(".") ? file.name.split(".").pop() : "png";
    const fileName = `${randomUUID()}.${extension}`;
    const uploadDir = path.join(process.cwd(), "public", "news-images", "uploads");
    const targetPath = path.join(uploadDir, fileName);

    await fs.mkdir(uploadDir, { recursive: true });

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(targetPath, buffer);

    return NextResponse.json({ url: `/news-images/uploads/${fileName}` });
  } catch (error) {
    return NextResponse.json({ message: "이미지 업로드에 실패했습니다." }, { status: 500 });
  }
}
