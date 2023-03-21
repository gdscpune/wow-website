import React from "react";
import CommunityCard from "./CommunityCard";
import "./communityPartners.css";
// import "./partners.css"
import { CPartners } from "./CPartnersList";

export default function CommunityPage() {
  return (
    <div id='communitypartners' className='pt-12 mb-24'>
      <h1 className='text-center mt-3 mb-10'>Community Partners</h1>
      <div className=' flex items-center w-screen justify-center flex-wrap flex-row  lg:flex-row gap-4 '>
        {CPartners.map((item, id) => (
          <CommunityCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
