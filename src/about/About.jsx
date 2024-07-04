import React, { lazy } from "react";
const AboutHeroSection = lazy(() => import("./components/AboutHeroSection"));
const JoinTeam = lazy(() => import("./components/JoinTeam"));


function About() {
  return (
    <>
      <section className="bg-slate-200 px-10">
        <AboutHeroSection />
        <JoinTeam />
      </section>
    </>
  );
}

export default About;