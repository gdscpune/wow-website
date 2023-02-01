import React from "react";
import "./schedule.css";
import { Sechedule } from "./SecheduleData";

export default function Schedule({ schedule }) {
  return (
    <div id="agenda" className="pt-12">
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        <h1 className="text-white mt-4">Agenda</h1>
      </div>
      
      {Sechedule.map((item) => (
        <div
          key={item.id}
          className="grid mx-5 grid-cols-12 mt-3 px-0 lg:px-10 xl:px-40"
        >
          <div className="col-span-2 my-3 items-center  py-5 pr-5 lg:pr-0 text-center">
            {item.started}
          </div>
          <div className="col-span-10 px-5 py-6 align-middle border-secondary border-l-[5px] bg-white text-black rounded">
            <div className="flex items-center">
              <div className="mx-3 ">
                {item.title.includes("Lunch") ? (
                  <div className="w-10 h-10 p-2 bg-blue-500 rounded text-center">
                    🍕
                  </div>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    className="w-10 h-10 p-2 bg-blue-500 rounded"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    ></path>
                  </svg>
                )}
              </div>
              <div>
                <h3 className="lg:text-2xl">{item.title} </h3>
                <p className="text-sm text-gray-500">{item.finished} </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <h2 className="text-center text-2xl mt-4"></h2>
    </div>
  );
}
