import { CheckCircle } from 'lucide-react';

const Performance = () => {
  const uniAcceptances = [
    { name: '서울대학교', details: '매년 합격생 배출\n2023년 만 16세 재원생 서울대 합격(학종)' },
    { name: 'KAIST', details: '매년 합격생 배출 (학종 - SW특기자 전형)' },
    { name: '고려대학교', details: '매년 합격생 배출 (학종-계열적합 전형)' },
    { name: '연세대학교', details: '매년 합격생 배출 (학종-활동우수자 전형)' },
    { name: '하버드 대학교 (Harvard University)', details: '2023년 합격생 배출 (Restrictive Early Action)' },
    { name: '펜실베이니아 대학교 (University of Pennsylvania)', details: '2023년 합격생 배출(Early Decision)' },
    { name: '코넬 대학교 (Cornell University)', details: '2024년 합격생 배출(Regular Decision)' },
  ];

  const awards = [
    { name: '한국코드페어', details: 'ISEF 국가대표 선발전(총 7명 선출)\n대상 2회, 매년 수상자 배출' },
    { name: '소프트웨어 사고력 올림피아드', details: '4명의 대상 배출\n총 50명 수상자 배출, 전국 최대 규모' },
    { name: 'ISEF', details: '매년 국가대표 배출' },
    { name: 'NYPC', details: '5명 수상자 배출' },
  ];

  return (
    <section className="bg-[#212121] text-white py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-1 flex items-center">
            <h2 className="text-4xl font-bold">
              PCA의
              <br />
              입시 및 대회 성적을
              <br />
              확인하세요
            </h2>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">주요 대학 합격 현황</h3>
              <div className="relative">
                <div className="absolute left-[1px] top-2 bottom-2 w-0.5 bg-gray-500/30" />
                <ul className="space-y-10">
                  {uniAcceptances.map((item, index) => (
                    <li key={index} className="relative pl-8">
                      <div className="absolute top-1 -left-[7px] h-4 w-4 bg-primary rounded-full border-4 border-[#212121]" />
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-gray-400 whitespace-pre-line">{item.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8">주요 수상 실적</h3>
              <div className="relative">
                <div className="absolute left-[1px] top-2 bottom-2 w-0.5 bg-gray-500/30" />
                <ul className="space-y-10">
                  {awards.map((item, index) => (
                    <li key={index} className="relative pl-8">
                      <div className="absolute top-1 -left-[7px] h-4 w-4 bg-primary rounded-full border-4 border-[#212121]" />
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-gray-400 whitespace-pre-line">{item.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
