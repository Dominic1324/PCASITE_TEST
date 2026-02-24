'use client';

import { useState } from "react";
import { curriculumsData } from "@/app/data/curriculums";
import { individualCurriculumsData } from "@/app/data/individualCurriculums";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Curriculums = () => {
    const [activeCategory, setActiveCategory] = useState("codingFundamentals");

    const categories = [
        {
            key: "codingFundamentals",
            label: "코딩 기초 과정",
        },
        {
            key: "admissionsProcess",
            label: "입시 과정",
        },
    ];

    const currentCurriculums = individualCurriculumsData[activeCategory];

    return (
        <section id="curriculum" className="py-20">
            <div className="container mx-auto">
                <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Programs</p>
                    <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">입시 대비형 SW 프로그램</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-500">
                        학년·전형 목적에 따라 커리큘럼을 구성하고, 연구 주제와 산출물을 철저히 기록합니다. 코스별 산출물은 Admissions Lab과 연동되어 서류·면접 자료로 활용됩니다.
                    </p>
                </div>

                <div className="mt-12 space-y-10">
                    {curriculumsData.map((curriculum) => (
                        <div key={curriculum.id} className="grid gap-8 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm lg:grid-cols-2">
                            <div className="space-y-4 text-left">
                                <h3 className="text-2xl font-semibold text-slate-900">{curriculum.title}</h3>
                                <p className="text-sm text-slate-500">{curriculum.description}</p>
                                <div className="rounded-2xl bg-slate-900/5 p-6 text-sm text-slate-600">
                                    <p className="font-medium text-slate-900">코스 구성</p>
                                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                                        {curriculum.courses.map((course) => (
                                            <li key={course} className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                                                {course}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="relative h-64 overflow-hidden rounded-2xl">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.2), rgba(15,23,42,0.6)), url(${curriculum.image})` }}
                                />
                                <div className="relative z-10 flex h-full flex-col justify-end rounded-2xl border border-white/10 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent p-6 text-white">
                                    <p className="text-sm text-white/70">Admissions Ready Project</p>
                                    <p className="text-lg font-semibold">프로젝트 + 보고서 + 인터뷰 케어</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-sm">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-slate-900">개별 맞춤 커리큘럼</h3>
                        <p className="mt-2 text-sm text-slate-500">전공 적합성과 경쟁력 강화를 위한 1:1 설계 프로그램입니다.</p>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <Button
                                key={category.key}
                                variant={activeCategory === category.key ? "default" : "outline"}
                                className="rounded-full"
                                onClick={() => setActiveCategory(category.key)}
                            >
                                {category.label}
                            </Button>
                        ))}
                    </div>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {currentCurriculums.map((item) => (
                            <Card key={item.id} className="border-slate-200/80 bg-slate-50/50">
                                <CardContent className="flex items-center gap-3 p-4">
                                    <div className="rounded-full bg-slate-900/10 p-3 text-slate-900">
                                        {item.icon && <item.icon className="h-5 w-5" />}
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold text-slate-900">{item.name}</h4>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Curriculums;