import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/common/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    title: "사고력 중심 코딩",
    description: "코딩을 도구가 아닌 사고의 언어로 학습하도록 수업을 설계합니다.",
  },
  {
    title: "과정 중심 기록",
    description: "결과보다 탐구 과정을 기록하고 피드백하는 학습 루틴을 운영합니다.",
  },
  {
    title: "프로젝트 기반 성장",
    description: "실제 문제를 해결하는 프로젝트로 협업·발표 역량까지 확장합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageBanner title="ABOUT PCA" />
      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 rounded-2xl border border-slate-200/70 bg-white p-6 md:p-8">
            <Badge variant="secondary">ABOUT</Badge>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">코딩을 통해 사고력과 실행력을 함께 키웁니다</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              PCA는 학생의 속도에 맞춘 수업 설계와 프로젝트 중심 학습을 통해 스스로 문제를 정의하고 해결하는 힘을 기르는 교육을 지향합니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item) => (
              <Card key={item.title} className="border-slate-200/70 shadow-sm">
                <CardContent className="space-y-3 p-6 md:p-7">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
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
