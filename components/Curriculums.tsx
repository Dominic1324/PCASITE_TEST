'use client';

import { useState } from "react";
import { curriculumsData } from "@/app/data/curriculums";
import { individualCurriculumsData } from "@/app/data/individualCurriculums";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl sm:text-4xl font-bold w-full">PCA만의 교육 프로그램은?</h2>
            </div>
            <div className="container mx-auto mt-12 space-y-12">
                <div className="max-w-4xl mx-auto">
                    {/* Existing Curriculums Map */}
                    {curriculumsData.map((curriculum, index) => (
                        <div key={curriculum.id} className="p-8 md:p-12">
                            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
                                <div className={`md:col-span-2 ${index === 1 ? 'md:order-last' : ''}`}>
                                    <div className="relative w-full aspect-square">
                                        <Image 
                                            src={curriculum.image} 
                                            alt={curriculum.title} 
                                            fill 
                                            className="rounded-2xl object-cover" 
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-3 text-left">
                                    <h3 className="text-3xl font-bold text-gray-800">{curriculum.title}</h3>
                                    <p className="mt-4 text-muted-foreground">{curriculum.description}</p>
                                    <ul className="mt-6 grid grid-cols-2 gap-3">
                                        {curriculum.courses.map((course, courseIndex) => (
                                            <li key={courseIndex} className="bg-gray-100 p-3 rounded-md text-sm text-gray-700">{course}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* New "4th" Item for Individual Curriculums */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <div className="py-12 px-4 md:px-6">
                        <div className="max-w-5xl mx-auto text-center">
                            <h3 className="text-3xl font-bold mb-8">개별 맞춤 커리큘럼</h3>
                            <div className="flex justify-center space-x-4 mb-12">
                                {categories.map((category) => (
                                    <Button
                                    key={category.key}
                                    variant={activeCategory === category.key ? "default" : "outline"}
                                    onClick={() => setActiveCategory(category.key)}
                                    >
                                    {category.label}
                                    </Button>
                                ))}
                            </div>
                            <div className="mx-auto grid items-start gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full">
                                {currentCurriculums.map((item) => (
                                    <Card key={item.id} className="flex flex-row items-center p-3 text-left bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                        <div className="flex justify-center items-center mr-3">
                                            <div className="rounded-full bg-primary text-primary-foreground p-2">
                                                {item.icon && <item.icon className="h-5 w-5" />}
                                            </div>
                                        </div>
                                        <CardContent className="p-0">
                                            <h3 className="text-base font-bold mb-0.5">{item.name}</h3>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Curriculums;
