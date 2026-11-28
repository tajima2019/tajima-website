import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { Works } from "../components/Works";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Hero />
      <Works />
    </>
  ),
});
