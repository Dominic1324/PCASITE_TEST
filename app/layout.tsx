import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PCA | Programming Coding Academy",
  description: "기초부터 탄탄하게, PCA에서 프로그래밍의 날개를 펼치세요.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
