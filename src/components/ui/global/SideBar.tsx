"use client";

import Link from "next/link";
import React, { useState } from "react";

import HamburgerMenuIcon from "../icons/HamburgerMenuIcon";
import LinkHover from "../icons/LinkHoverIcon";

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
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="w-full">
      <div className="w-full bg-lightBrown h-20 flex justify-between items-center px-8">
        <div className="transition-all" onClick={() => setIsOpen(!isOpen)}>
          <HamburgerMenuIcon isOpen={isOpen} />
        </div>
        <h1 className="font-jacquard_24 text-3xl text-darkBrown">Forum</h1>
      </div>

      {/* Drawer */}
      <aside>
        <div
          className={`flex flex-col justify-between fixed bg-lightBrown left-0 top-20 bottom-0 w-1/2 border-t-2 border-darkBrown font-jacquard_24 text-xl text-darkBrown py-3 transform transition-transform duration-300 ${
            isOpen ? "-translate-x-0" : "-translate-x-full "
          } z-20`}
        >
          <div className="space-y-4 flex flex-col items-center w-full">
            {NavLinks.map(({ text, path }, index) => (
              <Link
                key={index}
                href={path}
                className="flex items-center justify-center gap-1 max-w-fit mx-auto group"
              >
                <LinkHover className="w-6 h-3 transition-opacity opacity-0 group-hover:opacity-100 -mt-3" />
                <span className="border-b-2 border-b-darkBrown w-24 text-center group-last:border-b-transparent pb-3">
                  {text}
                </span>
                <LinkHover className="w-6 h-3 transition-opacity opacity-0 group-hover:opacity-100 -mt-3 -scale-y-100" />
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <div>
              <h1>Forum</h1>
              <div className="w-full mt-3 h-0.5 bg-darkBrown"></div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed h-full left-0 top-20 bg-black opacity-40 w-full transition-colors duration-300 z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {" "}
          </div>
        )}
      </aside>
    </div>
  );
}
