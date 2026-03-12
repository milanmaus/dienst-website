import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    title: "Distributed Queries",
    description:
      "Access across multiple systems without data migration or centralization of sensitive records.",
  },
  {
    title: "Governance & Control",
    description:
      "Role-based access management with full auditability at every layer of the stack.",
  },
  {
    title: "Resource-Aware Optimization",
    description:
      "Automatic routing to the appropriate systems based on load, availability, and access rights.",
  },
];

export function Pipeline() {
  return (
    <section className="px-6 md:px-16 py-16 md:py-32 border-t border-[#222222] bg-[#000000]">
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-mono text-sm text-[#a0a0a0] tracking-widest mb-8 md:mb-12">
          02 — PIPELINE
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-light text-white tracking-tight mb-6 md:mb-8">
          Sovereign Data Layer
        </h2>
        <p className="text-lg md:text-2xl text-[#a0a0a0] max-w-3xl mb-12 md:mb-20 leading-relaxed">
          The technical foundation of Dienst: a distributed query layer that
          connects existing specialist systems – fast, efficient and compliant.
        </p>
        <Separator className="bg-[#222222] mb-12 md:mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-[#0a0a0a] border-0 hover:bg-[#111111] transition-colors"
            >
              <CardHeader className="pb-3 pt-8 px-6 md:pb-4 md:pt-12 md:px-10">
                <CardTitle className="text-white text-xl font-normal tracking-wide">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8 md:px-10 md:pb-12">
                <p className="text-[#a0a0a0] text-lg leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="font-mono text-sm text-[#555555] mt-12 tracking-wide">
          Based on research from TU Berlin &amp; BIFOLD.
        </p>
      </div>
    </section>
  );
}
