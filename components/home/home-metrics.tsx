import { ui } from "@/lib/design-system";
import { homeMetrics } from "@/lib/site-content";

export function HomeMetrics() {
  return (
    <section className="border-b border-[#C9D5E1] bg-white">
      <div className={`${ui.layout.container} grid gap-px bg-[#C9D5E1] sm:grid-cols-2 lg:grid-cols-4`}>
        {homeMetrics.map((metric) => (
          <div key={metric.label} className="bg-white px-5 py-8 lg:px-8 lg:py-10">
            <div className="text-4xl font-semibold text-[#102A43] lg:text-5xl">{metric.value}</div>
            <p className="body-copy mt-3 max-w-64 text-sm font-medium leading-6">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
