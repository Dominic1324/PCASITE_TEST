
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "새로운 코딩 교육 프로그램 출시!",
    description: "플레이코딩아카데미에서 혁신적인 코딩 교육 프로그램을 선보입니다.",
    image: "/news-images/landscape/1730877404859-노란색과 보라색 컬러풀한 3d 쇼핑몰 별점 리뷰 작성 혜택 이벤트 홍보 인스타그램 포스트의 사본 (600 x 300 px).png",
    link: "#",
  },
  {
    id: 2,
    title: "AI 시대, 코딩 교육의 중요성",
    description: "미래 사회를 이끌어갈 인재 양성을 위한 코딩 교육의 중요성을 알아봅니다.",
    image: "/news-images/landscape/1734500063111-코드페어 금상 수상의 사본.png",
    link: "#",
  },
  {
    id: 3,
    title: "학생 성공 사례: 코딩으로 꿈을 이루다",
    description: "PCA 졸업생들의 놀라운 성공 스토리를 만나보세요.",
    image: "/news-images/square/2024_한국코드페어_금상_수상_썸네일.png",
    link: "#",
  },
  {
    id: 4,
    title: "학부모를 위한 코딩 교육 가이드",
    description: "자녀의 코딩 교육, 어떻게 시작해야 할지 막막하신가요?",
    image: "/news-images/square/AI_생기부전략_.png",
    link: "#",
  },
  {
    id: 5,
    title: "코딩 교육, 왜 지금 시작해야 할까요?",
    description: "미래 사회의 필수 역량, 코딩 교육의 중요성을 알아봅니다.",
    image: "/news-images/square/Blue_Gold_Best_of_the_Best_Award_Winners_nomination_Instagram_Post_.png",
    link: "#",
  },
];

export default function News() {
  return (
    <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              News
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              코딩 교육의 최신 트렌드와 유용한 정보를 확인하세요.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full">
          {newsItems.map((item, index) => (
            <Link href={item.link} key={item.id} className={`group block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 ${index < 2 ? 'lg:col-span-2' : ''}`}>
              <Card className="h-full flex flex-col">
                <CardContent className="p-0 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={index < 2 ? 768 : 256}
                    height={index < 2 ? 256 : 256}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
          <Link href="https://blog.naver.com/playcodingacademy" className="group block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 h-full">
            <Card className="h-full flex flex-col justify-center items-center bg-[#283890] text-white">
              <CardContent className="p-0 flex flex-col justify-center items-center h-full">
                <h3 className="font-bold text-2xl">More</h3>
                <p className="text-sm">모든 소식 보기</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
