import Image from "next/image";
import "./servicesCard.css";

export default function ServicesCard(props) {
  return (
    <div className="reload-effect scroll-animation-Cards cardHover m-auto my-5 py-14 px-5 max-w-[380px] w-full">
      <div className="flex items-center">
        <Image
          src={props.src}
          width={70}
          height={50}
          className="mr-4 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4"
        />
        <h2 className="title-font font-medium text-lg text-white">
          {props.title}
        </h2>
      </div>
      <p className="flex items-center justify-center text-gray-400 ">
        {props.paragraph}
      </p>
    </div>
  );
}
