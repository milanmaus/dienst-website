"use client";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-32 border-t border-[#222222] bg-[#000000]"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-mono text-sm text-[#a0a0a0] tracking-widest mb-12">
          04 — CONTACT
        </p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-8">
          Request a conversation
        </h2>
        <p className="text-xl md:text-2xl text-[#a0a0a0] max-w-2xl mb-20 leading-relaxed">
          We are happy to speak with decision-makers in the security and public
          sector.
        </p>
        <Separator className="bg-[#222222] mb-20" />
        <a
          href="mailto:hello@dienst.ai"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "border-[#555555] text-white bg-transparent hover:bg-white hover:text-black transition-colors text-sm tracking-widest font-mono uppercase px-12 py-6 h-auto"
          )}
        >
          Send us an email
        </a>
      </div>
    </section>
  );
}
