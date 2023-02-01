import React from "react";

export default function SponsorsCard({ item }) {
  return (
    <>
      <a
        href={item.url}
        target="_blank"
        className="bg-zinc-900 p-4 w-[90%] text-white lg:w-2/5 h-[300px] flex items-center flex-col lg:flex-row justify-center rounded shadow-md"
      >
        <img
          src={item.logo}
          alt=""
          className="w-2/5 lg:w-2/5 rounded bg-transparent mr-2"
        />
        <h1 className="mt-3 text-3xl">{item.name}</h1>
      </a>
    </>
  );
}
