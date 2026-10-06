import { ArrowRight, Check } from "lucide-react";
import type { Course } from "@/data/courses";
import { waLink } from "@/config/contact";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={course.image} alt={course.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {course.popular && <span className="absolute left-0 top-4 bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">Mais procurado</span>}
        <span className="absolute bottom-3 left-3 rounded-md bg-ink/85 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary backdrop-blur">{course.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{course.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{course.description}</p>
        <ul className="mt-4 space-y-1.5">
          {course.benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary-deep" />{b}</li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-5 mt-6">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{course.price || "Consulte condições"}</span>
          <a href={waLink(course.message)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold uppercase text-primary-deep transition-all group-hover:gap-2.5">
            Saiba mais <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
