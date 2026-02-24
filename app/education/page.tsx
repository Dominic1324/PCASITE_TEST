import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/common/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    title: "기초 코딩",
    detail: "블록코딩부터 텍스트 코딩 전환까지 단계별로 학습합니다.",
  },
  {
    title: "프로젝트 심화",
    detail: "게임·앱·AI 기초 프로젝트로 문제 해결 역량을 강화합니다.",
  },
  {
    title: "포트폴리오",
    detail: "학습 과정을 문서화해 결과물을 포트폴리오로 완성합니다.",
  },
];

export default function EducationPage() {
  return (
    <>
      <Header />
      <PageBanner title="EDUCATION" />
      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 rounded-2xl border border-slate-200/70 bg-white p-6 md:p-8">
            <Badge variant="secondary">PROGRAMS</Badge>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">단계별 로드맵으로 체계적인 성장을 설계합니다</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              입문부터 심화 프로젝트, 포트폴리오 완성까지 학년과 수준에 맞춘 커리큘럼으로 학습 흐름을 끊김 없이 이어갑니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.title} className="border-slate-200/70 shadow-sm">
                <CardContent className="space-y-3 p-6 md:p-7">
                  <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{program.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
