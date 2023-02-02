import React from "react";
import Register from "./Components/Register/Register";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home";
import SponsorsPage from "./Pages/Partners/SponsorsPage";
import Speakers from "./Pages/Speakers/Speakers";
import Team from "./Pages/Team/Team";
import WhyWoW from "./Pages/WhyWoW/WhyWoW";

export default function HomePage() {
  return (
    <>
      <Home />
      <WhyWoW />
      {/*<Speakers />
      <SponsorsPage />
      <Team />
      <Register />
  <Faq />*/}
    </>
  );
}
