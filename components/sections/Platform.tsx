import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    title: "Voice Input",
    description:
      "Forms are filled automatically as the user speaks – no manual typing, no post-processing.",
  },
  {
    title: "Multilingual & Robust",
    description:
      "Works even with radio interruptions and across multiple languages without configuration.",
  },
  {
    title: "User Approval",
    description:
      "Reports and transfers to backend systems only after explicit confirmation by the operator.",
  },
];

export function Platform() {
  return (
    <section className="px-6 md:px-16 py-32 border-t border-[#222222]">
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-mono text-sm text-[#a0a0a0] tracking-widest mb-12">
          01 — PLATFORM
        </p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-8">
          The AI Partner for Field Personnel
        </h2>
        <p className="text-xl md:text-2xl text-[#a0a0a0] max-w-3xl mb-20 leading-relaxed">
          A mobile application layer that transforms speech, text, and images
          into structured documentation – in real time, in the field.
        </p>
        <Separator className="bg-[#222222] mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#222222]">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-[#111111] border-0 hover:bg-[#141414] transition-colors"
            >
              <CardHeader className="pb-4 pt-12 px-10">
                <CardTitle className="text-white text-xl font-normal tracking-wide">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-10 pb-12">
                <p className="text-[#a0a0a0] text-lg leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
