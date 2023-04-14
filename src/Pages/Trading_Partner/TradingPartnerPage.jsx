import React from "react";
import TradingPartnerCard from "./TradingPartnerCard";
import { TradingPartner } from "./TradingPartner";

export default function TradingPartnerPage() {
  return (
    <div className='pt-12 mb-10'>
      <h1 className='text-center px-5 text-4xl lg:text-6xl lg:mt-3 mb-10'>Trading Partner</h1>
      <div className=' flex items-center w-screen justify-center flex-wrap flex-row  lg:flex-row gap-4 '>
        {TradingPartner.map((item, id) => (
          <TradingPartnerCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
