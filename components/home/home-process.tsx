import Image from "next/image";
import { ui } from "@/lib/design-system";
import { homeProcess } from "@/lib/site-content";

export function HomeProcess() {
  return (
    <section className={ui.layout.sectionDark}>
      <div className={ui.layout.container}>
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.66fr_0.34fr] lg:items-end">
          <div>
            <p className={ui.text.eyebrow}>Method</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              A review process that follows the drawings and the site.
            </h2>
          </div>
          <p className="muted-on-dark max-w-xl text-lg leading-8 lg:justify-self-end">
            Clear inputs, clear scope, clear findings. No vague opinion when the decision
            needs measurable civil evidence.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.18)] lg:grid-cols-[0.36fr_0.64fr]">
          <div className="relative min-h-[320px] border-b border-white/15 lg:border-b-0 lg:border-r">
            <Image
              src="/images/home-infrastructure-bridge.jpg"
              alt="Infrastructure review and technical due diligence"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,28,38,0.05)_0%,rgba(16,28,38,0.82)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F0B45B]">
                Field evidence
              </p>
              <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-white/82">
                Drawings, quantities, photos, bills, milestones, and site observations stay tied together.
              </p>
            </div>
          </div>

          <div className="grid gap-px bg-white/15 md:grid-cols-2">
            {homeProcess.map((item, index) => (
              <div key={item.step} className="bg-[#101C26] p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/18 bg-white/8 text-sm font-bold text-[#F0B45B]">
                    {item.step}
                  </span>
                  {index < homeProcess.length - 1 && (
                    <span className="hidden h-px flex-1 bg-white/18 md:block" />
                  )}
                </div>
                <h3 className="mt-7 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
