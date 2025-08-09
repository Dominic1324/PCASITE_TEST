import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Trophy, Users, BookOpen, Star, Calendar, ArrowRight, Github, ExternalLink } from "lucide-react"
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

        {/* Testimonials (About) */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Students Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our successful graduates about their journey at PCA.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm mb-4">
                    "PCA's approach to teaching fundamentals first really helped me understand programming deeply. Now
                    I'm working at Google!"
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold">SK</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Sarah Kim</div>
                      <div className="text-xs text-muted-foreground">Software Engineer at Google</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm mb-4">
                    "The instructors are amazing and the curriculum is perfectly structured. I went from zero to
                    full-stack developer in 6 months."
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold">MJ</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Michael Johnson</div>
                      <div className="text-xs text-muted-foreground">Full-Stack Developer at Startup</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm mb-4">
                    "PCA doesn't just teach you to code, they teach you to think like a programmer. The foundation I
                    built here is invaluable."
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold">EL</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Emily Lee</div>
                      <div className="text-xs text-muted-foreground">Mobile Developer at Meta</div>
                    </div>
                  </div>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Curriculum</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Structured learning paths designed to build strong foundations and advance to professional-level
                  skills.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <CardTitle>Fundamentals Track</CardTitle>
                  </div>
                  <CardDescription>Perfect for beginners starting their coding journey</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">What you'll learn:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Programming Logic & Problem Solving</li>
                      <li>• Python/Java Fundamentals</li>
                      <li>• Data Structures & Algorithms</li>
                      <li>• Object-Oriented Programming</li>
                    </ul>
                  </div>
                  <Badge variant="secondary">12 weeks</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Code className="h-6 w-6 text-primary" />
                    <CardTitle>Web Development Track</CardTitle>
                  </div>
                  <CardDescription>Build modern web applications from scratch</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">What you'll learn:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• HTML, CSS, JavaScript</li>
                      <li>• React & Next.js</li>
                      <li>• Backend Development</li>
                      <li>• Database Management</li>
                    </ul>
                  </div>
                  <Badge variant="secondary">16 weeks</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-primary" />
                    <CardTitle>Mobile Development Track</CardTitle>
                  </div>
                  <CardDescription>Create iOS and Android applications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">What you'll learn:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• React Native Development</li>
                      <li>• iOS & Android Deployment</li>
                      <li>• Mobile UI/UX Design</li>
                      <li>• App Store Optimization</li>
                    </ul>
                  </div>
                  <Badge variant="secondary">14 weeks</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-6 w-6 text-primary" />
                    <CardTitle>Advanced Specialization</CardTitle>
                  </div>
                  <CardDescription>Master advanced topics and specialize</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">What you'll learn:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• AI & Machine Learning</li>
                      <li>• Cloud Computing (AWS/Azure)</li>
                      <li>• DevOps & CI/CD</li>
                      <li>• System Design</li>
                    </ul>
                  </div>
                  <Badge variant="secondary">20 weeks</Badge>
                </CardContent>
              </Card>
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
