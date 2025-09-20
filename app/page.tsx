import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Code, Trophy, Users, BookOpen, Star, Calendar, ArrowRight, Github, ExternalLink, Check, Brain, GitMerge, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="PCA Logo" width={100} height={40} />
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#curriculum" className="text-sm font-medium hover:text-primary transition-colors">
              Curriculum
            </Link>
            <Link href="#achievements" className="text-sm font-medium hover:text-primary transition-colors">
              Achievements
            </Link>
            <Link href="#news" className="text-sm font-medium hover:text-primary transition-colors">
              News
            </Link>
            <Button>Enroll Now</Button>
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
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About PCA</h2>
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
                      <Brain className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Computational Thinking</h3>
                  <p className="text-sm text-muted-foreground">
                    스스로 컴퓨팅적 사고를 할 수 있는 힘을 길러줍니다.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="flex justify-center items-center mb-4">
                    <div className="rounded-full bg-primary text-primary-foreground p-4">
                      <GitMerge className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Algorithm</h3>
                  <p className="text-sm text-muted-foreground">
                    열린 사고를 지향하고, 알고리즘을 만드는 방법을 알려줍니다.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="flex justify-center items-center mb-4">
                    <div className="rounded-full bg-primary text-primary-foreground p-4">
                      <Building className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Architecture</h3>
                  <p className="text-sm text-muted-foreground">
                    기술로써의 코딩이 아닌 아키텍처를 구성하는 원리를 전달합니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Curriculums</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  PCA는 학생들의 연령/수준/적성에 맞는 코스를 체계적으로 제공합니다
                </p>
              </div>
            </div>
            <Carousel className="w-full max-w-5xl mx-auto mt-12">
              <CarouselContent>
                {/* --- CURRICULUM 1: HELLO CODING --- */}
                <CarouselItem>
                  <div className="p-2">
                    <div className="text-center mb-8">
                      <Badge variant="secondary">Hello Coding Course</Badge>
                      <p className="text-muted-foreground mt-2">
                        알고리즘과 수학, 과학, 논리를 결합한 3단계 토론 중심 과정입니다.
                      </p>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
                      <Card>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle>Novice</CardTitle>
                            <Badge variant="outline">Beginner</Badge>
                          </div>
                          <CardDescription>Understanding Basic Algorithms</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>Code.org / Entry / Scratch</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle>Intermediate Mid</CardTitle>
                            <Badge variant="outline">Intermediate 1</Badge>
                          </div>
                          <CardDescription>Understanding Applied Algorithms</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>PCA's Proprietary Block Coding</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle>Intermediate High</CardTitle>
                            <Badge variant="outline">Intermediate 2</Badge>
                          </div>
                          <CardDescription>Understanding Complex Algorithms</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>App Inventor App Development</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="text-center mt-8 text-sm text-muted-foreground">
                      <p>※ 각 레벨은 약 4개월이 소요되며, 학생의 실력과 학년에 따라 기간이 달라질 수 있습니다.</p>
                    </div>
                  </div>
                </CarouselItem>
                {/* --- CURRICULUM 2: PRACTICAL CODING --- */}
                <CarouselItem>
                  <div className="p-2">
                    <div className="text-center mb-8">
                      <Badge variant="secondary">Practical Coding Course (Python)</Badge>
                      <p className="text-muted-foreground mt-2">
                        어린 학생들을 위한 과정으로, 파이썬과 컴퓨터 과학의 기초에 중점을 둔 3단계 과정입니다.
                      </p>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
                      <Card>
                        <CardHeader>
                          <CardTitle>Beginner</CardTitle>
                          <CardDescription>Building a solid foundation</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>Learning Basic Syntax</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>Learning Computer Architecture</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Improver</CardTitle>
                          <CardDescription>Applying skills to problems</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>Learning Advanced Syntax</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>Practical Syntax Application</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Skilled</CardTitle>
                          <CardDescription>Designing complex solutions</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>Algorithm Design</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span>Data Structures</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="text-center mt-8 text-sm text-muted-foreground">
                      <p>※ 각 레벨은 약 3개월이 소요되며, 학생의 실력과 학년에 따라 기간이 달라질 수 있습니다.</p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Student Achievements */}
        <section id="achievements" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Student Achievements</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  PCA는 학생들마다 확실한 결과를 만들어냅니다
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Student Project"
                    className="rounded-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">E-Commerce Platform</CardTitle>
                  <CardDescription className="mb-4">
                    React와 Node.js로 제작한 풀스택 이커머스 솔루션. (제작: Alex Chen, 16세)
                  </CardDescription>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Student Project"
                    className="rounded-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">AI Study Assistant</CardTitle>
                  <CardDescription className="mb-4">
                    머신러닝 기반의 학습 보조 앱. (제작: Maria Rodriguez, 17세)
                  </CardDescription>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Student Project"
                    className="rounded-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">Mobile Fitness Tracker</CardTitle>
                  <CardDescription className="mb-4">
                    크로스플랫폼 피트니스 앱. (제작: James Park, 15세)
                  </CardDescription>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section id="news" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Updates</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  PCA의 최신 성과, 새로운 과정, 학생들의 성공 스토리를 확인하세요
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Dec 15, 2024</span>
                  </div>
                  <CardTitle>New AI & Machine Learning Track</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    차세대 개발자를 위해 설계된 종합 AI/ML 커리큘럼을 소개합니다. 2025년 1월 시작.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Dec 10, 2024</span>
                  </div>
                  <CardTitle>Student Wins National Coding Competition</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    풀스택 개발 과정의 Sarah Kim 학생이 전국 청소년 프로그래밍 대회에서 1위를 차지했습니다.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Dec 5, 2024</span>
                  </div>
                  <CardTitle>Partnership with Tech Giants</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    유수 테크 기업들과의 새로운 파트너십을 통해 졸업생들에게 인턴십과 취업 기회를 제공합니다.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Journey?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  코딩으로 미래를 바꾼 수백 명의 학생들과 함께하세요. 탄탄한 기초에서 시작하여 놀라운 결과를 만들어 보세요.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="h-12 px-8">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent">
                  Schedule a Tour
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center space-x-2">
          {/* <Code className="h-5 w-5 text-primary" />
          <span className="font-semibold">PCA</span> */}
        </div>
        <p className="text-xs text-muted-foreground sm:ml-auto">
          © 2024 Programming Coding Academy. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            개인정보처리방침
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            이용약관
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            문의하기
          </Link>
        </nav>
      </footer>
    </div>
  )
}
