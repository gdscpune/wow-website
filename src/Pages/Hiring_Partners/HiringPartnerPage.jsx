import React from "react";
// import "./partners.css";
import HiringPartnerCard from "./HiringPartnerCard";
import { HiringPartner } from "./HiringPartnerList";

export default function HiringPartnerPage() {
  return (
    <div className='pt-12 mb-10'>
      <h1 className='text-center px-5 text-4xl lg:text-6xl lg:mt-3 mb-10'>Hiring Partners</h1>
      <div className=' flex items-center w-screen justify-center flex-wrap flex-row  lg:flex-row gap-4 '>
        {HiringPartner.map((item, id) => (
          <HiringPartnerCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
