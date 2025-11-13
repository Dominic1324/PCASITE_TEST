'use client'

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Trophy, Users, BookOpen, Star, Calendar, ArrowRight, Github, ExternalLink, Check, Brain, GitMerge, Building, ChevronLeft, ChevronRight, Blocks, GraduationCap, School, Sparkles, FileCode2, Cog, Smartphone, Apple, Lightbulb, Coffee, FlaskConical, Globe, Award, Laptop, PenTool, FileText, Lightbulb as Patent, Microscope, ClipboardList, BriefcaseBusiness, Bot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { achievementsData } from "@/app/data/achievements";
import Curriculums from "@/components/Curriculums";
import News from "@/components/News";
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Performance from "@/components/Performance";

export default function HomePage() {
        const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
        const [selectedIndex, setSelectedIndex] = useState(0);
    
        const scrollPrev = useCallback(() => {
            if (emblaApi) emblaApi.scrollPrev();
        }, [emblaApi]);
    
        const scrollNext = useCallback(() => {
            if (emblaApi) emblaApi.scrollNext();
        }, [emblaApi]);
    
        const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }, []);
    
        useEffect(() => {
            if (!emblaApi) return;
            onSelect(emblaApi);
            emblaApi.on('select', onSelect);
            emblaApi.on('reInit', onSelect);
    
            const onKey = (e: KeyboardEvent) => {
    			if (e.key === 'ArrowLeft') scrollPrev();
    			if (e.key === 'ArrowRight') scrollNext();
    		};
    		window.addEventListener('keydown', onKey);
    		return () => window.removeEventListener('keydown', onKey);
        }, [emblaApi, onSelect, scrollPrev, scrollNext]);
    
        const [isPortfolioActive, setIsPortfolioActive] = useState(false);
        const [isVibeActive, setIsVibeActive] = useState(false);
        const portfolioToggleRef = useRef(null);
        const vibeToggleRef = useRef(null);
    
        useEffect(() => {
            const node = portfolioToggleRef.current;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setIsPortfolioActive(true), 200);
                    } else {
                        setIsPortfolioActive(false);
                    }
                },
                { threshold: 0.9 } // Trigger when 90% of the section is visible
            );
    
            if (node) {
                observer.observe(node);
            }
    
            return () => {
                if (node) {
                    observer.unobserve(node);
                }
            };
        }, []);
    
        useEffect(() => {
            const node = vibeToggleRef.current;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setIsVibeActive(true), 200);
                    } else {
                        setIsVibeActive(false);
                    }
                },
                { threshold: 0.9 } // Trigger when 90% of the section is visible
            );
    
            if (node) {
                observer.observe(node);
            }
    
            return () => {
                if (node) {
                    observer.unobserve(node);
                }
            };
        }, []);
    
    	const activeAchievement = achievementsData[selectedIndex];
    
    	return (
    		<div className="flex flex-col min-h-screen">
    			<Header />
    						    
    						    				<main className="flex-1">
    						    					{/* Hero Section */}
    						    					<section className="relative w-full flex items-center min-h-[calc(100vh-4rem)] py-12">
    						    						<Image src="/books/books-1.jpg" alt="Background of PCA course books" fill sizes="100vw" className="-z-10 object-cover" priority />
    						    						<div className="absolute inset-0 bg-black/60 -z-10" />
    						    						<div className="relative z-10 container mx-auto px-4 md:px-6">
    						    							<div className="flex flex-col items-center space-y-4 text-center">
    						    								<Badge variant="secondary" className="mb-4">Welcome to Play Coding Academy</Badge>
    						    								<h1 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl/none text-primary-foreground">AI 교육을 통해 강력한 입시 무기를 만듭니다</h1>
    														<p className="max-w-[600px] text-primary-foreground/80 md:text-lg">SW 포트폴리오 구축부터 입시 로드맵 설계, 커리어 코칭까지<br />AI와 함께 학생의 미래를 설계합니다.</p>
    						    								
    						    							</div>
    						    						</div>
    						    					</section>
    						    
    						    					{/* About PCA Section */}
    						    					<section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
    						    						    <div className="container mx-auto px-4 md:px-6">
    						    						        <div className="flex flex-col items-center justify-center space-y-4 text-center">
    						    						            <div className="space-y-2">
    						    						                                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">PCA와 함께라면 무엇이든지 가능합니다</h2>
    						    						                            </div>
    						    						                        </div>
    						    						                        						                        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3">
    						    						                        						                                                        <Card className="bg-white border-8 border-secondary rounded-3xl">
    						    						                        						                                                            <CardContent className="flex flex-col items-center text-center p-6 h-[250px] justify-around">
    						    						                        						                                                                <div className="flex justify-center items-center mb-4">
    						    						                        						                                                                    <div className="rounded-full bg-primary text-primary-foreground p-4"><BookOpen className="h-8 w-8" /></div>
    						    						                        						                                                                </div>
    						    						                        						                                                                <h3 className="text-xl font-bold mb-2">대학 입시 생기부</h3>
    						    						                        						                                                                <p className="text-sm text-muted-foreground">AI 역량을 강조하는 독창적인 탐구 보고서</p>
    						    						                        						                                                            </CardContent>
    						    						                        						                                                        </Card>
    						    						                        						                                                        <Card className="bg-white border-8 border-secondary rounded-3xl">
    						    						                        						                                                            <CardContent className="flex flex-col items-center text-center p-6 h-[250px] justify-around">
    						    						                        						                                                                <div className="flex justify-center items-center mb-4">
    						    						                        						                                                                    <div className="rounded-full bg-primary text-primary-foreground p-4"><Smartphone className="h-8 w-8" /></div>
    						    						                        						                                                                </div>
    						    						                        						                                                                <h3 className="text-xl font-bold mb-2">내러티브가 있는 EC/AP</h3>
    						    						                        						                                                                <p className="text-sm text-muted-foreground">나만의 스토리가 담긴 앱 개발 프로젝트</p>
    						    						                        						                                                            </CardContent>
    						    						                        						                                                        </Card>
    						    						                        						                                                        <Card className="bg-white border-8 border-secondary rounded-3xl">
    						    						                        						                                                            <CardContent className="flex flex-col items-center text-center p-6 h-[250px] justify-around">
    						    						                        						                                                                <div className="flex justify-center items-center mb-4">
    						    						                        						                                                                    <div className="rounded-full bg-primary text-primary-foreground p-4"><Trophy className="h-8 w-8" /></div>
    						    						                        						                                                                </div>
    						    						                        						                                                                <h3 className="text-xl font-bold mb-2">대회 대비</h3>
    						    						                        						                                                                <p className="text-sm text-muted-foreground">한국코드페어, 공모전 등 수상 실적 확보</p>
    						    						                        						                                                            </CardContent>
    						    						                        						                                                        </Card>
    						    						                        						                        </div>    						    						</div>
    						    					</section>

												<Performance />
    						    
    						    					{/* Student Achievements */}
    						    				                <section id="achievements" className="relative w-full overflow-hidden">
    						    									<div className="absolute inset-0 -z-10">
    						    										<div className="h-2/3 bg-[#f3f4f6]" />
    						    										<div className="relative h-1/3">
    						    											<div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/achievements/award.jpg')", backgroundPosition: 'center 75%' }} />
    						    											<div className="absolute inset-0 bg-black/50" />
    						    										</div>
    						    									</div>
    						    									<div className="py-20 md:py-32">
    						    										<div className="flex flex-col items-center justify-center space-y-4 text-center">
    						    											<div className="space-y-2">
    						    												<h2 className="text-2xl sm:text-4xl font-bold text-gray-800">PCA는 결과로 증명합니다</h2>
    						    											</div>
    						    										</div>
    						    										<div className="relative mt-12">
    						    							                            <div className="embla" ref={emblaRef}>
    						    							                                <div className="embla__container">
    						    							                                    {achievementsData.map((item, index) => (
    						    							                                        <div className="embla__slide" key={item.id} style={{ flex: '0 0 250px', padding: '2rem 1rem' }}>
    						    							                                                                                        <div 
    						    							                                                                                            className="h-full flex items-center"
    						    							                                                                                        >
    						    							                                                                                            <div 
    						    							                                                                                                className="w-[250px] h-[300px] bg-white rounded-2xl shadow-2xl flex flex-col relative transition-transform duration-500"
    						    							                                                                                                style={{ transform: `scale(${index === selectedIndex ? 1.1 : 0.85})` }}
    						    							                                                                                            >
    						    							                                                                                                <div className="absolute top-2 left-4 text-sm font-bold text-primary z-10 bg-white px-2 py-1 rounded-md">#{item.id}</div>
    						    							                                                                                                <div className="w-full h-4/6 relative">
    						    							                                                                                                    <Image src={item.image} alt={item.title} fill className="object-cover rounded-t-2xl" />
    						    							                                                                                                </div>					                                                    <div className="h-2/6 p-4 flex flex-col justify-center">
    						    							                                                        <h3 className="font-bold text-left text-xs">{item.title}</h3>
    						    							                                                        <div className="w-full flex items-center justify-between mt-2">
    						    							                                                            <p className="text-xs text-gray-500">Student Name</p>
    						    							                                                            <Link href={item.githubUrl} target="_blank" className="inline-flex items-center justify-center px-2 py-1 bg-gray-800 text-white text-xs font-mono rounded-md hover:bg-gray-700">
    						    							                                                                <Github className="h-3 w-3 mr-1" />
    						    							                                                                code
    						    							                                                            </Link>
    						    							                                                    </div>
    						    							                                                    </div>
    						    							                                                </div>
    						    							                                            </div>
    						    							                                        </div>
    						    							                                    ))}
    						    							                                </div>
    						    							                            </div>
    						    											<div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-20 pointer-events-none">
    						    												<Button onClick={scrollPrev} variant="outline" size="icon" className="pointer-events-auto rounded-full bg-white/80"><ChevronLeft className="h-6 w-6" /></Button>
    						    												<Button onClick={scrollNext} variant="outline" size="icon" className="pointer-events-auto rounded-full bg-white/80"><ChevronRight className="h-6 w-6" /></Button>
    						    											</div>
    						    										</div>
    						    									</div>
    						    									<div className="absolute bottom-0 left-0 right-0 text-center z-20 pointer-events-none h-1/3 flex items-center justify-center">
    						    										<h2 className="text-white text-2xl sm:text-4xl font-bold" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>{activeAchievement?.achievement}</h2>
    						    									</div>
    						    								</section>
    						    				{/* How is it possible? Section */}
    						    <section className="w-full py-8 md:py-16 lg:py-24 bg-white">
    						      <div className="container mx-auto px-4 md:px-6">
    						        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
    						          <h2 className="text-gray-800 text-2xl sm:text-4xl font-bold">어떻게 가능할까요?</h2>
    						        </div>
    						        <div className="max-w-4xl mx-auto space-y-8">
    						          <div ref={portfolioToggleRef} className="bg-white rounded-2xl border border-gray-200 p-12 flex items-center justify-between">
    						            <div>
    						              <h3 className={`text-3xl font-bold transition-colors transition-opacity duration-700 ${isPortfolioActive ? 'text-gray-800 opacity-100' : 'opacity-0'}`}>포트폴리오 중심 교육</h3>
    						              <p className={`mt-2 max-w-md transition-colors transition-opacity duration-700 ${isPortfolioActive ? 'text-muted-foreground opacity-100' : 'opacity-0'}`}>학생들은 PCPA와 함께 세상의 없는 나만의 프로젝트를<br />만들며 가시적인 결과물을 만들어냅니다.</p>
    						            </div>
    						            <div className={`w-32 h-16 rounded-full relative p-2 transition-colors duration-700 ${isPortfolioActive ? 'bg-yellow-300' : 'bg-gray-300'}`}>
    						              <div className={`w-12 h-12 bg-white rounded-full absolute flex items-center justify-center transition-all duration-700 left-2 ${isPortfolioActive ? 'translate-x-[64px]' : 'translate-x-0'}`}>
    						                <BriefcaseBusiness className="h-6 w-6 text-black" />
    						              </div>
    						            </div>
    						          </div>
    						          <div ref={vibeToggleRef} className="bg-white rounded-2xl border border-gray-200 p-12 flex items-center justify-between">
    						            <div>
    						              <h3 className={`text-3xl font-bold transition-colors transition-opacity duration-700 ${isVibeActive ? 'text-gray-800 opacity-100' : 'opacity-0'}`}>바이브 코딩 교육</h3>
    						              <p className={`mt-2 max-w-md transition-colors transition-opacity duration-700 ${isVibeActive ? 'text-muted-foreground opacity-100' : 'opacity-0'}`}>학생들로 하여금 창의성과 문제해결에 집중하게 하며,<br />AI는 프로젝트의 구현을 위한 파트너 역할을 맡습니다.</p>
    						            </div>
    						            <div className={`w-32 h-16 rounded-full relative p-2 transition-colors duration-700 ${isVibeActive ? 'bg-blue-800' : 'bg-gray-300'}`}>
    						              <div className={`w-12 h-12 bg-white rounded-full absolute flex items-center justify-center transition-all duration-700 left-2 ${isVibeActive ? 'translate-x-[64px]' : 'translate-x-0'}`}>
    						                <Bot className="h-6 w-6 text-black" />
    						              </div>
    						            </div>
    						          </div>
    						        </div>
    						      </div>
    						    </section>
    						    
    						    																<Curriculums />
    						    
    						    								    								<News />
    						    
    						    								    							</main>    			<Footer />
    		</div>
    	);
    

    
}