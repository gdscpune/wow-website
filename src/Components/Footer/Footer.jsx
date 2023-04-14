import React from "react";
import SNS from "./SNS";
import gdscpune from "../../assets/gdscpune.png";

export default function Footer() {
  return (
    <>
      <hr />

      <div
        style={{
          zIndex: "99",
          width: "100%",
          backgroundColor: "bg-[rgba(192,192,192,0.3)]",
          backdropFilter: "blur(5px)",
          transition: "ease .8s",
        }}
        className="w-full text-inherit px-2 py-2 lg:py-5 sticky top-0 flex lg:flex-row flex-col justify-between items-center navbar my-0"
      >
        <div className="flex ml-2 items-center justify-start">
          <img
            src={gdscpune}
            alt="GDSC Pune"
            className="w-[40px] lg:w-[60px] "
          />
          <p className="ml-2 lg:text-[28px] text-[14px] w-full">
            Google Developer Student Clubs . Pune
          </p>
        </div>
        <div className="my-2 lg:my-0">
          <a
            href="https://gdscpune.notion.site/Code-of-Conduct-Terms-Conditions-Community-Guidelines-48998a2cae33467e976bbbdac32b6df8"
            target="_blank"
          >
            <span className="mr-2 lg:text-xl">Code of Conduct and T&Cs</span>
          </a>
        </div>
        <div className="lg:w-1/4 w-full flex lg:flex-row flex-col items-center">
          <div className="flex justify-center mb-2 lg:mb-0">
            <span className="mr-2">Connect with us</span>
            <span className="inline-block lg:hidden text-black text-2xl">
              👇🏼
            </span>
          </div>
          <SNS />
        </div>
      </div>
    </>
  );
}
