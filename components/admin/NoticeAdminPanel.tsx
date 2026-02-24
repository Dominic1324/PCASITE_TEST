"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { Notice } from "@/lib/notices";

export default function NoticeAdminPanel() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("PCA 운영팀");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) {
      setMessage("제목을 입력해주세요.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const isEditMode = editingId !== null;

      let nextImageUrl = imageUrl;
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);

        const uploadResponse = await fetch("/api/admin/notice-image", {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) {
          const data = (await uploadResponse.json()) as { message?: string };
          throw new Error(data.message || "이미지 업로드에 실패했습니다.");
        }

        const uploadData = (await uploadResponse.json()) as { url: string };
        nextImageUrl = uploadData.url;
      }

      const response = await fetch(isEditMode ? `/api/notices/${editingId}` : "/api/notices", {
        method: isEditMode ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, author, content, imageUrl: nextImageUrl }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message || "등록에 실패했습니다.");
      }

      setTitle("");
      setAuthor("PCA 운영팀");
      setContent("");
      setImageFile(null);
      setImageUrl("");
      setEditingId(null);
      setMessage(isEditMode ? "공지사항이 수정되었습니다." : "공지사항이 등록되었습니다.");
      await loadNotices();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "요청 처리 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (notice: Notice) => {
    setEditingId(notice.id);
    setTitle(notice.title);
    setAuthor(notice.author);
    setContent(notice.content || "");
    setImageFile(null);
    setImageUrl(notice.imageUrl || "");
    setMessage("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setAuthor("PCA 운영팀");
    setContent("");
    setImageFile(null);
    setImageUrl("");
    setMessage("수정을 취소했습니다.");
  };

  const handleDelete = async (id: number) => {
    const ok = window.confirm("이 공지를 삭제할까요?");
    if (!ok) {
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`/api/notices/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message || "삭제에 실패했습니다.");
      }

      if (editingId === id) {
        cancelEdit();
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "공지 수정" : "공지 등록"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="공지 제목" value={title} onChange={(e) => setTitle(e.target.value)} />
              <Input placeholder="작성자" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <Textarea
              placeholder="공지 내용을 입력하세요 (선택)"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
            />
            <div className="space-y-2">
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              />
              {imageUrl ? (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">현재 등록 이미지</p>
                  <img src={imageUrl} alt="공지 이미지" className="h-24 w-36 rounded-md border object-cover" />
                </div>
              ) : null}
            </div>
            <div className="flex items-center gap-2">
              <Button type="submit" disabled={loading}>
                {loading ? "처리 중..." : editingId ? "공지 수정" : "공지 등록"}
              </Button>
              {editingId ? (
                <Button type="button" variant="outline" onClick={cancelEdit} disabled={loading}>
                  취소
                </Button>
              ) : null}
            </div>
            {message ? <p className="text-sm text-muted-foreground">{message}</p> : null}
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>등록된 공지</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y rounded-md border">
            {notices.length === 0 ? (
              <p className="p-4 text-sm text-muted-foreground">등록된 공지가 없습니다.</p>
            ) : (
              notices.map((notice) => (
                <div key={notice.id} className="flex items-center justify-between gap-4 p-4">
                  <div>
                    <p className="font-medium">{notice.title}</p>
                    {notice.imageUrl ? <img src={notice.imageUrl} alt={notice.title} className="mt-2 h-20 w-32 rounded-md border object-cover" /> : null}
                    {notice.content ? <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{notice.content}</p> : null}
                    <p className="text-sm text-muted-foreground">
                      {notice.author} · {notice.date}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Button type="button" variant="outline" size="sm" onClick={() => startEdit(notice)} disabled={loading}>
                      수정
                    </Button>
                    <Button type="button" variant="destructive" size="sm" onClick={() => handleDelete(notice.id)} disabled={loading}>
                      삭제
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
