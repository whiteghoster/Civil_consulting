import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ui } from "@/lib/design-system";
import { iconMap, type IconName } from "@/lib/icon-map";
import { homeServices } from "@/lib/site-content";

export function HomeServices() {
  const featuredServices = homeServices.slice(0, 2);
  const supportingServices = homeServices.slice(2);

  return (
    <section className={ui.layout.sectionMuted}>
      <div className={ui.layout.container}>
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
          <div>
            <p className={ui.text.eyebrow}>Services</p>
            <h2 className={`${ui.text.sectionTitle} mt-4 max-w-4xl`}>
              Civil reviews built around real project decisions.
            </h2>
          </div>
          <p className={`${ui.text.body} max-w-xl lg:justify-self-end`}>
            The work starts with the decision in front of you, then checks the numbers,
            drawings, site evidence, and risk behind it.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-[#C9D5E1] bg-[#102A43] shadow-[0_22px_70px_rgba(16,42,67,0.14)]">
            <Image
              src="/images/home-cta-construction.jpg"
              alt="Civil engineer reviewing construction site progress"
              fill
              className="object-cover opacity-82"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,32,51,0.12)_0%,rgba(16,32,51,0.88)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F0B45B]">
                What gets checked
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {["Cost basis", "Drawing gaps", "Site progress", "Payment risk"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-white/16 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F0B45B]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              {featuredServices.map((service) => {
                const Icon = iconMap[service.icon as IconName];
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className={`${ui.card.interactive} flex min-h-[285px] flex-col p-6`}
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className={ui.icon.service}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#6A7A89] transition group-hover:translate-x-1 group-hover:text-[#102A43]" />
                    </div>
                    <h3 className="text-xl font-semibold leading-7 text-[#102033]">{service.title}</h3>
                    <p className={`${ui.text.bodySmall} mt-4`}>{service.copy}</p>
                    <p className="mt-auto pt-6 text-sm font-semibold leading-6 text-[#33465A]">
                      {service.output}
                    </p>
                  </Link>
                );
              })}
            </div>

            <div className={`${ui.card.gridWrapper} grid gap-px md:grid-cols-2`}>
              {supportingServices.map((service) => {
                const Icon = iconMap[service.icon as IconName];
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group flex items-start gap-4 bg-white p-5 transition hover:bg-[#F8FAFC]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#EDF3F8] text-[#102A43]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-semibold leading-6 text-[#102033]">{service.title}</h3>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#6A7A89] transition group-hover:translate-x-1 group-hover:text-[#102A43]" />
                      </div>
                      <p className={`${ui.text.bodySmall} mt-2`}>{service.output}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
