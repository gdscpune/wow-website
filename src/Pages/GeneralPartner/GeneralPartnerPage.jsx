import React from "react";
import GeneralPartnerCard from "./GeneralPartnerCard";
import { GeneralPartner } from "./GeneralPartner";

export default function GeneralPartnerPage() {
  return (
    <div className='pt-12 mb-10'>
      <h1 className='text-center px-5 text-4xl lg:text-6xl lg:mt-3 mb-10'>General Partner</h1>
      <div className=' flex items-center w-screen justify-center flex-wrap flex-row  lg:flex-row gap-4 '>
        {GeneralPartner.map((item, id) => (
          <GeneralPartnerCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
