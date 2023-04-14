import React from "react";
import "./partners.css";
import PoweredByCard from "./PoweredbyCard";
import { PoweredBy } from "./Poweredby";

export default function PoweredByPage() {
  return (
    <div className='pt-12 mb-10'>
      <h1 className='text-center px-5 text-4xl lg:text-6xl lg:mt-3 mb-10'>Powered By</h1>
      <div className=' flex items-center w-screen justify-center flex-wrap flex-row  lg:flex-row gap-4 '>
        {PoweredBy.map((item, id) => (
          <PoweredByCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
}
