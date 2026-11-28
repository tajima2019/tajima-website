import type { Work } from "../data/works";

export function WorkCard({ work }: { work: Work }) {
  return (
    <article className="flex flex-col gap-4">
      <img
        src={work.image}
        alt={`${work.title}の写真`}
        className="aspect-4/3 w-full rounded-2xl object-cover"
      />
      <div className="flex flex-col gap-1.5">
        <p className="text-xs text-muted">
          {work.period} ・ {work.techStack.join(" / ")}
        </p>
        <h3 className="text-lg font-bold lg:text-xl">{work.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{work.description}</p>
        <a
          href={work.url}
          className="flex h-11 w-fit items-center text-sm font-medium text-accent"
        >
          詳細を見る → <span className="sr-only">({work.title})</span>
        </a>
      </div>
    </article>
  );
}
