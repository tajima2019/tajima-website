import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="m-4 rounded-2xl border border-line bg-surface p-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <p className="text-muted">補足の文字</p>
      <a href="#" className="text-accent">
        リンク
      </a>
    </div>
  ),
});
