import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Trophy, Users, BookOpen, Star, Calendar, ArrowRight, Github, ExternalLink, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">PCA</span>
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
        <section className="w-full flex flex-col justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  Building Excellence from Fundamentals
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Programming Coding Academy
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Master coding from the ground up. Our proven methodology transforms beginners into skilled developers
                  through solid fundamentals and hands-on practice.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="h-12 px-8">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent">
                  View Curriculum
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Students Graduated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Job Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Student Rating</div>
                </div>
              </div>
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
                  We believe that a strong foundation is the key to becoming a truly great developer. Our curriculum is
                  designed to build excellence from the ground up.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3">
              <div className="grid gap-2 text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="rounded-full bg-primary text-primary-foreground p-4">
                    <BookOpen className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Fundamental-First</h3>
                <p className="text-sm text-muted-foreground">
                  We focus on core concepts, data structures, and algorithms to ensure you can tackle any problem, not
                  just use a specific framework.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="rounded-full bg-primary text-primary-foreground p-4">
                    <Users className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Mentorship-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Our experienced instructors provide personalized guidance and mentorship to help you navigate your
                  learning journey and career path.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="rounded-full bg-primary text-primary-foreground p-4">
                    <Trophy className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Career-Oriented</h3>
                <p className="text-sm text-muted-foreground">
                  Beyond coding, we prepare you for the job market with portfolio reviews, interview prep, and
                  connections to the tech industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Hello 코딩 과정</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Curriculum</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  PCA 정규 과정인 &lt;Hello 코딩&gt; 과정은 6단계로 구성되어, 코딩의 기본이 되는 알고리즘 위에 수학,
                  과학, 논리 등의 교과 과정을 더한 토론형 수업을 지향합니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Novice</CardTitle>
                    <Badge variant="outline">초급</Badge>
                  </div>
                  <CardDescription>기본 알고리즘 이해</CardDescription>
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
                    <Badge variant="outline">중급 1</Badge>
                  </div>
                  <CardDescription>응용 알고리즘 이해</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>PCA 자체 개발 블록 코딩</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Intermediate High</CardTitle>
                    <Badge variant="outline">중급 2</Badge>
                  </div>
                  <CardDescription>복합 알고리즘 이해</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>App Inventor 앱 개발</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Advanced Mid</CardTitle>
                    <Badge variant="outline">고급 1</Badge>
                  </div>
                  <CardDescription>실전 알고리즘 응용</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>수학적 알고리즘 구현 (Entry)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Advanced High</CardTitle>
                    <Badge variant="outline">고급 2</Badge>
                  </div>
                  <CardDescription>실전 자료구조 응용</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>자료구조, 정렬, 탐색 (Scratch)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Superior</CardTitle>
                    <Badge variant="outline">심화</Badge>
                  </div>
                  <CardDescription>고급 프로그래밍</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>프로그래밍 언어 기반 트레이닝</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8 text-sm text-muted-foreground">
              <p>※ 단계별로 기본 4개월의 기간이 소요되며, 학년 또는 수준에 따라서 소요 기간이 변경될 수 있습니다.</p>
            </div>
          </div>
        </section>

        {/* Student Achievements */}
        <section id="achievements" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Student Achievements</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Showcasing the incredible projects and achievements of our students.
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
                    Full-stack e-commerce solution built with React and Node.js by Alex Chen (Age 16)
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
                    Machine learning-powered study app created by Maria Rodriguez (Age 17)
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
                    Cross-platform fitness app developed by James Park (Age 15)
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
                  Stay updated with our latest achievements, new courses, and student success stories.
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
                    Introducing our comprehensive AI/ML curriculum designed for the next generation of developers.
                    Starting January 2025.
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
                    Sarah Kim, our full-stack development student, secured 1st place in the National Youth Programming
                    Contest.
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
                    New partnerships with leading tech companies provide direct internship and job opportunities for our
                    graduates.
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
                  Join hundreds of students who have transformed their futures through coding. Start with strong
                  fundamentals and achieve extraordinary results.
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
          <Code className="h-5 w-5 text-primary" />
          <span className="font-semibold">PCA</span>
        </div>
        <p className="text-xs text-muted-foreground sm:ml-auto">
          © 2024 Programming Coding Academy. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
