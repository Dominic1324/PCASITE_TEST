import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/common/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getNoticeById } from "@/lib/notices";
import NoticeCoverSlider from "@/components/board/NoticeCoverSlider";

export default async function NoticeDetailPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const notice = await getNoticeById(id);
  if (!notice) {
    notFound();
  }

  const imageUrls = notice.imageUrls?.length
    ? notice.imageUrls
    : notice.imageUrl
      ? [notice.imageUrl]
      : [];

  return (
    <>
      <Header />
      <PageBanner title="NOTICE" />
      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <Card className="border-slate-200/70 shadow-sm">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl text-slate-900">{notice.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {notice.author} · {notice.date} · 조회수 {notice.views}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <NoticeCoverSlider imageUrls={imageUrls} title={notice.title} />

              <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
                {notice.content?.trim() ? (
                  <div
                    className="space-y-3 leading-relaxed [&_a]:text-blue-600 [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-slate-300 [&_blockquote]:pl-4 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:text-xl [&_h3]:font-semibold [&_img]:my-4 [&_img]:rounded-lg [&_img]:border [&_img]:max-w-full [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:text-slate-700 [&_ul]:list-disc [&_ul]:pl-6"
                    dangerouslySetInnerHTML={{ __html: notice.content }}
                  />
                ) : (
                  <p className="text-sm text-slate-500">등록된 상세 내용이 없습니다.</p>
                )}
              </div>

              <div>
                <Button asChild variant="outline">
                  <Link href="/board">목록으로 돌아가기</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
