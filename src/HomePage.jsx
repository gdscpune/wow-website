import React from "react";
import Register from "./Components/Register/Register";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home";
import SponsorsPage from "./Pages/Partners/SponsorsPage";
import CommunityPage from "./Pages/Community_Partners_New/CommunityPage";
import Speakers from "./Pages/Speakers/Speakers";
import Team from "./Pages/Team/Team";
import Technologies from "./Pages/Technologies/Technologies";
import WhyWoW from "./Pages/WhyWoW/WhyWoW";
import CTAspeaker from "./Components/CTA-speaker/CTAspeaker";
import CTAsponsor from "./Components/CTA-sponsor/CTAsponsor";

export default function HomePage() {
  return (
    <>
      <Home />
      <CTAsponsor />
      <CTAspeaker />
      <WhyWoW />
      <Technologies />
      {/* <Speakers />
      <SponsorsPage />
      <CommunityPage />
      <Team />
      <Register />
      <Faq /> */}
    </>
  );
}
