import React from "react";
import website from "../../assets/Icons/website.svg";
import twitter from "../../assets/Icons/twitter.svg";
import linkedin from "../../assets/Icons/linkedin.svg";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";

export default function CP_Card({ item }) {
  return (
    <>
      <div className="bg-zinc-900 p-4 w-[90%] min-h-[200px] my-4 lg:w-2/5 flex items-center flex-col lg:flex-row justify-center rounded shadow-md">
        <div className="w-2/5 lg:w-2/5 rounded relative bg-transparent mr-2">
          <img
            src={item.logo}
            alt={item.name}
            className="rounded bg-white shadow-lg"
          />
        </div>
        <div>
          <h1 className="mt-3 text-3xl">{item.name}</h1>
          <div className="flex justify-center lg:justify-start content-baseline gap-2">
            {item.url ? (
              <a target="_blank" href={item.url}>
                <img
                  src={website}
                  alt="Website"
                  className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                />
              </a>
            ) : (
              <></>
            )}
            {item.linkedin ? (
              <a target="_blank" href={item.linkedin}>
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                />
              </a>
            ) : (
              <></>
            )}
            {item.twitter ? (
              <a target="_blank" href={item.twitter}>
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                />
              </a>
            ) : (
              <></>
            )}
            {item.instagram ? (
              <a target="_blank" href={item.instagram}>
                <AiOutlineInstagram
                  color="white"
                  size={25}
                  className="hover:-translate-y-1 transition-all ease-in-out"
                />
              </a>
            ) : (
              <></>
            )}
            {item.youtube ? (
              <a target="_blank" href={item.youtube}>
                <AiOutlineYoutube
                  color="white"
                  size={25}
                  className="hover:-translate-y-1 transition-all ease-in-out"
                />
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
