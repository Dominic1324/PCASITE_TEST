'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/logos/logo.png" alt="PCA Logo" width={100} height={40} />
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/#news" className="text-sm font-medium hover:text-primary transition-colors">News</Link>
          <Link href="/affiliate" className="text-sm font-medium hover:text-primary transition-colors">Affiliate</Link>
          <Button className="bg-primary text-primary-foreground px-8 py-4 transition-colors hover:bg-[#283890] hover:text-[#fef100]">Play</Button>
        </nav>
      </div>
    </header>
  );
}
