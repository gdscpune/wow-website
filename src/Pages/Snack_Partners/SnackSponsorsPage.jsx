import React from "react";
// import "./partners.css";
import SnackSponsorsCard from "./SnackSponsorsCard";
import { Sponsors } from "./SnackSponsorsList";

export default function SnackSponsorsPage() {
  return (
    <div id='sponsors' className='pt-12 mb-24'>
      <h1 className='text-center mt-3 mb-10'> Snacks Partner</h1>
      <div className=' flex items-center w-screen justify-center flex-wrap flex-row  lg:flex-row gap-4 '>
        {Sponsors.map((item, id) => (
          <SnackSponsorsCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
