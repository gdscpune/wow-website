import React from "react";
import FaqJson from "./FAQ.json";

export default function Faq() {
  return (
    <div id='faq' className='lg:container mx-auto pt-12 mb-24'>
      <div className='flex flex-col lg:flex-row justify-evenly items-center'>
        <h1>FAQ</h1>
      </div>
      <div className='space-y-4'>
        {FaqJson.map((item, id) => (
          <details
            key={id}
            className='group border-x-4 rounded-sm border-l-secondary border-r-primary px-6'
            open={id === 0 ? true : false}
          >
            <summary className='flex cursor-pointer items-center justify-between'>
              <h2 className='text-lg font-medium text-black'>
                {item.question}
              </h2>
              <span className='ml-1.5 flex-shrink-0 rounded-full bg-transparent p-1.5 text-primary sm:p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            </summary>
            <p className='leading-relaxed text-black mt-1'>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
