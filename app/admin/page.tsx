import Header from "@/components/Header";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";

export default function AdminPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-10 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-3xl font-bold">관리자 페이지</h1>
            <AdminLogoutButton />
          </div>
          <p className="text-sm text-muted-foreground">관리할 항목을 선택하세요.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-slate-200/70 shadow-sm">
            <CardHeader>
              <CardTitle>공지 관리</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">공지사항 등록, 수정, 삭제를 관리합니다.</p>
              <Button asChild>
                <Link href="/admin/notices">공지 관리자 이동</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-200/70 shadow-sm">
            <CardHeader>
              <CardTitle>캠퍼스 관리</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">캠퍼스 정보 등록, 수정, 삭제를 관리합니다.</p>
              <Button asChild>
                <Link href="/admin/campuses">캠퍼스 관리자 이동</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
