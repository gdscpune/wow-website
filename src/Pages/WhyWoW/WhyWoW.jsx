import React from "react";
import "./whywow.css";
import mapMH from "../../assets/map_mh.svg"
import Wow from "../../assets/wow.svg";
import Perks from "./Perks";

export default function WhyWoW() {
  return (
    <div id="why-WoW" className="pt-12 m-0.5 bg-gray-100">
      <div className="m-4">
        <h3 className="font-bold text-3xl mx-5 text-center">
          What is <img
            src={Wow}
            alt="WOW Pune 2023"
            className="w-[30%] lg:w-[8%] sm:w-[12%] inline-block"
          /> ?
        </h3>
      </div>

      <div className="md:flex p-3 pr-0">
        <div className="flex place-items-center justify-center p-3 my-4 mx-2 text-lg">
          <p className="font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={mapMH} alt="map mh" className="rounded object-cover w-[100%] lg:w-[2000px]" />
        </div>
      </div>

      <Perks />
    </div>
  );
}
