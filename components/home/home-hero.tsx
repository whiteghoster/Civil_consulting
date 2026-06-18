import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";
import { ui } from "@/lib/design-system";
import { homeServiceRail } from "@/lib/site-content";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#C9D5E1] bg-white pt-[72px] lg:pt-[112px]">
      <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(90deg,#F8FAFC_0%,#F8FAFC_56%,#102A43_56%,#102A43_100%)] max-lg:hidden" />
      <div className={`${ui.layout.container} relative grid gap-10 py-10 lg:min-h-[680px] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-14`}>
        <div className="max-w-3xl">
          <p className={`${ui.text.eyebrow} inline-flex border-l-4 border-[#B66F12] bg-[#FFF4E4] px-4 py-2`}>
            Civil engineering consultancy
          </p>
          <h1 className="section-title mt-6 max-w-4xl text-[2.55rem] font-[750] leading-[1.06] sm:text-[3.65rem] lg:text-[4.35rem]">
            Cost, drawings, and site reality checked before you commit.
          </h1>
          <p className={`${ui.text.body} mt-6 max-w-xl`}>
            Saranya helps builders, developers, investors, and private owners review BOQs,
            estimates, tenders, drawings, and active-site progress with independent civil
            engineering judgement.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={ui.button.primary}>
              Request Civil Review
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className={ui.button.secondary}>
              <Phone className="h-4 w-4 text-[#B66F12]" />
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className={`${ui.card.gridWrapper} mt-9 grid gap-px sm:grid-cols-2`}>
            {homeServiceRail.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white px-4 py-4 text-sm font-semibold text-[#102033]">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#B66F12]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[440px] lg:min-h-[560px]">
          <div className="absolute inset-0 overflow-hidden rounded-lg border border-white/20 bg-[#D8E3EC] shadow-[0_30px_90px_rgba(16,42,67,0.24)]">
            <Image
              src="/images/home-commercial-campus.jpg"
              alt="Civil engineers monitoring construction progress"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,32,51,0)_35%,rgba(16,32,51,0.72)_100%)]" />
            <div className="absolute right-4 top-4 hidden w-44 overflow-hidden rounded-md border border-white/30 bg-white shadow-[0_18px_50px_rgba(16,42,67,0.28)] sm:block lg:w-52">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/home-residential-cost-review.jpg"
                  alt="Residential cost review documentation"
                  fill
                  className="object-cover"
                  sizes="208px"
                />
              </div>
              <p className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#9A5D0F]">
                BOQ review
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-[#102033]/82 p-5 text-white backdrop-blur-sm sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F0B45B]">
                Review output
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  ["Cost", "BOQ, rates, assumptions"],
                  ["Scope", "Drawing and tender gaps"],
                  ["Site", "Progress and payment basis"],
                ].map(([title, copy]) => (
                  <div key={title} className="border-l border-white/25 pl-4">
                    <p className="text-2xl font-semibold">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/76">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
