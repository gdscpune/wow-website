import React from "react";
// import "./partners.css";
import TicketSponsorsCard from "./TicketSponsorsCard";
import { Sponsors } from "./TicketSponsorsList";

export default function TicketSponsorsPage() {
  return (
    <div id='sponsors' className='pt-12 mb-10'>
      <h1 className='text-center px-5 text-4xl lg:text-6xl lg:mt-3 mb-10'>Ticketing Partner</h1>
      <div className=' flex items-center w-screen justify-center flex-wrap flex-row  lg:flex-row gap-4 '>
        {Sponsors.map((item, id) => (
          <TicketSponsorsCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
