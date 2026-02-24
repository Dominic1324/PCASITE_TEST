
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
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
    <div className="inline-flex items-center justify-center w-6 h-6 bg-green-400 text-white rounded-full font-bold text-sm mx-auto mb-2">
      ✓
    </div>
  );
  
  export default function Affiliate() {
    return (
      <section id="affiliate" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Affiliate
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                당신에게 맞는 최적의 사업 모델을 선택하세요.
              </p>
            </div>
          </div>
          <div className="mx-auto pt-12 max-w-6xl w-full">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-700 hover:bg-gray-700">
                      <TableHead className="w-[200px] text-white text-lg font-bold">구분</TableHead>
                      <TableHead className="text-center bg-indigo-600 text-white text-lg font-bold">
                        <div className="font-bold text-lg">FRANCHISE</div>
                        <div className="text-sm">프랜차이즈 가맹 (FC)</div>
                      </TableHead>
                      <TableHead className="text-center bg-green-600 text-white text-lg font-bold">
                        <div className="font-bold text-lg">CONTENTS PROVIDER</div>
                        <div className="text-sm">콘텐츠 공급 가맹 (CP)</div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {affiliateData.map((item, index) => (
                      <TableRow key={item.category} className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'} border-gray-600 hover:bg-gray-600`}>
                        <TableCell className="font-semibold text-white">
                          {item.category}
                        </TableCell>
                        <TableCell className="text-center text-gray-200">
                          {item.fc.check && <CheckIcon />}
                          <div className="font-medium">{item.fc.content}</div>
                          <div className="text-sm text-gray-400">
                            {item.fc.desc}
                          </div>
                        </TableCell>
                        <TableCell className="text-center text-gray-200">
                          {item.cp.check && <CheckIcon />}
                          <div className="font-medium">{item.cp.content}</div>
                          <div className="text-sm text-gray-400">
                            {item.cp.desc}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }
