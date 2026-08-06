import dynamic from "next/dynamic";
import { Approach } from "@/components/home/Approach";
import { Closing } from "@/components/home/Closing";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Locations } from "@/components/home/Locations";
import { Paths } from "@/components/home/Paths";
import { Team } from "@/components/home/Team";

const Promotions = dynamic(
  () =>
    import("@/components/home/Promotions").then((mod) => mod.Promotions),
  {
    loading: () => (
      <section
        id="promociones"
        className="min-h-[28rem] border-t border-border bg-background"
        aria-label="Cargando promociones"
      />
    ),
  },
);

export default function Home() {
  return (
    <>
      <Hero />
      <Paths />
      <Approach />
      <Promotions />
      <Locations />
      <Faq />
      <Team />
      <Closing />
    </>
  );
}
