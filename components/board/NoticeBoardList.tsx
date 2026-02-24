"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { Notice, NoticeCategory } from "@/lib/notices";
import { stripHtml } from "@/lib/notice-content";
import fallbackNoticeImage from "@/lib/refe/PCA흑백.png";

type NoticeBoardListProps = {
  notices: Notice[];
};

const filters: Array<"전체" | NoticeCategory> = ["전체", "공지사항", "뉴스", "IR"];
const ITEMS_PER_PAGE = 10;

export default function NoticeBoardList({ notices }: NoticeBoardListProps) {
  const [activeFilter, setActiveFilter] = useState<"전체" | NoticeCategory>("전체");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeFilter === "전체") {
      return notices;
    }
    return notices.filter((notice) => (notice.category || "공지사항") === activeFilter);
  }, [activeFilter, notices]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const pagedNotices = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, -1, totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, -1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages];
  }, [currentPage, totalPages]);

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? "bg-slate-900 text-white" : "bg-white text-slate-700 hover:bg-slate-100"}`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mb-6 rounded-2xl border border-slate-200/70 bg-white px-6 py-4 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">{activeFilter}</span> 카테고리
        <span className="mx-1">·</span>총 <span className="font-semibold text-slate-900">{filtered.length}</span>개의 공지
      </div>

      <Card className="overflow-hidden border-slate-200/70 shadow-sm">
        <CardContent className="p-0">
          <div className="divide-y">
            {filtered.length === 0 ? (
              <p className="p-8 text-center text-sm text-slate-500">해당 카테고리의 공지가 없습니다.</p>
            ) : (
              pagedNotices.map((post) => (
                <Link
                  key={post.id}
                  href={post.category === "뉴스" && post.newsLink ? post.newsLink : `/board/${post.id}`}
                  target={post.category === "뉴스" && post.newsLink ? "_blank" : undefined}
                  rel={post.category === "뉴스" && post.newsLink ? "noreferrer" : undefined}
                  className="block p-6 transition-colors hover:bg-slate-50"
                >
                  <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
                    <img
                      src={post.imageUrl || fallbackNoticeImage.src}
                      alt={post.title}
                      className="h-20 w-28 rounded-lg border border-slate-200 object-cover"
                    />

                    <div className="min-w-0">
                      <div className="mb-1 inline-flex rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                        {post.category || "공지사항"}
                      </div>
                      <h3 className="truncate text-lg font-semibold text-slate-900">{post.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {post.author} · {post.date}
                      </p>
                      {post.content ? (
                        <p className="mt-2 line-clamp-2 text-sm text-slate-600">{stripHtml(post.content)}</p>
                      ) : null}
                    </div>

                    <div className="text-sm text-muted-foreground md:pl-4">
                      <span>조회수 {post.views}</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {filtered.length > 0 ? (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.max(1, prev - 1));
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {pageNumbers.map((page, idx) => (
                <PaginationItem key={`${page}-${idx}`}>
                  {page === -1 ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      ) : null}
    </>
  );
}
