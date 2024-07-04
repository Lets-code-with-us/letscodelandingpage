import { lazy } from "react";
const HeroSection = lazy(() => import("./components/HomeSection"));
const Figure = lazy(() => import("./components/Figure"));
const Feature = lazy(() => import("./components/Feature"));
const Card = lazy(() => import("./components/TestCard"));

export default function Home() {
  return (
    <>
    <section className="overflow-hidden">

      <section className="bg-slate-200 px-10 overflow-hidden">
        <HeroSection />
      </section>
      <section className="flex flex-1 bg-green-100 justify-center">
        <Figure />
      </section>
      <section className="bg-green-100 flex flex-1 justify-center">
        <Feature />
      </section>
      <section className="bg-green-100 flex flex-1 justify-center">
        <Card />
      </section>
    </section>
   
    </>
  );
}
