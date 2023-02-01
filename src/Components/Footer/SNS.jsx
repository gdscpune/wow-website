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
    <div className="flex text-4xl w-full justify-between">
      {SNS.map((item, id) => (
        <a
          className="text-inherit hover:text-primary transition-all hover:animate-bounce ml-1"
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
