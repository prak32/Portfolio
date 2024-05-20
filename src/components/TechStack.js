import React from "react";
import svgImage1 from "../images/java.svg";
import svgImage2 from "../images/vscode-icons_file-type-css.svg";
import svgImage3 from "../images/vscode-icons_file-type-js-official.svg";
import svgImage4 from "../images/C.svg";
import svgImage5 from "../images/logos_react.svg";
import svgImage6 from "../images/python-5.svg";
import svgImage7 from "../images/logo2.svg";
import svgImage8 from "../images/logos_bootstrap.svg";
import svgImage9 from "../images/logos_git-icon.svg";
import svgImage10 from "../images/C++.svg";
import svgImage11 from "../images/vscode-icons_file-type-vscode.svg";
import svgImage12 from "../images/akar-icons_github-fill.svg";
import { useState, useEffect } from "react";
const TechStack = () => {
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
    <div className="flex justify-center">
      <div className="flex flex-col gap-6">
  
        {width > 700 ? (
          <div>
            <div className="flex flex-col gap-2 md:gap-3 md:mt-auto lg:mt-32 lg:gap-5 w-[76vw]">
              <div className="flex justify-center">
                <p className="font-bold text-3xl mt-56 md:mt-24 lg:mt-2 md:text-4xl lg:text-5xl text-gray-700">
                  My Tech Stack
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl font-semibold">
                  Technologies I’ve been working with recently
                </p>
              </div>
            </div>
            <div className="w-[76vw] flex flex-col gap-14 mt-5 md:mt-6 lg:mt-12">
              <div className="flex justify-between">
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage1}
                  alt="SVG Image1"
                />
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage2}
                  alt="SVG Image2"
                />
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage3}
                  alt="SVG Image3"
                />
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage4}
                  alt="SVG Image4"
                />
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage5}
                  alt="SVG Image5"
                />
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage6}
                  alt="SVG Image6"
                />
              </div>
              <div className="flex justify-between">
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage7}
                  alt="SVG Image7"
                />
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage8}
                  alt="SVG Image8"
                />
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage9}
                  alt="SVG Image9"
                />
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage10}
                  alt="SVG Image10"
                />
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage11}
                  alt="SVG Image11"
                />
                <img
                  className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
                  src={svgImage12}
                  alt="SVG Image12"
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col h-[12vh] w-[74vw] mt-20">
              <div className="flex justify-center">
                <p className="font-bold text-xl text-gray-700">My Tech Stack</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 text-sm font-semibold">
                  Technologies I’ve been working with recently
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col gap-5">
                <div className="flex gap-8">
                  <img className="h-10 w-10" src={svgImage1} alt="SVG Image1" />
                  <img className="h-10 w-10" src={svgImage2} alt="SVG Image2" />
                  <img className="h-10 w-10" src={svgImage3} alt="SVG Image3" />
                </div>
                <div className="flex gap-8">
                  <img className="h-10 w-10" src={svgImage4} alt="SVG Image4" />
                  <img className="h-10 w-10" src={svgImage5} alt="SVG Image5" />
                  <img className="h-10 w-10" src={svgImage6} alt="SVG Image6" />
                </div>
                <div className="flex gap-8">
                  <img className="h-10 w-10" src={svgImage7} alt="SVG Image7" />
                  <img className="h-10 w-10" src={svgImage8} alt="SVG Image8" />
                  <img className="h-10 w-10" src={svgImage9} alt="SVG Image9" />
                </div>
                <div className="flex gap-8">
                  <img
                    className="h-10 w-10"
                    src={svgImage10}
                    alt="SVG Image10"
                  />
                  <img
                    className="h-10 w-10"
                    src={svgImage11}
                    alt="SVG Image11"
                  />
                  <img
                    className="h-10 w-10"
                    src={svgImage12}
                    alt="SVG Image12"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default TechStack;
