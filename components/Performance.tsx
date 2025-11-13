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
              PCA는
              <br />
              결과로
              <br />
              증명합니다
            </h2>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">주요 대학 합격 현황</h3>
              <ul className="space-y-4">
                {uniAcceptances.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">주요 수상 실적</h3>
              <ul className="space-y-4">
                {awards.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
