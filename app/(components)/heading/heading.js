import React from "react";

export default function Heading(props) {
  return (
    <>
      <div className="flex flex-col text-center w-full my-10">
        <div className="m-auto">
          <h1 className="flex items-center justify-center font-serif  text-6xl font-semibold title-font mb-4 text-white tracking-widest">
            <span className=" border-b-2 border-purple-600">{props.title}</span>
            <span className="text-purple-600">{props.title2}</span>
          </h1>
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-400">
          {props.para}
        </p>
      </div>
    </>
  );
}
