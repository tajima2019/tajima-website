export type Work = {
  id: string;
  title: string;
  period: string;
  techStack: string[];
  description: string;
  image: string;
  url: string;
};

export const works: Work[] = [
  {
    id: "work-1",
    title: "成果物のタイトル1",
    period: "20XX年",
    techStack: ["React", "TypeScript"],
    description: "どんなものを作り、自分が何を担当したかを書きます。",
    image: "/images/work-1.png",
    url: "https://example.com",
  },
  {
    id: "work-2",
    title: "成果物のタイトル2",
    period: "20XX年",
    techStack: ["Python"],
    description: "説明を書きます。",
    image: "/images/work-2.png",
    url: "https://example.com",
  },
  {
    id: "work-3",
    title: "成果物のタイトル3",
    period: "20XX年",
    techStack: ["C++"],
    description: "説明を書きます。",
    image: "/images/work-3.png",
    url: "https://example.com",
  },
];
