import React from "react";

export default function CommunityCard({ item }) {
  return (
    <>
      <a
        href={item.url}
        target='_blank'
        className='p-4 w-[90%] bg-secondary text-white lg:w-2/5 h-[300px] flex items-center flex-row flex-wrap lg:flex-row justify-evenly rounded-xl'
      >
        <img
          src={item.logo}
          alt=''
          className='w-2/5 lg:w-2/5 rounded bg-transparent mr-2'
        />
        <h1 className='mt-3 text-3xl'>{item.name}</h1>
      </a>
    </>
  );
}
