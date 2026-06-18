import { ui } from "@/lib/design-system";
import { iconMap, type IconName } from "@/lib/icon-map";
import { homeTrustPoints } from "@/lib/site-content";

export function HomeTrust() {
  return (
    <section className="border-y border-[#C9D5E1] bg-[#F8FAFC] py-20 sm:py-24">
      <div className={`${ui.layout.container} grid gap-10 lg:grid-cols-[0.35fr_0.65fr]`}>
        <div>
          <p className={ui.text.eyebrow}>Why owners use us</p>
          <h2 className={`${ui.text.sectionTitle} mt-4 max-w-xl`}>
            A separate civil view before money moves.
          </h2>
          <p className={`${ui.text.body} mt-5 max-w-lg`}>
            Independent oversight gives project owners a practical basis for cost, scope,
            progress, and risk decisions.
          </p>
        </div>
        <div className={`${ui.card.gridWrapper} grid gap-px sm:grid-cols-2`}>
          {homeTrustPoints.map((point) => {
            const Icon = iconMap[point.icon as IconName];
            return (
              <div key={point.title} className="bg-white p-7">
                <Icon className="mb-7 h-7 w-7 text-[#B66F12]" />
                <h3 className="text-xl font-semibold text-[#102033]">{point.title}</h3>
                <p className={`${ui.text.bodySmall} mt-3`}>{point.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
