import React from "react";
// import "./partners.css";
import HiringPartnerCard from "./HiringPartnerCard";
import { Sponsors } from "./HiringPartnerList";

export default function HiringPartnersPage() {
  return (
    <div id='sponsors' className='pt-12 mb-24'>
      <h1 className='text-center mt-3 mb-10'> Hiring Partners</h1>
      <div className=' flex items-center w-screen justify-center flex-wrap flex-row  lg:flex-row gap-4 '>
        {Sponsors.map((item, id) => (
          <HiringPartnerCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
