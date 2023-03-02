import React from "react";
import "./perks.css";

const Perks = () => {
  return (
    <div className="bg-white pt-4">
      <div className="m-4">
        <h3 className="font-bold text-3xl mx-5 text-center">
          Things you don't want to miss! 👀
        </h3>
      </div>

      <div className="md:flex p-5">
        <div className="container flex justify-center p-0.5 my-4 mx-4">
          <div className="content p-2 pb-8">
            <p className="text-2xl">💻Technical content</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="container flex justify-center p-0.5 my-4 mx-4">
          <div className="content p-2 pb-8">
            <p className="text-2xl">🛠️Workshops & Codelabs</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="container flex justify-center p-0.5 my-4 mx-4">
          <div className="content p-2 pb-8">
            <p className="text-2xl">🌐Networking</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="container flex justify-center p-0.5 my-4 mx-4">
          <div className="content p-2 pb-8">
            <p className="text-2xl">🍕Swags & Refreshments</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Perks;