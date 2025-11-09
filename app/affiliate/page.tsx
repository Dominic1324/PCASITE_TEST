'use client';

  import Image from "next/image";
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
        <section id="affiliate" className="w-full bg-background text-foreground">
          <div className="px-4 md:px-6">
            <div> {/* New Wrapper Div */}
              <div className="sticky top-16 z-10 bg-background pt-8 md:pt-16 lg:pt-24">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-800">
                    플레이코딩아카데미 가맹사업 비교
                    </h2>
                  </div>
                </div>
                <div className="mx-auto max-w-5xl w-full">
<Table className="w-full table-fixed">
                    <colgroup>
                      <col style={{ width: '150px' }} />
                      <col style={{ width: 'calc((100% - 150px) / 2)' }} />
                      <col style={{ width: 'calc((100% - 150px) / 2)' }} />
                    </colgroup>
                    <TableHeader>
                      <TableRow className="border-b-2 border-gray-200">
                        <TableHead className="text-gray-800 text-base font-bold p-4 align-middle bg-white">구분</TableHead>
                        <TableHead className="text-center text-lg font-bold p-4 text-gray-800">
                        프랜차이즈 가맹
                        </TableHead>
                        <TableHead className="text-center text-lg font-bold p-4 text-gray-800">
                        컨텐츠 공급 가맹
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                  </Table>
                </div>
              </div>
              <div className="mx-auto max-w-5xl w-full">
                <Table className="w-full table-fixed">
                    <colgroup>
                      <col style={{ width: '150px' }} />
                      <col style={{ width: 'calc((100% - 150px) / 2)' }} />
                      <col style={{ width: 'calc((100% - 150px) / 2)' }} />
                    </colgroup>
                  <TableBody className="bg-white">
                    {affiliateData.map((item) => (
                      <TableRow key={item.category} className="border-b border-gray-200 last:border-b-0">
                        <TableCell className="font-semibold text-gray-700 text-base align-middle p-4">
                          {item.category}
                        </TableCell>
                        <TableCell className="align-middle p-4">
                          <div className="flex flex-col items-center text-center w-fit mx-auto">
                            {item.fc.check && <CheckIcon />}
                            <div className="font-medium text-sm text-gray-600">{item.fc.content}</div>
                            <div className="text-xs text-gray-400">
                              {item.fc.desc}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="align-middle p-4">
                          <div className="flex flex-col items-center text-center w-fit mx-auto">
                            {item.cp.check && <CheckIcon />}
                            <div className="font-medium text-sm text-gray-600">{item.cp.content}</div>
                            <div className="text-xs text-gray-400">
                              {item.cp.desc}
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div> {/* End of New Wrapper Div */}

            <div className="mx-auto max-w-5xl w-full my-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>프랜차이즈 가맹 문의하기</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      본사와 동일한 시스템으로 안정적인 창업을 시작하세요.
                    </p>
                    <Button className="w-full">문의하기</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>컨텐츠 공급 가맹 문의하기</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      기존 학원에 PCA의 검증된 코딩 교육 컨텐츠를 더하세요.
                    </p>
                    <Button className="w-full">문의하기</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>가맹 관련 문의하기</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      가맹 사업에 대해 더 궁금한 점이 있으신가요?
                    </p>
                    <Button className="w-full">문의하기</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
              <Footer />
      </>
    );
  }