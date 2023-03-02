import React from "react";
import "./perks.css";

const Perks = () => {
  return (
    <div className="mx-20 my-10 pt-4 rounded-xl ">
     
      <div className="my-10">
        <div className="md:flex p-4 my-2 justify-center bg-gray-200 rounded-lg">
        <li className=" text-3xl p-2 pb-5 list-none mx-10 bg-gradient-to-r from-red-600 via-pink-500 to-orange-400 inline-block text-transparent bg-clip-text ">1000+ <br/>Attendees</li>
        <li className=" text-3xl p-2 pb-5 list-none mx-10 bg-gradient-to-r  from-red-600 via-pink-500 to-orange-400 inline-block text-transparent bg-clip-text">25+ <br/>Workshops</li>
        <li className=" text-3xl p-2 pb-5 list-none mx-10 bg-gradient-to-r  from-red-600 via-pink-500 to-orange-400 inline-block text-transparent bg-clip-text">35+ <br/>Speakers</li>
        <li className=" text-3xl p-2 pb-5 list-none mx-10 bg-gradient-to-r  from-red-600 via-pink-500 to-orange-400 inline-block text-transparent bg-clip-text">1 <br/>Day</li>
        </div>
      </div>

      <div className="flex m-5 justify-center">
        <h3 className="font-bold text-3xl mx-50 my-10 text-dark">
          Things you don't want to miss! <span className="text-black text-3xl">👀</span>
        </h3>
      </div>
      <div className="md:flex p-8 bg-slate-200 rounded-xl my-10">
        <div className="container flex justify-center p-0.5 my-4 mx-4 hover:scale-110">
          <div className="content p-2 pb-8">
            <p className="text-2xl text-center">💻Technical content</p>
            <br />
            <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="container flex justify-center p-0.5 my-4 mx-4 hover:scale-110">
          <div className="content p-2 pb-8">
            <p className="text-2xl text-center">🛠️Workshops & Codelabs</p>
            <br />
            <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="container flex justify-center p-0.5 my-4 mx-4 hover:scale-110">
          <div className="content p-2 pb-8">
            <p className="text-2xl text-center">🌐Networking</p>
            <br />
            <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="container flex justify-center p-0.5 my-4 mx-4 hover:scale-110">
          <div className="content p-2 pb-8">
            <p className="text-2xl text-center">🍕Swags & Refreshments</p>
            <br />
            <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Perks;