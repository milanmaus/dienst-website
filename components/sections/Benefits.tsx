import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const benefits = [
  {
    title: "No Data Migration",
    description:
      "Existing systems remain untouched. Dienst integrates without restructuring your data infrastructure.",
  },
  {
    title: "Data Sovereignty",
    description:
      "No US vendor dependency. GDPR-compliant by design, with data remaining in your jurisdiction.",
  },
  {
    title: "Fast to Deploy",
    description:
      "Low IT effort and no infrastructure changes required. Operational within days, not months.",
  },
  {
    title: "Audit-Ready",
    description:
      "Transactional execution with full audit trails across all operations and user interactions.",
  },
];

export function Benefits() {
  return (
    <section className="px-6 md:px-16 py-16 md:py-32 border-t border-[#222222]">
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-mono text-sm text-[#a0a0a0] tracking-widest mb-8 md:mb-12">
          03 — BENEFITS
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-light text-white tracking-tight mb-6 md:mb-8">
          Why Dienst
        </h2>
        <Separator className="bg-[#222222] mb-12 md:mb-20 mt-8 md:mt-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#222222]">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="bg-[#111111] border-0 hover:bg-[#141414] transition-colors"
            >
              <CardHeader className="pb-3 pt-8 px-6 md:pb-4 md:pt-12 md:px-10">
                <CardTitle className="text-white text-xl font-normal tracking-wide">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8 md:px-10 md:pb-12">
                <p className="text-[#a0a0a0] text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
