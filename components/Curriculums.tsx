'use client';

import { curriculumsData } from "@/app/data/curriculums";
import Image from "next/image";

const Curriculums = () => {
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
            </div>
        </section>
    );
};

export default Curriculums;
