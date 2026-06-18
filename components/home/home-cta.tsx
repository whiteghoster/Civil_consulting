import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";
import { ui } from "@/lib/design-system";

export function HomeCta() {
  return (
    <section className={ui.layout.sectionLight}>
      <div className={ui.layout.container}>
        <div className="overflow-hidden rounded-lg border border-[#0B1721] bg-[#102A43] shadow-[0_28px_85px_rgba(16,42,67,0.18)]">
          <div className="grid lg:grid-cols-[0.68fr_0.32fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className={ui.text.eyebrow}>Start with the project file</p>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Send the estimate, BOQ, drawings, site issue, or investment question.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                We will define the right civil review, expected output, document gaps,
                timeline, and next action before the engagement begins.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className={ui.button.inverse}>
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className={ui.button.inverseOutline}>
                  <Phone className="h-4 w-4 text-[#F0B45B]" />
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
            <div className="relative min-h-80 border-t border-white/15 lg:border-l lg:border-t-0">
              <Image
                src="/images/home-cta-construction.jpg"
                alt="Construction site review"
                fill
                className="object-cover opacity-85"
                sizes="(max-width: 1024px) 100vw, 32vw"
              />
              <div className="absolute inset-0 bg-[#102A43]/18" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
