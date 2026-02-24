import Header from "@/components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import NoticeForm from "@/components/admin/NoticeForm";

export default function NoticeCreatePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-3xl font-bold">새 공지 작성</h1>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <Link href="/admin/notices">공지 목록으로</Link>
              </Button>
              <AdminLogoutButton />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">공지 내용을 작성하고 등록하세요.</p>
        </div>

        <NoticeForm mode="create" />
      </div>
    </>
  );
}
