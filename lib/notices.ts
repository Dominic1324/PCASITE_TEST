import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

export type NoticeCategory = "공지사항" | "뉴스" | "IR";

export type Notice = {
  id: number;
  title: string;
  category: NoticeCategory;
  newsLink?: string;
  date: string;
  author: string;
  views: number;
  content?: string;
  imageUrl?: string;
  imageUrls?: string[];
};

type CreateNoticeInput = {
  title: string;
  author: string;
  category?: NoticeCategory;
  newsLink?: string;
  content?: string;
  imageUrl?: string;
  imageUrls?: string[];
};

type UpdateNoticeInput = {
  title?: string;
  author?: string;
  category?: NoticeCategory;
  newsLink?: string;
  content?: string;
  imageUrl?: string;
  imageUrls?: string[];
};

const noticesFilePath = path.join(process.cwd(), "data", "notices.json");

export async function getNotices(): Promise<Notice[]> {
  const raw = await fs.readFile(noticesFilePath, "utf-8");
  const parsed = JSON.parse(raw) as Notice[];

  const normalized = parsed.map((notice) => {
    const imageUrls = Array.isArray(notice.imageUrls)
      ? notice.imageUrls.filter(Boolean)
      : notice.imageUrl
        ? [notice.imageUrl]
        : [];

    return {
      ...notice,
      category: notice.category || "공지사항",
      newsLink: notice.newsLink || "",
      imageUrls,
      imageUrl: imageUrls[0] || "",
    };
  });

  return normalized.sort((a, b) => b.id - a.id);
}

export async function getNoticeById(id: number): Promise<Notice | null> {
  const notices = await getNotices();
  return notices.find((notice) => notice.id === id) ?? null;
}

async function saveNotices(notices: Notice[]) {
  await fs.writeFile(noticesFilePath, JSON.stringify(notices, null, 2), "utf-8");
}

export async function createNotice(input: CreateNoticeInput): Promise<Notice> {
  const notices = await getNotices();
  const nextId = notices.length > 0 ? Math.max(...notices.map((n) => n.id)) + 1 : 1;
  const today = new Date().toISOString().slice(0, 10);

  const newNotice: Notice = {
    id: nextId,
    title: input.title.trim(),
    category: input.category || "공지사항",
    newsLink: input.newsLink?.trim() || "",
    author: input.author.trim() || "PCA 운영팀",
    date: today,
    views: 0,
    content: input.content?.trim() || "",
    imageUrls:
      input.imageUrls?.map((url) => url.trim()).filter(Boolean) ||
      (input.imageUrl?.trim() ? [input.imageUrl.trim()] : []),
  };

  newNotice.imageUrl = newNotice.imageUrls?.[0] || "";

  await saveNotices([newNotice, ...notices]);
  revalidatePath("/board");

  return newNotice;
}

export async function updateNotice(id: number, input: UpdateNoticeInput): Promise<Notice | null> {
  const notices = await getNotices();
  const index = notices.findIndex((notice) => notice.id === id);

  if (index < 0) {
    return null;
  }

  const target = notices[index];
  const updated: Notice = {
    ...target,
    title: input.title !== undefined ? input.title.trim() : target.title,
    author: input.author !== undefined ? input.author.trim() || "PCA 운영팀" : target.author,
    category: input.category ?? target.category ?? "공지사항",
    newsLink: input.newsLink !== undefined ? input.newsLink.trim() : target.newsLink,
    content: input.content !== undefined ? input.content.trim() : target.content,
    imageUrls:
      input.imageUrls !== undefined
        ? input.imageUrls.map((url) => url.trim()).filter(Boolean)
        : input.imageUrl !== undefined
          ? input.imageUrl.trim()
            ? [input.imageUrl.trim()]
            : []
          : target.imageUrls || (target.imageUrl ? [target.imageUrl] : []),
  };

  updated.imageUrl = updated.imageUrls?.[0] || "";

  notices[index] = updated;
  await saveNotices(notices);
  revalidatePath("/board");

  return updated;
}

export async function deleteNotice(id: number): Promise<boolean> {
  const notices = await getNotices();
  const filtered = notices.filter((notice) => notice.id !== id);

  if (filtered.length === notices.length) {
    return false;
  }

  await saveNotices(filtered);
  revalidatePath("/board");

  return true;
}
