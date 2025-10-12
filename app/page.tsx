'use client'

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Trophy, Users, BookOpen, Star, Calendar, ArrowRight, Github, ExternalLink, Check, Brain, GitMerge, Building, ChevronLeft, ChevronRight, Blocks, GraduationCap, School, Sparkles, FileCode2, Cog, Smartphone, Apple, Lightbulb, Coffee, FlaskConical, Globe, Award, Laptop, PenTool, FileText, Lightbulb as Patent, Microscope, ClipboardList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const achievementsData = [
	{
		id: '01',
		title: 'E-Commerce Platform',
		description: 'React와 Node.js로 제작한 풀스택 이커머스 솔루션.',
		achievement: '2024 한국 코드페어 금상',
		image: '/placeholder.jpg',
		githubUrl: '#',
		liveUrl: '#',
	},
	{
		id: '02',
		title: 'AI Study Assistant',
		description: '머신러닝 기반의 학습 보조 앱.',
		achievement: '2024 KSEF International 은상',
		image: '/placeholder.jpg',
		githubUrl: '#',
		liveUrl: '#',
	},
	{
		id: '03',
		title: 'Mobile Fitness Tracker',
		description: '크로스플랫폼 피트니스 앱.',
		achievement: '2024 ISEF 지역 예선 우수상',
		image: '/placeholder.jpg',
		githubUrl: '#',
		liveUrl: '#',
	},
];

// Helper function to calculate circular offset
const getCircularOffset = (index: number, activeIndex: number, count: number) => {
	const diff = index - activeIndex;
	if (Math.abs(diff) <= count / 2) {
		return diff;
	}
	if (diff > 0) {
		return diff - count;
	}
	return diff + count;
};

