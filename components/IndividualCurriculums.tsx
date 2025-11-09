
'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { individualCurriculumsData } from "@/app/data/individualCurriculums";

export default function IndividualCurriculums() {
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
    <section id="individual-curriculums" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            PCA의 개별 커리큘럼을 한눈에 확인하세요
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            학생의 목표와 수준에 맞춰 최적화된 맞춤형 교육 과정을 제공합니다.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "outline"}
              onClick={() => setActiveCategory(category.key)}
              className={`${activeCategory === category.key ? "bg-primary text-primary-foreground" : "bg-white text-foreground border-border"} hover:bg-primary/90 hover:text-primary-foreground`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-4 py-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full">
          {currentCurriculums.map((item) => (
            <Card key={item.id} className="flex flex-row items-center p-3 text-left bg-white">
              <div className="flex justify-center items-center mr-3">
                <div className="rounded-full bg-primary text-primary-foreground p-2">
                  {item.icon && <item.icon className="h-5 w-5" />}
                </div>
              </div>
              <CardContent className="p-0">
                <h3 className="text-base font-bold mb-0.5">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
