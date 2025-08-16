import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-primary-foreground">
                Programming Coding Academy
              </h1>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                Master coding from the ground up. Our proven methodology transforms beginners into skilled developers
                through solid fundamentals and hands-on practice.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Curriculums</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer tailored courses for different age groups and goals. Swipe to explore our curriculums.
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
                        A 3-level course focusing on algorithms with math, science, and logic.
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
                      <p>※ Each level takes approx. 4 months, but can vary by student's skill and grade level.</p>
                    </div>
                  </div>
                </CarouselItem>
                {/* --- CURRICULUM 2: PRACTICAL CODING --- */}
                <CarouselItem>
                  <div className="p-2">
                    <div className="text-center mb-8">
                      <Badge variant="secondary">Practical Coding Course (Python)</Badge>
                      <p className="text-muted-foreground mt-2">
                        A 3-level course for young students focusing on Python and computer science fundamentals.
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
                      <p>※ Each level takes approx. 3 months, but can vary by student's skill and grade level.</p>
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
