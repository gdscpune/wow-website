import React from "react";
import CommunityCard from "./CommunityCard";
import "./communityPartners.css";
// import "./partners.css"
import { CPartners } from "./CPartnersList";

export default function CommunityPage() {
  return (
    <div id="communitypartners" className="lg:pt-12 mb-12 lg:mb-10">
      <p className="text-center px-5 text-4xl lg:text-6xl lg:mt-3 mb-10">
        Community Partners
      </p>
      <div className=" flex items-center w-screen justify-center flex-wrap flex-row  md:flex-row gap-5 ">
        {CPartners.map((item, id) => (
          <CommunityCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
