import { works } from "../data/works";
import { WorkCard } from "./WorkCard";

export function Works() {
  return (
    <section
      id="works"
      className="mx-auto flex max-w-292 flex-col gap-4 py-6 lg:gap-8 lg:py-12"
    >
      <h2 className="px-6 text-[1.375rem] font-bold lg:text-[1.75rem]">
        Works
      </h2>
      <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-9 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-6">
        {works.map((work) => (
          <li key={work.id} className="w-full shrink-0 snap-center">
            <WorkCard work={work} />
          </li>
        ))}
      </ul>
    </section>
  );
}
