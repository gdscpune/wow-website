import React from "react";
import { CommunityPartnersList } from "./CPList";
import CP_Card from "./CP_Card";

export default function CommunityPartners() {
  console.log(CommunityPartnersList);
  return (
    <div className="pt-12">
      <h1 className="text-white text-center mt-3 mb-5">Community Partners</h1>
      <div className="flex items-center w-screen justify-center flex-wrap flex-col lg:flex-row gap-4">
        {CommunityPartnersList.map((item, id) => (
          <CP_Card item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
