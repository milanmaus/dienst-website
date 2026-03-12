"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[calc(100vh-57px)] px-6 md:px-16 py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="text-[2.75rem] sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-light tracking-tight text-white leading-[0.95] mb-8 md:mb-12">
          Documentation.
          <br />
          Automated.
          <br />
          Sovereign.
        </h1>
        <p className="text-lg md:text-2xl text-[#a0a0a0] max-w-3xl mb-10 md:mb-14 leading-relaxed">
          Dienst reduces manual documentation time by up to 50% – no data
          migration, no US vendor, no IT overhead.
        </p>
        <a
          href="#contact"
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-white text-black hover:bg-[#e0e0e0] transition-colors text-sm tracking-widest font-mono uppercase px-10 py-6 h-auto w-full sm:w-auto"
          )}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
