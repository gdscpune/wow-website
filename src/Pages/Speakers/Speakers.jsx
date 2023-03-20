import React from "react";
import Speaker from "../../Components/speaker/Speaker";
import "./speakers.css";

export default function Speakers() {
  return (
    <div id='speakers' className='pt-12'>
      <h1 className='text-center'>Speakers</h1>
      <div className=' mt-10 flex items-center w-screen '>
        <div className='container ml-auto mr-auto flex flex-wrap justify-center items-center '>
          <div className=' bg-white w-full flex flex-wrap justify-center items-center'>
            <Speaker />
          </div>
        </div>
      </div>
    </div>
  );
}
