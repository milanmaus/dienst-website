import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="px-6 md:px-16 py-12 border-t border-[#222222]">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-mono text-base font-bold tracking-[0.2em] text-white">
            DIENST
          </span>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-[#555555] text-sm font-mono">
            <span>© 2026 Dienst. All rights reserved.</span>
            <Separator
              orientation="vertical"
              className="hidden md:block h-3 bg-[#333333]"
            />
            <div className="flex gap-6">
              <a href="/imprint" className="hover:text-[#a0a0a0] transition-colors">
                Imprint
              </a>
              <a href="#" className="hover:text-[#a0a0a0] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <Image
            src="/bmwi-badge.png"
            alt="Supported by the Federal Ministry for Economic Affairs and Energy on the basis of a decision by the German Bundestag"
            width={160}
            height={120}
            className="w-auto h-16 md:h-20 object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
