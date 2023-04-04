import React from "react";

export default function CommunityCard({ item }) {
  return (
    <>
      <a
        href={item.url}
        target="_blank"
        className="p-0 lg:p-4 w-[70%] bg-slate-200 lg:w-1/4 h-[100px] lg:h-[200px] flex items-center flex-row flex-wrap lg:flex-row justify-evenly rounded-xl"
      >
        <img
          src={item.logo}
          alt=""
          className="w-2/5 lg:w-4/5 rounded bg-transparent mr-2"
        />
        {/* <h1 className='mt-3 text-3xl'></h1> */}
      </a>
    </>
  );
}
