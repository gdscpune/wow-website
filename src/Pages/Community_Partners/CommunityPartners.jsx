import React from "react";
import { CommunityPartnersList } from "./CPList";
import CP_Card from "./CP_Card";

export default function CommunityPartners() {
  console.log(CommunityPartnersList);
  return (
    <div className='pt-12' sponsors>
      <div className='flex items-center w-screen justify-center flex-wrap flex-col lg:flex-row gap-4'>
        {CommunityPartnersList.map((item, id) => (
          <CP_Card item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