export default function HomePage() {
	const [activeIndex, setActiveIndex] = useState(0);
	const dragStartXRef = useRef<number | null>(null);
	const isDraggingRef = useRef(false);
	const containerRef = useRef<HTMLDivElement | null>(null);

	// keyboard navigation (left/right)
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') handlePrev();
			if (e.key === 'ArrowRight') handleNext();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, []);

	const handlePrev = () => {
		setActiveIndex((prevIndex) => prevIndex - 1);
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) => prevIndex + 1);
	};

	const activeAchievement = achievementsData[((activeIndex % achievementsData.length) + achievementsData.length) % achievementsData.length];

	const handlePointerDown = (clientX: number) => {
		dragStartXRef.current = clientX;
		isDraggingRef.current = true;
		// disable native drag/selection
		if (containerRef.current) containerRef.current.style.pointerEvents = 'auto';
	};

	const handlePointerMove = (clientX: number) => {
		if (!isDraggingRef.current || dragStartXRef.current === null) return;
		// we could add visual feedback here (dragging offset)
	};

	const handlePointerUp = (clientX: number) => {
		if (!isDraggingRef.current || dragStartXRef.current === null) return;
		const diff = dragStartXRef.current - clientX;
		const threshold = 50; // px
		if (Math.abs(diff) > threshold) {
			if (diff > 0) handleNext();
			else handlePrev();
		}
		dragStartXRef.current = null;
		isDraggingRef.current = false;
		if (containerRef.current) containerRef.current.style.pointerEvents = '';
	};

	const getCardStyle = (index: number) => {
		const offset = getCircularOffset(index, activeIndex, achievementsData.length);

		const translateXValue = offset * 40;
		const scaleValue = offset === 0 ? 1.1 : 0.9;
		const opacityValue = offset === 0 ? 1 : 0.6;
		const zIndexValue = offset === 0 ? 10 : 0;

		return {
			transform: `translateX(${translateXValue}%) scale(${scaleValue})`,
			opacity: opacityValue,
			zIndex: zIndexValue,
			position: "absolute" as const,
			transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
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
						<Link
							href="#about"
							className="text-sm font-medium hover:text-primary transition-colors"
						>
							About
						</Link>
						<Link
							href="#curriculum"
							className="text-sm font-medium hover:text-primary transition-colors"
						>
							Curriculum
						</Link>
						<Link
							href="#achievements"
							className="text-sm font-medium hover:text-primary transition-colors"
						>
							Achievements
						</Link>
						<Link
							href="#news"
							className="text-sm font-medium hover:text-primary transition-colors"
						>
							News
						</Link>
						<Button className="bg-primary text-primary-foreground px-8 py-4 transition-colors hover:bg-[#283890] hover:text-[#fef100]">
							Play
						</Button>
					</nav>
				</div>
			</header>

			<main className="flex-1">
				{/* Hero Section */}
				<section className="relative w-full flex items-center min-h-[calc(100vh-4rem)] py-12">
					<Image
						src="/books-1.jpg"
						alt="Background of PCA course books"
						fill
						sizes="100vw"
						className="-z-10 object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/60 -z-10" />
					<div className="relative z-10 container mx-auto px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<Badge variant="secondary" className="mb-4">
								Building Excellence from Fundamentals
							</Badge>
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary-foreground">
								Programming Coding Academy
							</h1>
							<p className="max-w-[600px] text-primary-foreground/80 md:text-lg">
								기초부터 탄탄하게 코딩을 마스터하세요. PCA만의 검증된 방법론은 견고한 기초와 실습을 통해 초보자를 숙련된 개발자로 성장시킵니다.
							</p>
						</div>
					</div>
				</section>

				{/* About PCA Section */}
				<section
					id="about"
					className="w-full py-12 md:py-24 lg:py-32 bg-background"
				>
					<div className="container mx-auto px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									About PCA
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									PCA는 코딩을 통해 생각하는 방법을 가르칩니다
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3">
							<Card>
								<CardContent className="flex flex-col items-center text-center p-6">
									<div className="flex justify-center items-center mb-4">
										<div className="rounded-full bg-primary text-primary-foreground p-4">
											<BookOpen className="h-8 w-8" />
										</div>
									</div>
									<h3 className="text-xl font-bold mb-2">생기부</h3>
									<p className="text-sm text-muted-foreground">
										수행평가, 학종 포트폴리오
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-center text-center p-6">
									<div className="flex justify-center items-center mb-4">
										<div className="rounded-full bg-primary text-primary-foreground p-4">
											<Brain className="h-8 w-8" />
										</div>
									</div>
									<h3 className="text-xl font-bold mb-2">EC/AP</h3>
									<p className="text-sm text-muted-foreground">
										AI 기술 앱 개발
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="flex flex-col items-center text-center p-6">
									<div className="flex justify-center items-center mb-4">
										<div className="rounded-full bg-primary text-primary-foreground p-4">
											<Trophy className="h-8 w-8" />
										</div>
									</div>
									<h3 className="text-xl font-bold mb-2">대회</h3>
									<p className="text-sm text-muted-foreground">
										코드페어와 공모전
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Student Achievements */}
				<section
					id="achievements"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
				>
					<div className="container mx-auto px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800">
									Student Achievements
								</h2>
								<p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-0">
									PCA는 결과로 증명합니다.
								</p>
							</div>
						</div>
						
						{/* Floating Swipe Carousel - 5 items horizontal */}
						<div className="relative max-w-full mx-auto h-[500px] overflow-hidden">
							<div 
								ref={containerRef}
								className="relative h-full flex"
								style={{ transform: `translateX(-${(activeIndex % achievementsData.length) * 20}%)`, transition: isDraggingRef.current ? 'none' : 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
								onPointerDown={(e) => {
									if ('button' in e && e.button !== 0) return;
									handlePointerDown(e.clientX ?? (e as any).touches?.[0]?.clientX);
								}}
								onPointerMove={(e) => {
									handlePointerMove(e.clientX ?? (e as any).touches?.[0]?.clientX);
								}}
								onPointerUp={(e) => {
									handlePointerUp(e.clientX ?? (e as any).changedTouches?.[0]?.clientX);
								}}
								onPointerCancel={() => { dragStartXRef.current = null; isDraggingRef.current = false; }}
								onPointerLeave={(e) => { if (isDraggingRef.current) handlePointerUp(e.clientX ?? 0); }}
							>
								{(() => {
									const cards = [];
									const offsets = [-2, -1, 0, 1, 2];
									for (let i = 0; i < 5; i++) {
										const offset = offsets[i];
										const displayIndex = ((activeIndex + offset) % achievementsData.length + achievementsData.length) % achievementsData.length;
										const currentItem = achievementsData[displayIndex];
										const isActive = offset === 0;
										const isAdjacent = Math.abs(offset) === 1;
										
										cards.push(
											<div
												key={`card-${i}-${displayIndex}`}
												className="flex-shrink-0 w-1/5 px-0 flex items-center justify-center"
												style={{
													transform: `scale(1) translateY(0px) translateX(${offset * 10}%)`,
													opacity: isActive ? 1 : isAdjacent ? 0.8 : 0.7,
													zIndex: isActive ? 5 : isAdjacent ? 3 : 1,
													transition: isDraggingRef.current ? 'none' : 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
												}}
											>
												<div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300 bg-white p-0 flex flex-col space-y-4" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
													<div className="absolute bottom-1/4 left-0 right-0 border-t border-gray-300"></div>
												</div>
											</div>
										);
									}
									return cards;
								})()}
							</div>
							
							{/* Navigation Buttons */}
							<div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none z-10">
								<Button
									onClick={handlePrev}
									variant="outline"
									size="icon"
									className="pointer-events-auto rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 border-gray-300"
								>
									<ChevronLeft className="h-6 w-6" />
								</Button>
								<Button
									onClick={handleNext}
									variant="outline"
								size="icon"
									className="pointer-events-auto rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 border-gray-300"
								>
									<ChevronRight className="h-6 w-6" />
								</Button>
							</div>
							
							{/* Footer Text */}
							<div className="mt-12 text-center">
								<p className="text-2xl font-bold mb-2 text-gray-800">{activeAchievement.achievement}</p>
								<p className="text-gray-600">PCA는 결과로 증명합니다.</p>
							</div>
						</div>
					</div>
				</section>

				{/* ... Other sections ... */}
			</main>

			{/* Footer */}
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-muted-foreground sm:ml-auto">
					© 2024 Programming Coding Academy. All rights reserved.
				</p>
				<nav className="flex gap-4 sm:gap-6">
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4"
					>
						개인정보처리방침
					</Link>
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4"
					>
						이용약관
					</Link>
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4"
					>
						문의하기
					</Link>
				</nav>
			</footer>
		</div>
	);
}
