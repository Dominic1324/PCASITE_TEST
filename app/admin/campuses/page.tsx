import Header from "@/components/Header";
import CampusAdminPanel from "@/components/admin/CampusAdminPanel";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CampusesAdminPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h1 id="campus-admin-top" className="text-3xl font-bold">캠퍼스 관리자</h1>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline">
                <Link href="/admin">관리자 홈으로</Link>
              </Button>
              <AdminLogoutButton />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">캠퍼스 정보를 등록/수정/삭제할 수 있습니다.</p>
        </div>
        <CampusAdminPanel />
      </div>
    </>
  );
}
