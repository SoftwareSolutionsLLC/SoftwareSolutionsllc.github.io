"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    number: "01",
    title: "Design",
    description:
        "",
      // "Define mission objectives, system requirements, and architecture. Design both software (control, data processing) and hardware (airframe, sensors, communication modules). Use modular and scalable design principles.",
// “We craft mission-driven, modular designs that ensure flexibility, safety, and future-proof scalability for your unmanned aerial systems.”,
      icon: (
      <div className="relative w-full h-32 mx-auto grid grid-cols-2 gap-3">
        <div className="space-y-3">
          <div className="h-8 rounded-md bg-primary/20 animate-pulse" />
          <div className="h-8 rounded-md bg-primary/20 animate-pulse delay-100" />
        </div>
        <div className="space-y-3">
          <div className="h-8 rounded-md bg-primary/20 animate-pulse delay-200" />
          <div className="h-8 rounded-md bg-primary/20 animate-pulse delay-300" />
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Build & Prototype",
    description:
    "",
      // "Rapidly develop and prototype UAV hardware (using Arduino, embedded systems, sensors) alongside software components (flight control, data analytics, user apps). Leverage simulation and iterative testing to validate performance early.",
// “Our agile prototyping accelerates innovation, enabling quick validation and refinement of UAV capabilities to meet your unique mission needs.”,
      icon: (
      <div className="relative w-full h-32 mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-[240px] rounded-lg bg-muted/50 p-4">
            <div className="space-y-2">
              <div className="h-2 w-1/2 rounded bg-primary/20" />
              <div className="h-2 w-full rounded bg-primary/20" />
              <div className="h-2 w-3/4 rounded bg-primary/20" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-6 rounded bg-primary/20" />
              <div className="h-6 rounded bg-primary/20" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Integrate & Test",
    description:
        "",
      // "Seamlessly integrate hardware and software into a cohesive system. Conduct rigorous testing—functional, safety, communication, and compliance testing—to ensure reliability and interoperability with existing systems (e.g., manned aircraft, ground control stations).",
// “We deliver fully integrated, rigorously tested UAV solutions that operate safely and reliably within complex airspace and operational environments.”,
      icon: (
      <div className="relative w-full h-32 mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 rounded-full bg-primary/20 animate-bounce delay-100" />
            <div className="h-16 w-16 rounded-full bg-primary/20 animate-bounce delay-200" />
            <div className="h-16 w-16 rounded-full bg-primary/20 animate-bounce delay-300" />
          </div>
        </div>
      </div>
    ),
  },
];

function FeatureCard({
  number,
  title,
  description,
  icon,
  index,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      <Card className="border-none bg-background/50 backdrop-blur">
        <CardHeader>
          <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-sm font-medium">
            {number}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-8">{description}</p>
          {icon}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="container relative py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* <Button variant="outline" className="rounded-full mb-4">
            How it works
          </Button>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Ship beautiful products in half the time
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            50+ beautiful sections and templates built with React, TypeScript,
            Tailwind CSS, and Framer Motion. Save thousands of hours and convert
            your visitors into customers.
          </p> */}
        </motion.div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.number} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}
