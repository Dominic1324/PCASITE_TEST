'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About PCA", href: "/about", external: false },
  { label: "Education", href: "/education", external: false },
  { label: "Campus", href: "/campus", external: false },
  { label: "Notice", href: "/board", external: false },
  { label: "Franchise Inquiry", href: "/affiliate", external: false },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="container relative mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logos/logo.png" alt="PCA Logo" width={120} height={44} priority />
          <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-400 md:inline">Admissions Studio</span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="whitespace-nowrap transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="rounded-full bg-gradient-to-r from-[#0b1f4f] to-[#12306f] px-7 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(11,31,79,0.25)] ring-1 ring-white/20 transition-all hover:-translate-y-0.5 hover:from-[#102864] hover:to-[#1a3e88] hover:shadow-[0_14px_28px_rgba(11,31,79,0.32)]">
          <Link href="http://code.playcoding.ac/" target="_blank" rel="noreferrer">
            PLAY
          </Link>
        </Button>
      </div>
    </header>
  );
}
