import React from "react";
// import "./partners.css";
import Web3PartnerCard from "./Web3PartnerCard";
import { Sponsors } from "./Web3PartnerList";

export default function Web3CommunityPartnersPage() {
  return (
    <div id='sponsors' className='pt-12 mb-24'>
      <h1 className='text-center mt-3 mb-10'> Web3 Community Partner</h1>
      <div className=' flex items-center w-screen justify-center flex-wrap flex-row  lg:flex-row gap-4 '>
        {Sponsors.map((item, id) => (
          <Web3PartnerCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
