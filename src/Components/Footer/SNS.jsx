import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

export default function SNS() {
  const SNS = [
    {
      title: "linkedin",
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/company/gdsc-pune/about/",
    },
    {
      title: "Instagram",
      icon: <AiFillInstagram />,
      url: "https://www.instagram.com/gdsc.pune/",
    },
    {
      title: "Twitter",
      icon: <AiFillTwitterSquare />,
      url: "https://twitter.com/GDSCPune",
    },
    {
      title: "Youtube",
      icon: <AiFillYoutube />,
      url: "https://www.youtube.com/channel/UCQzNpV04ZBAp9ggpniom4LA",
    },
  ];
  return (
    <div className="flex text-4xl w-full justify-between px-8 lg:px-0 mb-2 lg:mb-0">
      {SNS.map((item, id) => (
        <a
          className="text-inherit hover:text-primary transition duration-300 transform hover:-translate-y-1 hover:scale-110 ml-1"
          key={id}
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
