import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => <h1 className="p-4 text-3xl font-bold">About</h1>,
});
