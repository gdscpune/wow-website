import React from "react";
import "./whydevfest.css";
import dvbaroda from "../../assets/dvbaroda.jpg";
import Perks from "./Perks";

export default function WhyDevFest() {
  return (
    <div id="why-DevFest" className="pt-12 m-0.5">
      <div className="m-4">
        <h3 className="text-3xl font-extrabold dark:text-white mx-5 text-center">
          What is DevFest?
        </h3>
      </div>

      <div className="md:flex p-3">
        <div className="flex justify-center p-3 my-4 mx-2">
          <img src={dvbaroda} alt="" className="rounded object-cover" />
        </div>
        <div className="flex place-items-center justify-center p-3 my-4  mx-2 text-lg">
          <p>
            DevFest is an annual decentralized tech conference hosted by the
            Google Developer Groups (GDG) community. GDGs host these events
            around the globe. DevFest 2022 marks the 11th year of DevFest.
            <br />
            DevFest Patna is an initiative of GDG Patna bringing in the 1st
            edition 🤩 to people of Bihar with knowledge exchange,learning and
            networking opportunities!!
          </p>
        </div>
      </div>

      <Perks />
    </div>
  );
}
