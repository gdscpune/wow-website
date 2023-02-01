import React, { useEffect, useState } from "react";
import Menu from "./Menu.json";
import Wow from "../../assets/wow.svg";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";
import { HashLink as Link } from "react-router-hash-link";

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <div
        className={`w-full fixed top-0 flex items-center justify-between p-2 border-b-[1px] z-50 ${scroll
          ? "bg-[rgba(192,192,192,0.3)] backdrop-blur-[5px]"
          : "bg-transparent backdrop-blur-0"
          }`}
      >
        <a href="#home" className="text-inherit" rel="noreferrer">
          <div className="flex items-center justify-start">
            <img
              src={Wow}
              alt="WOW Pune 2023"
              className="w-[20%] sm:w-[20%] inline-block"
            />
            <span className="font-googleBold text-2xl lg:text-4xl ml-2">
              | Pune
            </span>
          </div>
        </a>
        <ul className="hidden lg:flex justify-evenly">
          {Menu.map((item, id) => (
            <li className="mx-1" key={id}>
              <Link
                onClick={() => {
                  if (!item.url.includes("#")) {
                    window.scrollTo(0, 0);
                  }
                }}
                to={item.url}
                smooth
                className={`min-w-full text-inherit whitespace-nowrap ${id === 0 ? "bg-primary" : ""
                  } px-4 py-2 rounded-full hover:bg-secondary`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Responsive Nav for Mobiles */}
        <div
          onClick={() => setToggle(!toggle)}
          className="lg:hidden flex fles-1 justify-end items-center"
        >
          <img src={toggle ? menu : close} className="animate-bounce w-8" />
          <div
            className={`fixed right-1 top-[3rem] p-2 rounded bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px] z-50 ${toggle ? "hidden" : "flex"
              }`}
          >
            <ul
              className={`list-none relative ${toggle ? "hidden" : "flex"
                } flex flex-col justify-center item-end`}
            >
              {Menu.map((item, id) => (
                <li className="mx-1 my-2" key={id}>
                  <Link
                    onClick={() => {
                      if (!item.url.includes("#")) {
                        window.scrollTo(0, 0);
                      }
                    }}
                    to={item.url}
                    smooth
                    className={`min-w-full text-white whitespace-nowrap ${id === 0 ? "bg-primary" : ""
                      } px-4 py-2 rounded-full hover:bg-secondary`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
