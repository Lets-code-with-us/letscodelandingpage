import React from "react";
import Hero from "./components/Hero";
import JobFlex from "./components/JobFlex";
import Lgrp from "./components/Lgrp";
import Cardflex from "./components/CardFlex";
import TechJobFlex from "./components/TechJobFlex";
function Service() {
  return (
    <>
      <section className="overflow-hidden">
        <Hero />
        <JobFlex />
        <TechJobFlex />
        <Lgrp />
        <Cardflex />
      </section>
    </>
  );
}

export default Service;
