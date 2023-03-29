import React from "react";
import "./perks.css";
import CardData from "./CardData.json";

const Perks = () => {
  return (
    <div className="mx-2 my-1 rounded-xl ">
      <div className="mt-9 flex flex-col items-center justify-center text-center">
        <p className="google-font text-3xl text-dark ">We are expecting...</p>
      </div>

      <div className="lg:flex my-10 mx-4 p-2 justify-center items-center">
        <div className="p-4 m-4 items-center h-100 w-100 bg-gradient-to-r from-red-600  to-orange-400 rounded-lg shadow-lg">
          <li className="text-3xl text-slate-200 p-2 m-2 pb-5 list-none text-center">
            1000+
            <br />
            Attendees
          </li>
        </div>

        {/* <div className="p-4 m-4 justify-center h-100 w-100 items-center bg-gradient-to-r from-red-600  to-orange-400 rounded-lg shadow-lg">
          <li className="text-3xl text-slate-200 h-100 w-100 p-2 m-2 pb-5 list-none text-center">25+<br />Workshops</li>
        </div> */}
        <div className="p-4 m-4 justify-center h-100 w-100 items-center bg-gradient-to-r from-red-600  to-orange-400 rounded-lg shadow-lg">
          <li className="text-3xl text-slate-200 p-2 m-2 pb-5 list-none text-center">
            10+
            <br />
            Speakers
          </li>
        </div>
        <div className="p-4 m-4 justify-center h-100 w-100 items-center bg-gradient-to-r from-red-600  to-orange-400 rounded-lg shadow-lg">
          <li className="text-3xl text-slate-200 p-2 m-2 pb-5 list-none text-center">
            30+
            <br />
            Colleges
          </li>
        </div>
      </div>

      <div className="mt-9 m-9 flex flex-col items-center justify-center text-center">
        <h3 className="font-bold text-3xl mx-5 text-dark">
          Things you don't want to miss!{" "}
          <span className="text-black text-3xl">👀</span>
        </h3>
      </div>
      <div className="md:flex md:p-5 py-2 bg-slate-200 rounded-xl justify-space-between shadow-lg">
          {CardData.map((item) => {
            return (
              <div className="container flex justify-center p-0.5 my-4 mx-3 transform transition duration-500 hover:scale-110">
                <div className="content p-2 pb-8">
                  <p className="text-2xl text-center pt-2">{item.title}</p>
                  <br />
                  <p className="mx-2">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Perks;
