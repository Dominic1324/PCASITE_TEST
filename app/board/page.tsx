import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/common/PageBanner";
import { getNotices } from "@/lib/notices";
import NoticeBoardList from "@/components/board/NoticeBoardList";

export default async function BoardPage() {
  const boardPosts = await getNotices();

  return (
    <>
      <Header />
      <PageBanner title="NOTICE" />
      <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
        <NoticeBoardList notices={boardPosts} />
      </div>
      <Footer />
    </>
  );
}
