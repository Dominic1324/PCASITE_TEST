'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/common/PageBanner";
  
  const affiliateData = [
    {
      category: "사업 모델",
      fc: {
        check: true,
        content: "완전 통합 운영",
        desc: "본사와 동일한 시스템",
      },
      cp: {
        check: true,
        content: "Shop in Shop",
        desc: "소규모 창업 가능",
      },
    },
    {
      category: "영업권",
      fc: {
        check: true,
        content: "지역 영업권 보장",
        desc: "독점 운영 지역",
      },
      cp: {
        check: false,
        content: "-",
        desc: "영업권 없음",
      },
    },
    {
      category: "커리큘럼",
      fc: {
        check: true,
        content: "전체 커리큘럼 공유",
        desc: "모든 과정 제공",
      },
      cp: {
        check: true,
        content: "핵심 과정만 제공",
        desc: "블록코딩 + 파이썬",
      },
    },
    {
      category: "강사 지원",
      fc: {
        check: true,
        content: "원격강의 시스템",
        desc: "강사 수급 문제 해결",
      },
      cp: {
        check: false,
        content: "자체 강사 운영",
        desc: "-",
      },
    },
    {
      category: "마케팅 지원",
      fc: {
        check: true,
        content: "홍보 노하우 전수",
        desc: "마케팅 자료 제공",
      },
      cp: {
        check: false,
        content: "자율 마케팅",
        desc: "-",
      },
    },
    {
      category: "품질 관리",
      fc: {
        check: true,
        content: "본사 품질 관리",
        desc: "리스크 최소화",
      },
      cp: {
        check: false,
        content: "자율 관리",
        desc: "-",
      },
    },
    {
      category: "운영 자율성",
      fc: {
        check: false,
        content: "본사 시스템 준수",
        desc: "통합 운영",
      },
      cp: {
        check: true,
        content: "자유로운 운영",
        desc: "운영 방식 자율 결정",
      },
    },
    {
      category: "적합 대상",
      fc: {
        check: false,
        content: "신규 창업자",
        desc: "체계적 지원 필요",
      },
      cp: {
        check: false,
        content: "기존 학원 운영자",
        desc: "추가 과목 개설",
      },
    },
  ];
  
  const CheckIcon = () => (
    <div className="inline-flex items-center justify-center w-5 h-5 bg-[#7ac943] text-white rounded-full font-bold text-xs mb-1">
      ✓
    </div>
  );
  
  export default function AffiliatePage() {
    return (
      <>
        <Header />
        <PageBanner title="FRANCHISE" watermark="FRANCHISE" />

        <section id="affiliate" className="w-full bg-background py-12 text-foreground md:py-16">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">플레이코딩아카데미 가맹사업 비교</h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">운영 방식과 지원 범위를 한눈에 비교하고 적합한 모델을 선택해보세요.</p>
            </div>

            <Card className="overflow-hidden border-slate-200/70 shadow-sm">
              <CardContent className="p-0">
                <Table className="w-full table-fixed">
                  <colgroup>
                    <col style={{ width: "22%" }} />
                    <col style={{ width: "39%" }} />
                    <col style={{ width: "39%" }} />
                  </colgroup>
                  <TableHeader>
                    <TableRow className="bg-slate-50">
                      <TableHead className="p-4 text-base font-semibold text-slate-800">구분</TableHead>
                      <TableHead className="p-4 text-center text-base font-semibold text-slate-800">프랜차이즈 가맹</TableHead>
                      <TableHead className="p-4 text-center text-base font-semibold text-slate-800">컨텐츠 공급 가맹</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {affiliateData.map((item) => (
                      <TableRow key={item.category} className="border-b border-slate-200 last:border-b-0">
                        <TableCell className="p-4 align-middle text-sm font-semibold text-slate-700 md:text-base">{item.category}</TableCell>
                        <TableCell className="p-4 align-middle">
                          <div className="flex flex-col items-center text-center">
                            {item.fc.check && <CheckIcon />}
                            <p className="text-sm font-medium text-slate-700">{item.fc.content}</p>
                            <p className="text-xs text-slate-500">{item.fc.desc}</p>
                          </div>
                        </TableCell>
                        <TableCell className="p-4 align-middle">
                          <div className="flex flex-col items-center text-center">
                            {item.cp.check && <CheckIcon />}
                            <p className="text-sm font-medium text-slate-700">{item.cp.content}</p>
                            <p className="text-xs text-slate-500">{item.cp.desc}</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-200/70 shadow-sm">
                <CardHeader>
                  <CardTitle>프랜차이즈 가맹 문의하기</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">본사와 동일한 시스템으로 안정적인 창업을 시작하세요.</p>
                  <Button className="w-full">문의하기</Button>
                </CardContent>
              </Card>

              <Card className="border-slate-200/70 shadow-sm">
                <CardHeader>
                  <CardTitle>컨텐츠 공급 가맹 문의하기</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">기존 학원에 PCA의 검증된 코딩 교육 컨텐츠를 더하세요.</p>
                  <Button className="w-full">문의하기</Button>
                </CardContent>
              </Card>

              <Card className="border-slate-200/70 shadow-sm">
                <CardHeader>
                  <CardTitle>가맹점 확인하기</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">가까운 PCA 가맹점을 확인해보세요.</p>
                  <Button asChild className="w-full">
                    <Link href="/campus">가맹점 찾기</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }