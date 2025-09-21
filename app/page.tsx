'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Trophy, Users, BookOpen, Star, Calendar, ArrowRight, Github, ExternalLink, Check, Brain, GitMerge, Building, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

const curriculumData = [
  {
    id: '01',
    level: '초등 과정',
    title: '컴퓨팅 사고력과 창의력 증진',
    description: '블록 코딩부터 시작하여 알고리즘의 기본 원리를 배우고, 간단한 게임과 애니메이션을 만들며 창의력을 키웁니다.'
  },
  {
    id: '02',
    level: '중등 과정',
    title: '알고리즘 심화 및 프로그래밍 언어 학습',
    description: 'Python, C++ 등 실무적인 프로그래밍 언어를 배우고, 자료구조와 알고리즘에 대한 깊이 있는 이해를 통해 대회 수준의 문제 해결 능력을 갖춥니다.'
  },
  {
    id: '03',
    level: '고등 과정',
    title: '전문 분야 탐색 및 실전 프로젝트',
    description: '머신러닝, 데이터 분석, 웹/앱 어플리케이션 개발 등 최신 기술 트렌드를 반영한 프로젝트를 직접 기획하고 개발하며 실전 경험을 쌓습니다.'
  },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + curriculumData.length) % curriculumData.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % curriculumData.length);
  };

  const activeCurriculum = curriculumData[activeIndex];

  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const transformValue = Math.abs(offset * -20);
    const scaleValue = offset === 0 ? 1.1 : 0.9;
    const opacityValue = offset === 0 ? 1 : 0.6;
    const zIndexValue = offset === 0 ? 10 : 0;
    const blurValue = offset < 0 ? 'blur(4px)' : 'blur(0px)';

    return {
      transform: `translateX(${transformValue}%) scale(${scaleValue})`,
      opacity: opacityValue,
      zIndex: zIndexValue,
      filter: blurValue,
    };
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="PCA Logo" width={100} height={40} />
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link href="#curriculum" className="text-sm font-medium hover:text-primary transition-colors">Curriculum</Link>
            <Link href="#achievements" className="text-sm font-medium hover:text-primary transition-colors">Achievements</Link>
            <Link href="#news" className="text-sm font-medium hover:text-primary transition-colors">News</Link>
            <Button className="bg-primary text-primary-foreground px-8 py-4 transition-colors hover:bg-[#283890] hover:text-[#fef100]">Play</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full flex items-center min-h-[calc(100vh-4rem)] py-12">
          <Image src="/books-1.jpg" alt="Background of PCA course books" fill className="-z-10 object-cover" priority />
          <div className="absolute inset-0 bg-black/60 -z-10" />
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Badge variant="secondary" className="mb-4">Building Excellence from Fundamentals</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary-foreground">Programming Coding Academy</h1>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-lg">기초부터 탄탄하게 코딩을 마스터하세요. PCA만의 검증된 방법론은 견고한 기초와 실습을 통해 초보자를 숙련된 개발자로 성장시킵니다.</p>
            </div>
          </div>
        </section>

        {/* About PCA Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About PCA</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">PCA는 코딩을 통해 생각하는 방법을 가르칩니다</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3">
              <Card className="group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#283890]">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="flex justify-center items-center mb-4">
                    <div className="rounded-full bg-primary text-primary-foreground p-4 group-hover:bg-[#fef100] group-hover:text-[#283890]">
                      <BookOpen className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#fef100]">생기부</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-[#fef100]">수행평가, 학종 포트폴리오</p>
                </CardContent>
              </Card>
              <Card className="group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#283890]">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="flex justify-center items-center mb-4">
                    <div className="rounded-full bg-primary text-primary-foreground p-4 group-hover:bg-[#fef100] group-hover:text-[#283890]">
                      <Brain className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#fef100]">EC/AP</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-[#fef100]">AI 기술 앱 개발</p>
                </CardContent>
              </Card>
              <Card className="group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#283890]">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="flex justify-center items-center mb-4">
                    <div className="rounded-full bg-primary text-primary-foreground p-4 group-hover:bg-[#fef100] group-hover:text-[#283890]">
                      <Trophy className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#fef100]">대회</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-[#fef100]">코드페어와 공모전</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Curriculums</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">PCA는 학생들의 연령/수준/적성에 맞는 코스를 체계적으로 제공합니다</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">{activeCurriculum?.level}</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{activeCurriculum?.title}</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">{activeCurriculum?.description}</p>
                <div className="flex gap-4 pt-4">
                    <Button onClick={handlePrev} variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
                    <Button onClick={handleNext} variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
                </div>
              </div>
              <div className="relative h-[400px] flex items-center justify-center">
                {curriculumData.map((item, index) => (
                  <div key={item.id} className="absolute w-3/5 transition-all duration-500 ease-in-out" style={getCardStyle(index)}>
                    <Card className="h-[350px]">
                      <CardContent className="p-6">
                        {/* Empty as requested */}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Student Achievements */}
        <section id="achievements" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Student Achievements</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">PCA는 학생들마다 확실한 결과를 만들어냅니다</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Image src="/placeholder.svg?height=200&width=400" width={400} height={200} alt="Student Project" className="rounded-lg object-cover w-full h-48" />
                </CardHeader>
                <CardContent>
                  {/* ... Omitted for brevity ... */}
                </CardContent>
              </Card>
              {/* ... Other cards ... */}
            </div>
          </div>
        </section>

        {/* ... Other sections ... */}
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground sm:ml-auto">© 2024 Programming Coding Academy. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">개인정보처리방침</Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">이용약관</Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">문의하기</Link>
        </nav>
      </footer>
    </div>
  );
}
