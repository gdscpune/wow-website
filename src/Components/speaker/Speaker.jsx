import React from "react";
import { SpeakerList } from "./SpeakerList";
import linkedin from "../../assets/Icons/linkedin.svg";
import twitter from "../../assets/Icons/twitter.svg";

function Speaker(props) {
  return (
    <>
      {SpeakerList.map((item, id) => {
        return (
          <div
            key={id}
            className="w-full mt-10 md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-20 lg:pl-2 lg:pr-2"
          >
            <div className="bg-slate-100 rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <div className="relative flex justify-center items-center -mt-16 w-48 h-40 mx-auto">
                <div
                  className="!bg-cover w-full !z-[40] rounded-full"
                  style={{ background: `url(${item.image})` }}
                >
                  <img
                    className="rounded-[100%] aspect-square w-[100%] items-center object-cover z-30"
                    src={item.frame}
                    alt={item.name}
                  />
                </div>
              </div>
              <div className="rounded-lg p-4 mt-4 flex flex-col">
                <div>
                  <h5 className="text-3xl font-bold leading-none text-center pb-4">
                    {item.name}
                  </h5>
                  <span className="text-xl text-slate-600 leading-none">
                    {item.bio}
                  </span>
                </div>

                <div className="flex justify-center mt-5">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a href={item.linkedinUrl} target="_blank" rel="noreferrer">
                      <img
                        src={linkedin}
                        alt="linkedin"
                        className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                      />
                    </a>
                  </button>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a href={item.twitterUrl} target="_blank" rel="noreferrer">
                      <img
                        src={twitter}
                        alt="twitter"
                        className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                      />
                    </a>
                  </button>

                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Speaker;
