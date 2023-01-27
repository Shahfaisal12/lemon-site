import React from "react";
import Budget from "../components/elements/Budget";
import Devotee from "../components/elements/Devotee";
import Hero from "../components/elements/Hero";
import Miraculous from "../components/elements/Miraculous";
import OnDemond from "../components/elements/OnDemond";
import RemoteDeveloper from "../components/elements/RemoteDeveloper";
import Resume from "../components/elements/Resume";
import Sprint from "../components/elements/Sprint";
import StartUp from "../components/elements/StartUp";
import Testemonial from "../components/elements/Testemonial";
import Testemonial2 from "../components/elements/Testemonial2";
import Testemonial3 from "../components/elements/Testemonial3";
import Testemonial4 from "../components/elements/Testemonial4";
import Tower from "../components/elements/Tower";
import Faqs from "../components/utils/Faqs";
import Utopia from "../components/elements/Utopia";

const Home = () => {
  return (
    <>
      <Hero />
      <Miraculous />
      <StartUp />
      <Testemonial />
      <Resume />
      <Utopia />
      <Testemonial2 />
      <Tower />
      <RemoteDeveloper />
      <Testemonial3 />
      <Sprint />
      <Testemonial4 />
      <Budget />
      <Faqs />
      <OnDemond />
      <Devotee />
    </>
  );
};

export default Home;
