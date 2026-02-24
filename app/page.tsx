'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, BookOpen, Globe, Lightbulb, MapPin, Mail, Phone, Quote } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KakaoMap from "@/components/KakaoMap";

const heroHighlights = [
	{ title: "4차 산업혁명 대비", description: "AI·로봇·데이터를 아우르는 융합 사고력" },
	{ title: "자체 제작 교재", description: "PCA 연구진이 만든 프로젝트형 콘텐츠" },
	{ title: "과정 중심 기록", description: "결과보다 탐구 여정을 남기는 포트폴리오" },
];

const aboutFeatures = [
	{
		title: "사고력 중심 수업",
		description: "문제를 정의하고 해결 과정을 직접 설계합니다.",
		icon: Lightbulb,
	},
	{
		title: "자체 커리큘럼",
		description: "현장 교사와 연구원이 개발한 PCA 맞춤 교재.",
		icon: BookOpen,
	},
	{
		title: "코딩 그 이상의 가치",
		description: "협업·발표·윤리 의식까지 아우르는 프로젝트 경험.",
		icon: Globe,
	},
];

const categoryCards = [
	{
		tag: "ABOUT",
		title: "플레이코딩아카데미 소개",
		description: "코딩을 통해 새로운 시선을 기르는 교육 철학을 확인하세요.",
		href: "#about",
	},
	{
		tag: "EDUCATION",
		title: "커리큘럼 & 프로그램",
		description: "학년별 로드맵과 프로젝트 과정을 한눈에 확인할 수 있습니다.",
		href: "#education",
	},
	{
		tag: "CAMPUS",
		title: "캠퍼스 / 문의",
		description: "강남대치캠퍼스와 상담 채널 정보를 빠르게 안내합니다.",
		href: "#contact",
	},
];

const inspirationQuotes = [
	{ quote: "제가 초등학교 6학년 때 프로그래밍을 배우기 시작한 이유는 동생과 함께 즐길 무언가를 만들고 싶었기 때문입니다.", author: "마크 저커버그", role: "메타 창업자" },
	{ quote: "이 나라에 사는 모든 사람은 컴퓨터 프로그래밍을 배워야 합니다. 프로그래밍은 생각하는 방법을 가르쳐 줍니다.", author: "스티브 잡스", role: "애플 공동창업자" },
	{ quote: "오늘날 컴퓨터 과학에 대한 이해는 필수입니다. 국가 경쟁력은 우리가 아이들에게 얼마나 잘 가르치느냐에 달려 있습니다.", author: "버락 오바마", role: "미국 전 대통령" },
	{ quote: "컴퓨터 프로그래밍은 사고의 범위를 넓히고 모든 문제에 대해 새로운 해결책을 생각할 수 있게 합니다.", author: "빌 게이츠", role: "마이크로소프트 창업자" },
];

const educationFocus = [
	{ title: "EDUCATION", description: "학생 눈높이에 맞춘 다양한 코딩 프로그램", details: ["학년별 레벨 제안", "체험형 워크숍"] },
	{ title: "PROCESS", description: "결과가 아닌 과정을 기록하는 학습 여정", details: ["아이디어 저널", "주차별 피드백"] },
	{ title: "SUPPORT", description: "캠퍼스와 온라인을 연결한 밀착 케어", details: ["상시 멘토링", "학부모 컨퍼런스"] },
];

const contactChannels = [
	{ label: "학원 상담", value: "02-539-1113", href: "tel:025391113", icon: Phone },
	{ label: "가맹·사업", value: "02-568-1113", href: "tel:025681113", icon: Phone },
	{ label: "이메일", value: "joongwon.sim@playcoding.ac", href: "mailto:joongwon.sim@playcoding.ac", icon: Mail },
	{ label: "블로그", value: "playcodingacademy", href: "https://blog.naver.com/playcodingacademy", icon: Globe },
];

