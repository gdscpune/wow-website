import React from "react";
import Register from "./Components/Register/Register";
import Faq from "./Pages/Faq/Faq";
import Home from "./Pages/Home/Home";
import CommunityPage from "./Pages/Community_Partners_New/CommunityPage";
import Speakers from "./Pages/Speakers/Speakers";
import Team from "./Pages/Team/Team";
import Technologies from "./Pages/Technologies/Technologies";
import WhyWoW from "./Pages/WhyWoW/WhyWoW";
import CTAspeaker from "./Components/CTA-speaker/CTAspeaker";
import CTAsponsor from "./Components/CTA-sponsor/CTAsponsor";
import CTAearlybird from "./Components/CTA-EarlyBird/CTA-speaker/ctaearlybird";
import SponsorsPage from "./Pages/Partners/SponsorsPage";
import AssociateSponsorsPage from "./Pages/Associate_sponsor/AssociateSponsorsPage";
import PoweredByPage from "./Pages/PoweredBy/PoweredbyPage";
import StartupPartnerPage from "./Pages/Startup_Partners/StartupPartnerPage";
import HiringPartnerPage from "./Pages/Hiring_Partners/HiringPartnerPage";
import TradingPartnerPage from "./Pages/Trading_Partner/TradingPartnerPage";
import EducationSponsorsPage from "./Pages/Education_Partners/EducationSponsorsPage";
import TicketSponsorsPage from "./Pages/Ticketing_Partners/TicketSponsorsPage";
import SnackSponsorsPage from "./Pages/Snack_Partners/SnackSponsorsPage";
import Schedule from "./Pages/Schedule/Schedule";
import GeneralPartnerPage from "./Pages/GeneralPartner/GeneralPartnerPage";

export default function HomePage() {
  return (
    <>
      <Home />
      <CTAearlybird />
      {/* <CTAsponsor /> */}
      <CTAspeaker />
      <WhyWoW />
      <Technologies />
      <Speakers />
      <Schedule />
      <SponsorsPage />
      <AssociateSponsorsPage />
      <PoweredByPage />
      <TicketSponsorsPage />
      <EducationSponsorsPage />
      <StartupPartnerPage />
      <HiringPartnerPage />
      {/*<TradingPartnerPage />*/}
      <SnackSponsorsPage />
      <GeneralPartnerPage />
      <CommunityPage />

      {/* <Team /> */}
      {/* <Register /> */}
      <Faq />
    </>
  );
}
