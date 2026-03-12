import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Imprint – Dienst",
};

export default function ImprintPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-16 py-16 md:py-32">
        <div className="mx-auto w-full max-w-3xl">
          <p className="font-mono text-sm text-[#a0a0a0] tracking-widest mb-8">
            IMPRINT
          </p>
          <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-12">
            Imprint
          </h1>
          <Separator className="bg-[#222222] mb-12" />

          <section className="mb-10">
            <p className="font-mono text-xs text-[#555555] tracking-widest mb-4 uppercase">
              Information according to § 5 TMG
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              Dienst<br />
              c/o Humboldt-Innovation GmbH<br />
              Ziegelstraße 30<br />
              10117 Berlin
            </p>
          </section>

          <section className="mb-10">
            <p className="font-mono text-xs text-[#555555] tracking-widest mb-4 uppercase">
              Represented by
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              Dr. Xenofon Chatziliadis, Paul Willi Holze, Milan Maus
            </p>
          </section>

          <section className="mb-10">
            <p className="font-mono text-xs text-[#555555] tracking-widest mb-4 uppercase">
              Contact
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              Phone: +49 30 2093 70752<br />
              E-Mail:{" "}
              <a
                href="mailto:info@dienst.ai"
                className="text-white hover:text-[#a0a0a0] transition-colors"
              >
                info@dienst.ai
              </a>
            </p>
          </section>

          <section className="mb-10">
            <p className="font-mono text-xs text-[#555555] tracking-widest mb-4 uppercase">
              Responsible for content according to § 55 Abs. 2 RStV
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              Milan Maus<br />
              Ziegelstraße 30<br />
              10117 Berlin
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
