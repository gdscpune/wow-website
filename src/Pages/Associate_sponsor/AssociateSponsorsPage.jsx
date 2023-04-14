import React from "react";
import "./partners.css";
import AssociateSponsorsCard from "./AssociateSponsorsCard";
import { AssociateSponsors } from "./AssociateSponsorsList";

export default function AssociateSponsorsPage() {
  return (
    <div className='pt-12 mb-10'>
      <h1 className='text-center px-5 text-4xl lg:text-6xl lg:mt-3 mb-10'>Associate Sponsor</h1>
      <div className=' flex items-center w-screen justify-center flex-wrap flex-row  lg:flex-row gap-4 '>
        {AssociateSponsors.map((item, id) => (
          <AssociateSponsorsCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
