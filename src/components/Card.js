import React from "react";
import image2 from "../images/akar-icons_link-chain.png";
import image3 from "../images/akar-icons_github-fill.png";
import { useState, useEffect } from "react";
const Card = (props) => {
  
  const maxDescriptionLength = 120;

  const truncateDescription = (description) => {
    if (description.length > maxDescriptionLength) {
      return description.substring(0, maxDescriptionLength) + "...";
    }
    return description;
  };
  const [width, setWidth] = useState(window.innerWidth);
  console.log("width herna lai", width);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-68 md:w-76 lg:w-max rounded-t-xl rounded-b-xl hover:border border-green-900">
      <div className="w-68 md:w-76 lg:w-max">
        <div>
          <img
            src={props.imgsrc}
            alt=""
            className="w-56 h-52 sm:w-60 sm:h-56 md:w-72 md:h-52 lg:w-90 lg:h-68 rounded-t-xl"
          />
        </div>
        <div className="w-56 h-52 sm:w-60 sm:h-56 md:w-72 md:h-52 lg:w-90 lg:h-68 bg-white rounded-b-xl shadow-2xl">
        {width>700 ? (
          <div>
          <div>
            <p className="text-center font-bold text-md md:text-md lg:text-lg text-black-600 py-3">
              {props.title}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-gray-500 text-justify px-2">
              <p className="text-sm md:text-md ">{truncateDescription(props.description)}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-6 lg:gap-5">
            <div>
              <p className=" text-xs md:text-sm lg:text-md text-gray-500 text-justify font-semibold px-2 py-4">
                {props.languages}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <img src={image2} alt="Live Preview" />
                <p className="text-xs text-gray-500 text-justify underline underline-offset-1">
                  Live Preview
                </p>
              </div>
              <div className="flex object-contain w-20">
                <img src={image3} alt="View Code" />
                <a href="https://github.com/prak32/SCEV">
                  <p className="text-xs text-gray-500 justify-end underline underline-offset-1">
                    View Code
                  </p>
                </a>
              </div>
              </div>
            </div>
          </div>
        ):(
        <div>
          <div>
            <p className="text-center font-bold text-sm text-black py-3">
              {props.title}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-gray-500 text-justify px-2">
              <p className="text-xs ">{truncateDescription(props.description)}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className=" text-xs text-gray-500 text-justify font-semibold px-2 py-4">
                {props.languages}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <img src={image2} alt="Live Preview" />
                <p className="text-xs text-gray-500 text-justify underline underline-offset-1">
                  Live Preview
                </p>
              </div>
              <div className="flex object-contain w-20">
                <img src={image3} alt="View Code" />
                <a href="https://github.com/prak32/SCEV">
                  <p className="text-xs text-gray-500 justify-end underline underline-offset-1">
                    View Code
                  </p>
                </a>
              </div>
              </div>
            </div>
          </div>
        )
      }
        </div>
      </div>
    </div>
  );
};

export default Card;
