"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#222222] bg-[#0a0a0a]">
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-6 md:px-16 py-6">
        <span className="font-mono text-base font-bold tracking-[0.2em] text-white">
          DIENST
        </span>
        <a
          href="#contact"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "border-[#333333] text-white bg-transparent hover:bg-white hover:text-black transition-colors text-xs tracking-widest font-mono uppercase"
          )}
        >
          Contact
        </a>
      </div>
    </header>
  );
}
