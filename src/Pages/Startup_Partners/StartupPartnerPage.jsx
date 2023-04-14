import React from "react";
// import "./partners.css";
import StartupPartnerCard from "./StartupPartnerCard";
import { StartupPartner } from "./StartupPartnerList";

export default function StartupPartnerPage() {
  return (
    <div className='pt-12 mb-10'>
      <h1 className='text-center px-5 text-4xl lg:text-6xl lg:mt-3 mb-10'>Startup Partners</h1>
      <div className=' flex items-center w-screen justify-center flex-wrap flex-row  lg:flex-row gap-4 '>
        {StartupPartner.map((item, id) => (
          <StartupPartnerCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
