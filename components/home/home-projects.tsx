import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { ui } from "@/lib/design-system";
import { homeProjects } from "@/lib/site-content";

export function HomeProjects() {
  return (
    <section className={ui.layout.sectionLight}>
      <div className={ui.layout.container}>
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
          <div>
            <p className={ui.text.eyebrow}>Project evidence</p>
            <h2 className={`${ui.text.sectionTitle} mt-4 max-w-4xl`}>
              Cost and site reviews across building and infrastructure work.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#102A43] lg:justify-self-end"
          >
            View project work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {homeProjects.map((project) => (
            <article key={project.title} className={`${ui.card.base} overflow-hidden`}>
              <div className="relative h-72 bg-[#D8E3EC]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className={ui.text.eyebrow}>{project.value}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#102033]">{project.title}</h3>
                <p className="body-copy mt-3 leading-7">{project.scope}</p>
                <p className="body-copy mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                  <MapPin className="h-4 w-4 text-[#B66F12]" />
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
