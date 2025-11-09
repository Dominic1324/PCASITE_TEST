import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col py-8 w-full shrink-0 px-4 md:px-6 border-t bg-background text-foreground">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 text-sm">
        {/* Company Info */}
        <div className="flex flex-col gap-2">
          <p>(주) 플레이코딩아카데미</p>
          <p>대표이사 : 심중원</p>
          <p>사업자등록번호 : 576-87-00527</p>
          <p>개인정보관리책임자 : 오명준</p>
          <p>서울시 강남구 선릉로 64길 8, 그랜드빌딩 7층</p>
        </div>        
        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <p className="font-bold">문의</p>
          <p>학원 상담 문의 : 02-539-1113</p>
          <p>가맹·사업 문의 : 02-568-1113</p>
          <p>이메일 : joongwon.sim@playcoding.ac</p>
        </div>

        {/* Social Media & Legal */}
        <div className="flex flex-col gap-2 md:items-end">
          <div className="flex gap-4 mb-2">
            {/* Placeholder for social media icons */}
            <Link href="#" className="text-muted-foreground hover:text-primary">Naver</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Kakao</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">Facebook</Link>
          </div>
          <nav className="flex flex-col gap-2 text-right">
            <Link href="#" className="text-xs hover:underline underline-offset-4">개인정보처리방침</Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">이용약관</Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">문의하기</Link>
          </nav>
          <p className="text-xs text-muted-foreground mt-4">Copyright© 2016 PlayCodingAcademy Co,. LTD. ALL rights reserved.</p>
          <p className="text-xs text-muted-foreground">Icons by <Link href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Flaticon</Link></p>
        </div>
      </div>
    </footer>
  );
}