export default function HomePage() {
	return (
		<div className="flex min-h-screen flex-col bg-background">
			<Header />
			<main className="flex-1">
				<section className="relative overflow-hidden bg-slate-900 text-white">
					<div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at top, rgba(255,255,255,0.25), transparent 55%)" }} />
					<div className="relative z-10 container mx-auto grid gap-10 px-4 py-20 md:grid-cols-[1.1fr,0.9fr] md:px-6 lg:py-28">
						<div>
							<Badge className="border border-white/30 bg-white/10 text-[0.65rem] uppercase tracking-[0.4em] text-white">Play Coding Academy</Badge>
							<h1 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl">
								4차 산업혁명 시대의 리더 양성을 위한
								<br />
								올바른 코딩 교육을 선도합니다.
							</h1>
							<p className="mt-6 max-w-2xl text-lg text-white/80">
								코딩을 도구가 아닌 사고의 언어로 바라보며, 학생 눈높이의 프로젝트와 과정 중심 기록을 통해 성장 여정을 설계합니다.
							</p>
							<div className="mt-10 flex flex-wrap gap-4">
								<Button className="rounded-full bg-white px-8 py-3 text-slate-900 hover:bg-white/90" asChild>
									<Link href="#about">교육 소개 보기</Link>
								</Button>
								<Button variant="outline" className="rounded-full border-white/50 bg-transparent px-8 py-3 text-white hover:bg-white/10" asChild>
									<Link href="#contact">
										상담 문의하기
										<ArrowUpRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
						<div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-2xl">
							<p className="text-xs uppercase tracking-[0.4em] text-white/60">PCA Highlights</p>
							<div className="mt-6 space-y-5">
								{heroHighlights.map((item) => (
									<div key={item.title} className="rounded-2xl border border-white/20 bg-white/5 p-4">
										<p className="text-sm font-semibold text-white">{item.title}</p>
										<p className="text-sm text-white/70">{item.description}</p>
									</div>
								))}
							</div>
							<p className="mt-8 text-sm text-white/80">
								PCA 브로슈어와 커리큘럼 PDF를 통해 자세한 프로그램을 안내해 드립니다.
							</p>
						</div>
					</div>
				</section>

				<section id="about" className="w-full bg-white py-16 md:py-24">
					<div className="container mx-auto px-4 md:px-6">
						<div className="text-center">
							<p className="text-xs uppercase tracking-[0.4em] text-slate-400">ABOUT PCA</p>
							<h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">플레이코딩아카데미는</h2>
							<p className="mx-auto mt-4 max-w-3xl text-sm text-slate-500">
								학생이 좋아하는 주제로 세상을 새롭게 바라보고, 탐구 과정 전반을 기록하며, 협업과 발표 역량까지 키우는 교육을 지향합니다.
							</p>
						</div>
						<div className="mt-10 grid gap-6 md:grid-cols-3">
							{aboutFeatures.map((feature) => (
								<Card key={feature.title} className="border-slate-200/70 shadow-sm">
									<CardContent className="space-y-4 p-6">
										<div className="rounded-full bg-slate-900/5 p-3 text-slate-900">
											<feature.icon className="h-5 w-5" />
										</div>
										<div>
											<p className="text-lg font-semibold text-slate-900">{feature.title}</p>
											<p className="text-sm text-slate-500">{feature.description}</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section className="w-full bg-slate-50 py-16 md:py-24">
					<div className="container mx-auto grid gap-6 px-4 md:grid-cols-3 md:px-6">
						{categoryCards.map((card) => (
							<Link key={card.title} href={card.href} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1">
								<p className="text-xs uppercase tracking-[0.3em] text-slate-400">{card.tag}</p>
								<p className="mt-3 text-xl font-semibold text-slate-900">{card.title}</p>
								<p className="mt-2 text-sm text-slate-500">{card.description}</p>
								<div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900">
									바로가기
									<ArrowUpRight className="h-4 w-4" />
								</div>
							</Link>
						))}
					</div>
				</section>

				<section className="w-full bg-white py-16 md:py-20">
					<div className="container mx-auto px-4 md:px-6">
						<div className="text-center">
							<p className="text-xs uppercase tracking-[0.4em] text-slate-400">코딩을 통해</p>
							<h3 className="mt-2 text-3xl font-semibold text-slate-900">새로운 시선을 갖게 합니다</h3>
						</div>
						<div className="mt-12 grid gap-6 md:grid-cols-2">
							<Card className="border-slate-200/70 bg-slate-50">
								<CardContent className="space-y-4 p-6">
									<p className="text-sm text-slate-600">
										학생의 상상력을 존중하고, 일상에서 발견한 문제를 스스로의 언어로 풀어내도록 돕습니다. PCA의 학습 여정은 아이디어 → 설계 → 제작 → 공유의 흐름으로 이어집니다.
									</p>
									<ul className="space-y-3 text-sm text-slate-600">
										<li>새로운 시선 · 문제 해결력 · 미래 역량</li>
										<li>스토리보드, 산출물, 발표 영상까지 전 과정 기록</li>
										<li>학부모와 공유되는 성장 리포트</li>
									</ul>
								</CardContent>
							</Card>
							<Card className="border-slate-200/70">
								<CardContent className="space-y-4 p-6">
									<p className="text-xs uppercase tracking-[0.3em] text-slate-400">VALUES</p>
									<p className="text-lg font-semibold text-slate-900">PCA가 지키는 약속</p>
									<ul className="space-y-3 text-sm text-slate-600">
										<li>선생님과 연구원이 함께 설계하는 깊이 있는 수업</li>
										<li>프로젝트 과정 전부를 기록하는 포트폴리오 관리</li>
										<li>학부모와 주기적으로 소통하는 성장 케어</li>
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section className="w-full bg-slate-50 py-16 md:py-20">
					<div className="container mx-auto px-4 md:px-6">
						<div className="text-center">
							<p className="text-xs uppercase tracking-[0.4em] text-slate-400">Voices on Coding</p>
							<h3 className="mt-2 text-3xl font-semibold text-slate-900">세상을 바꾼 사람들이 말하는 코딩</h3>
						</div>
						<div className="mt-12 grid gap-6 md:grid-cols-2">
							{inspirationQuotes.map((item) => (
								<Card key={item.author} className="border-slate-200/70 bg-white">
									<CardContent className="space-y-4 p-6">
										<Quote className="h-6 w-6 text-slate-400" />
										<p className="text-base text-slate-700">{item.quote}</p>
										<p className="text-sm font-semibold text-slate-900">{item.author}</p>
										<p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.role}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section id="education" className="w-full bg-white py-16 md:py-20">
					<div className="container mx-auto px-4 md:px-6">
						<div className="text-center">
							<p className="text-xs uppercase tracking-[0.4em] text-slate-400">EDUCATION</p>
							<h3 className="mt-2 text-3xl font-semibold text-slate-900">과정 중심 교육 철학</h3>
							<p className="mt-4 text-sm text-slate-500">학생 눈높이 · 과정 기록 · 캠퍼스 지원이라는 세 축을 중심으로 프로그램을 운영합니다.</p>
						</div>
						<div className="mt-10 grid gap-6 md:grid-cols-3">
							{educationFocus.map((focus) => (
								<Card key={focus.title} className="border-slate-200/70">
									<CardContent className="space-y-3 p-6">
										<p className="text-xs uppercase tracking-[0.3em] text-slate-400">{focus.title}</p>
										<p className="text-xl font-semibold text-slate-900">{focus.description}</p>
										<ul className="text-sm text-slate-500">
											{focus.details.map((detail) => (
												<li key={detail}>{detail}</li>
											))}
										</ul>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<section id="contact" className="w-full bg-slate-900 py-16 text-white md:py-24">
					<div className="container mx-auto grid gap-10 px-4 md:grid-cols-[1.1fr,0.9fr] md:items-stretch md:px-6">
						<div className="flex h-full flex-col rounded-3xl border border-white/20 bg-white/5 p-8">
							<p className="text-xs uppercase tracking-[0.4em] text-white/70">CAMPUSES & CONTACT</p>
							<h3 className="mt-4 text-3xl font-semibold">캠퍼스 / 교육 문의</h3>
							<p className="mt-3 text-sm text-white/80">상담 예약, 가맹 문의, 커리큘럼 브로슈어 등 필요한 정보를 아래 채널에서 빠르게 받아보세요.</p>
							<div className="mt-8 flex-1 space-y-4">
								{contactChannels.map((channel) => (
									<Link
										key={channel.label}
										href={channel.href}
										target={channel.href.startsWith("http") ? "_blank" : undefined}
										rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
										className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/5 p-4 text-white transition hover:bg-white/10"
									>
										<div className="flex items-center gap-3">
											<span className="rounded-full bg-white/10 p-3">
												<channel.icon className="h-4 w-4" />
											</span>
											<div>
												<p className="text-xs uppercase tracking-[0.3em] text-white/60">{channel.label}</p>
												<p className="text-base font-semibold text-white">{channel.value}</p>
											</div>
										</div>
										<ArrowUpRight className="h-4 w-4" />
									</Link>
								))}
							</div>
						</div>
						<div className="flex h-full flex-col rounded-3xl border border-white/20 bg-white/5 p-8">
							<p className="text-xs uppercase tracking-[0.4em] text-white/60">PCA CAMPUS</p>
							<h4 className="mt-4 text-2xl font-semibold">PCA 강남대치캠퍼스</h4>
							<div className="mt-6 space-y-4 text-sm text-white/80">
								<p className="flex items-start gap-3">
									<MapPin className="mt-1 h-4 w-4" />
									<span>서울 강남구 선릉로64길 8, 그랜드빌딩 7층</span>
								</p>
								<p className="flex items-center gap-3">
									<Phone className="h-4 w-4" />
									<span>02-539-1113</span>
								</p>
							</div>
							<div className="mt-8 flex-1 overflow-hidden rounded-2xl border border-white/15 bg-slate-900/40">
								<KakaoMap className="h-full min-h-[260px] w-full" />
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}