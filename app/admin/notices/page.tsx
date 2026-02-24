import Header from "@/components/Header";
import NoticeListPanel from "@/components/admin/NoticeListPanel";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NoticesAdminPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-3xl font-bold">공지 관리자</h1>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <Link href="/admin">관리자 홈으로</Link>
              </Button>
              <AdminLogoutButton />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">공지 목록을 확인하고, 새 글 작성/수정 페이지로 이동할 수 있습니다.</p>
        </div>
        <NoticeListPanel />
      </div>
    </>
  );
}
