import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Header from "@/components/Header";

const boardPosts = [
  { id: 1, title: "PCA 11월 학부모 설명회 안내", date: "2025-11-15", author: "PCA 운영팀" },
  { id: 2, title: "겨울방학 특강반 모집 시작", date: "2025-11-12", author: "PCA 운영팀" },
  { id: 3, title: "2024 한국코드페어 수상 실적", date: "2025-11-10", author: "PCA 운영팀" },
  { id: 4, title: "신규 스크립트 코딩 과정 오픈", date: "2025-11-05", author: "PCA 운영팀" },
  { id: 5, title: "AI 시대, 우리 아이 코딩 교육은?", date: "2025-11-01", author: "PCA 운영팀" },
];

export default function BoardPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-4xl font-bold">PCA 소식</h1>
          <p className="text-muted-foreground">
            플레이코딩아카데미의 최신 소식과 공지사항을 확인하세요.
          </p>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {boardPosts.map((post) => (
                <Link href="#" key={post.id} className="block p-6 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                      <div>
                          <h3 className="text-lg font-semibold">{post.title}</h3>
                          <p className="text-sm text-muted-foreground">
                              {post.author} · {post.date}
                          </p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                          <span>조회수 123</span>
                      </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
