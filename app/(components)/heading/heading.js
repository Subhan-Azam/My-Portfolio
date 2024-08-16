import React from "react";
import "./heading.css"

export default function Heading(props) {
  return (
    <>
      <div className="scroll-animation-heading flex flex-col text-center w-full my-10">
        <div className="m-auto">
          <h1 className="flex items-center justify-center font-serif font-semibold title-font mb-4 text-white tracking-widest text-5xl md:text-6xl">
            <span className="border-b-2 gradientBorder border-purple-600">{props.title}</span>
            <span className="gradientHeading">{props.title2}</span>
          </h1>
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-400">
          {props.para}
        </p>
      </div>
    </>
  );
}