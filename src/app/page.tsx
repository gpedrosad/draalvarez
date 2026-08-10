import { Closing } from "@/components/home/Closing";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Locations } from "@/components/home/Locations";
import { Paths } from "@/components/home/Paths";
import { Promotions } from "@/components/home/Promotions";
import { Team } from "@/components/home/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Paths />
      <Promotions />
      <Locations />
      <Faq />
      <Team />
      <Closing />
    </>
  );
}
