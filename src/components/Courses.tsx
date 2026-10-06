import { courses } from "@/data/courses";
import { CourseCard } from "./CourseCard";
import { Reveal, SectionHeading } from "./kit";

export function Courses() {
  const list = courses.filter((c) => c.enabled);
  if (!list.length) return null;
  return (
    <section id="cursos" className="scroll-mt-20 py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Nossos cursos" title="Cursos para cada etapa da sua habilitação" subtitle="Encontre a modalidade ideal para começar sua jornada." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 0.08}><CourseCard course={c} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
