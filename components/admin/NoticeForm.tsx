"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Notice, NoticeCategory } from "@/lib/notices";
import NoticeRichEditor from "@/components/admin/NoticeRichEditor";
import { stripHtml } from "@/lib/notice-content";

type NoticeFormProps = {
  mode: "create" | "edit";
  noticeId?: number;
  initialNotice?: Notice;
};

export default function NoticeForm({ mode, noticeId, initialNotice }: NoticeFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialNotice?.title || "");
  const [author, setAuthor] = useState(initialNotice?.author || "PCA 운영팀");
  const [category, setCategory] = useState<NoticeCategory>(initialNotice?.category || "공지사항");
  const [newsLink, setNewsLink] = useState(initialNotice?.newsLink || "");
  const [content, setContent] = useState(initialNotice?.content || "");
  const [newsSummary, setNewsSummary] = useState(stripHtml(initialNotice?.content || ""));
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>(
    initialNotice?.imageUrls?.length
      ? initialNotice.imageUrls
      : initialNotice?.imageUrl
        ? [initialNotice.imageUrl]
        : []
  );
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const isNews = category === "뉴스";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("제목을 입력해주세요.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const uploadedUrls: string[] = [];

      for (const file of imageFiles) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadResponse = await fetch("/api/admin/notice-image", {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) {
          const data = (await uploadResponse.json()) as { message?: string };
          throw new Error(data.message || "이미지 업로드에 실패했습니다.");
        }

        const uploadData = (await uploadResponse.json()) as { url: string };
        uploadedUrls.push(uploadData.url);
      }

      const nextImageUrls = [...imageUrls, ...uploadedUrls];

      if (isNews && !newsLink.trim()) {
        throw new Error("뉴스 카테고리는 링크를 입력해야 합니다.");
      }

      if (isNews && nextImageUrls.length === 0) {
        throw new Error("뉴스 카테고리는 썸네일 이미지를 최소 1개 등록해야 합니다.");
      }

      const endpoint = mode === "edit" ? `/api/notices/${noticeId}` : "/api/notices";
      const method = mode === "edit" ? "PATCH" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          author,
          category,
          newsLink: category === "뉴스" ? newsLink : "",
          content: category === "뉴스" ? newsSummary.trim() : content,
          imageUrls: nextImageUrls,
          imageUrl: nextImageUrls[0] || "",
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message || "저장에 실패했습니다.");
      }

      router.replace("/admin/notices");
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "처리 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{mode === "edit" ? "공지 수정" : "새 공지 작성"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <Input placeholder="공지 제목" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Select value={category} onValueChange={(value) => setCategory(value as NoticeCategory)}>
              <SelectTrigger>
                <SelectValue placeholder="카테고리" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="공지사항">공지사항</SelectItem>
                <SelectItem value="뉴스">뉴스</SelectItem>
                <SelectItem value="IR">IR</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {!isNews ? (
            <Input placeholder="작성자" value={author} onChange={(e) => setAuthor(e.target.value)} />
          ) : (
            <p className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-700">
              뉴스 카테고리는 제목 + 썸네일(+링크) 중심으로 등록되며, 간단한 설명을 함께 작성할 수 있습니다.
            </p>
          )}

          {category === "뉴스" ? (
            <Input
              placeholder="뉴스 링크 URL (예: https://...)"
              value={newsLink}
              onChange={(e) => setNewsLink(e.target.value)}
            />
          ) : null}

          {!isNews ? (
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-700">공지 본문</p>
              <NoticeRichEditor value={content} onChange={setContent} onError={setMessage} disabled={loading} />
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-700">뉴스 간단 설명 (선택)</p>
              <Textarea
                rows={4}
                maxLength={300}
                placeholder="목록에 노출할 간단한 설명을 입력하세요. (예: 2~4줄)"
                value={newsSummary}
                onChange={(e) => setNewsSummary(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">{newsSummary.length}/300</p>
            </div>
          )}

          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-700">
              대표 썸네일 이미지 {isNews ? "(필수)" : "(선택)"}
            </p>
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setImageFiles(Array.from(e.target.files || []))}
            />
            <p className="text-xs text-muted-foreground">
              보안 정책상 파일 선택 입력창에는 기존 파일명이 자동 표시되지 않습니다.
            </p>
            {imageFiles.length > 0 ? (
              <p className="text-xs text-slate-600">새로 선택한 파일: {imageFiles.map((file) => file.name).join(", ")}</p>
            ) : null}
            {imageUrls.length > 0 ? (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">현재 등록 이미지 (첫 번째가 대표 썸네일)</p>
                <div className="flex flex-wrap gap-3">
                  {imageUrls.map((url, index) => (
                    <div key={`${url}-${index}`} className="space-y-2">
                      <img src={url} alt={`공지 이미지 ${index + 1}`} className="h-24 w-36 rounded-md border object-cover" />
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            if (index === 0) return;
                            setImageUrls((prev) => {
                              const next = [...prev];
                              const [target] = next.splice(index, 1);
                              next.unshift(target);
                              return next;
                            });
                          }}
                        >
                          대표로 설정
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setImageUrls((prev) => prev.filter((_, currentIndex) => currentIndex !== index))}
                        >
                          제거
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            <Button type="submit" disabled={loading}>
              {loading ? "처리 중..." : mode === "edit" ? "수정 저장" : "공지 등록"}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.push("/admin/notices")} disabled={loading}>
              목록으로
            </Button>
          </div>

          {message ? <p className="text-sm text-muted-foreground">{message}</p> : null}
        </form>
      </CardContent>
    </Card>
  );
}
