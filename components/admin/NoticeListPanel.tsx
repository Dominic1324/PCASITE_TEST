"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Notice } from "@/lib/notices";
import { stripHtml } from "@/lib/notice-content";

export default function NoticeListPanel() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const loadNotices = async () => {
    const response = await fetch("/api/notices", { cache: "no-store" });
    const data = (await response.json()) as Notice[];
    setNotices(data);
  };

  useEffect(() => {
    loadNotices();
  }, []);

  const handleDelete = async (id: number) => {
    const ok = window.confirm("이 공지를 삭제할까요?");
    if (!ok) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`/api/notices/${id}`, { method: "DELETE" });
      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message || "삭제에 실패했습니다.");
      }

      setMessage("공지사항이 삭제되었습니다.");
      await loadNotices();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "삭제 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-slate-200/70 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>등록된 공지</CardTitle>
        <Button asChild>
          <Link href="/admin/notices/new">새 공지 작성</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="divide-y overflow-hidden rounded-xl border border-slate-200">
          {notices.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">등록된 공지가 없습니다.</p>
          ) : (
            notices.map((notice) => (
              <div key={notice.id} className="grid gap-4 bg-white p-4 transition-colors hover:bg-slate-50 md:grid-cols-[auto_1fr_auto] md:items-center">
                {notice.imageUrl ? (
                  <img
                    src={notice.imageUrl}
                    alt={notice.title}
                    className="h-16 w-24 rounded-lg border border-slate-200 object-cover"
                  />
                ) : (
                  <div className="h-16 w-24 rounded-lg border border-dashed border-slate-200 bg-slate-50" />
                )}

                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-900">{notice.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {notice.category || "공지사항"} · {notice.author} · {notice.date}
                  </p>
                  {notice.category === "뉴스" && notice.newsLink ? (
                    <p className="mt-1 truncate text-xs text-blue-600">{notice.newsLink}</p>
                  ) : null}
                  {notice.content ? (
                    <p className="mt-1 line-clamp-2 text-sm text-slate-600">{stripHtml(notice.content)}</p>
                  ) : null}
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <Button asChild variant="outline" size="sm" disabled={loading}>
                    <Link href={`/admin/notices/${notice.id}/edit`}>수정</Link>
                  </Button>
                  <Button type="button" variant="destructive" size="sm" onClick={() => handleDelete(notice.id)} disabled={loading}>
                    삭제
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
        {message ? <p className="mt-3 text-sm text-muted-foreground">{message}</p> : null}
      </CardContent>
    </Card>
  );
}
