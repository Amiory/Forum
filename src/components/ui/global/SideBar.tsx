"use client";

import Link from "next/link";
import React, { useState } from "react";

import HamburgerMenuIcon from "../icons/HamburgerMenuIcon";
import LinkHover from "../icons/LinkHoverIcon";
import HeaderIcon from "../icons/HeaderIcon";

const NavLinks = [
  {
    text: "Ask away",
    path: "",
  },
  {
    text: "Trending",
    path: "",
  },
  {
    text: "Favorite",
    path: "",
  },
  {
    text: "Settings",
    path: "",
  },
  {
    text: "Sign in",
    path: "",
  },
];

export default function () {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    // <div className="w-full">
    //   <div className="w-full">
    //     <div className="w-full bg-lightBrown h-20 flex justify-center items-center px-8">
    //       <h1 className="font-jacquard_24 text-3xl text-darkBrown">Forum</h1>
    //     </div>
    //     <div
    //       className={`flex flex-col justify-between fixed bg-lightBrown left-0 top-20 bottom-0 lg:w-[250px] xl:w-[300px] 2xl:w-[350px] border-t-2 border-darkBrown font-jacquard_24 text-xl text-darkBrown py-3 `}
    //     >
    //       <div className="space-y-4 flex flex-col items-center w-full">
    //         {NavLinks.map(({ text, path }, index) => (
    //           <Link
    //             key={index}
    //             href={path}
    //             className="flex items-center justify-center gap-1 max-w-fit mx-auto group"
    //           >
    //             <LinkHover className="w-6 h-3 transition-opacity opacity-0 group-hover:opacity-100 -mt-3" />
    //             <span className="border-b-2 border-b-darkBrown w-24 text-center group-last:border-b-transparent pb-3">
    //               {text}
    //             </span>
    //             <LinkHover className="w-6 h-3 transition-opacity opacity-0 group-hover:opacity-100 -mt-3 -scale-y-100" />
    //           </Link>
    //         ))}
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <div>
    //           <h1>Forum</h1>
    //           <div className="w-full mt-3 h-0.5 bg-darkBrown"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Drawer */}
    //   <div className={`lg:hidden ${isOpen && "sticky top-0"}`}>
    //     <div className="w-full bg-lightBrown h-20 flex justify-between items-center px-8">
    //       <div className="transition-all" onClick={() => setIsOpen(!isOpen)}>
    //         <HamburgerMenuIcon isOpen={isOpen} />
    //       </div>
    //       <h1 className="font-jacquard_24 text-3xl text-darkBrown">Forum</h1>
    //     </div>
    //   <div
    //     className={`flex flex-col justify-between fixed bg-lightBrown left-0 top-20 bottom-0 w-1/2 border-t-2 border-darkBrown font-jacquard_24 text-xl text-darkBrown py-3 transform transition-transform duration-300 ${
    //       isOpen ? "-translate-x-0" : "-translate-x-full "
    //     } z-20`}
    //   >
    //     <div className="space-y-4 flex flex-col items-center w-full">
    //       {NavLinks.map(({ text, path }, index) => (
    //         <Link
    //           key={index}
    //           href={path}
    //           className="flex items-center justify-center gap-1 max-w-fit mx-auto group"
    //         >
    //           <LinkHover className="w-6 h-3 transition-opacity opacity-0 group-hover:opacity-100 -mt-3" />
    //           <span className="border-b-2 border-b-darkBrown w-24 text-center group-last:border-b-transparent pb-3">
    //             {text}
    //           </span>
    //           <LinkHover className="w-6 h-3 transition-opacity opacity-0 group-hover:opacity-100 -mt-3 -scale-y-100" />
    //         </Link>
    //       ))}
    //     </div>
    //     <div className="flex flex-col items-center">
    //       <div>
    //         <h1>Forum</h1>
    //         <div className="w-full mt-3 h-0.5 bg-darkBrown"></div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Overlay */}
    //   {isOpen && (
    //     <div
    //       className="fixed h-full left-0 top-20 bg-black opacity-40 w-full transition-colors duration-300 z-10"
    //       onClick={() => setIsOpen(!isOpen)}
    //     >
    //       {" "}
    //     </div>
    //   )}
    // </div>
    // </div>
    <>
      <aside className="w-full hidden lg:inline-block">
        <div className="fixed top-0 h-full lg:w-[350px]">
          <div
            className={`flex flex-col justify-between h-full bg-lightBrown py-6`}
          >
            <div className="space-y-4 flex flex-col items-center w-full ">
              {NavLinks.map(({ text, path }, index) => (
                <Link
                  key={index}
                  href={path}
                  className="flex items-center justify-center max-w-fit mx-auto gap-2 group"
                >
                  <LinkHover className="w-12 h-6 transition-opacity opacity-0 group-hover:opacity-100 -mt-3" />
                  <span className="border-b-2 font-jacquard_24 text-darkBrown text-xl border-b-darkBrown text-center group-last:border-b-transparent pb-3 lg:text-3xl">
                    {text}
                  </span>
                  <LinkHover className="w-12 h-6 transition-opacity opacity-0 group-hover:opacity-100 -mt-3 -scale-y-100" />
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-center font-jacquard_24 text-darkBrown text-3xl">
              <div>
                <h1>Forum</h1>
                <div className="w-full mt-3 h-0.5 bg-darkBrown"></div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* mobile */}
      <div className="w-full lg:hidden">
        <div className="w-full bg-lightBrown h-20 px-8 flex items-center justify-between -z-10">
          <div onClick={() => setIsOpen(!isOpen)} className="z-10">
            <HamburgerMenuIcon isOpen={isOpen} />
          </div>
          <HeaderIcon className="w-40 absolute right-8 top-4" />

          <h1 className="font-jacquard_24 text-darkBrown text-3xl z-10">
            Forum
          </h1>
        </div>
        {/* Drawer */}
        <div
          className={`fixed top-0 h-full w-full transform transition-transform z-20 ${
            isOpen ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className={`flex flex-col justify-between h-full bg-lightBrown w-1/2 py-6 transform transition-transform ${
              isOpen ? "-translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="space-y-4 flex flex-col items-center w-full ">
              {NavLinks.map(({ text, path }, index) => (
                <Link
                  key={index}
                  href={path}
                  className="flex items-center justify-center max-w-fit mx-auto group"
                >
                  <LinkHover className="w-6 h-3 transition-opacity opacity-0 group-hover:opacity-100 -mt-3" />
                  <span className="border-b-2 font-jacquard_24 text-darkBrown text-xl border-b-darkBrown w-24 text-center group-last:border-b-transparent pb-3">
                    {text}
                  </span>
                  <LinkHover className="w-6 h-3 transition-opacity opacity-0 group-hover:opacity-100 -mt-3 -scale-y-100" />
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-center font-jacquard_24 text-darkBrown text-xl">
              <div>
                <h1>Forum</h1>
                <div className="w-full mt-3 h-0.5 bg-darkBrown"></div>
              </div>
            </div>
          </div>
          {/* Overlay */}
          <div
            className={`fixed top-0 w-full h-full bg-black transition-opacity duration-300 -z-10 ${
              isOpen ? "bg-opacity-40" : "bg-opacity-40"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          ></div>
        </div>
      </div>
    </>
  );
}
