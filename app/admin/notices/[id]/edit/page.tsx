import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import NoticeForm from "@/components/admin/NoticeForm";
import { getNoticeById } from "@/lib/notices";

export default async function NoticeEditPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const notice = await getNoticeById(id);
  if (!notice) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-3xl font-bold">공지 수정</h1>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <Link href="/admin/notices">공지 목록으로</Link>
              </Button>
              <AdminLogoutButton />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">기존 공지 내용을 수정하고 저장하세요.</p>
        </div>

        <NoticeForm mode="edit" noticeId={id} initialNotice={notice} />
      </div>
    </>
  );
}
