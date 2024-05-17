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
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex flex-col gap-2 h-[16vh] w-[76vw]">
            <div className="flex justify-center">
              <p className="font-bold text-4xl text-gray-700">My Tech Stack</p>
            </div>
            <div className="flex justify-center">
              <p className="text-gray-600 text-md md:text-xl font-semibold">
                {" "}
                Technologies I’ve been working with recently
              </p>
            </div>
          </div>
        </div>

        {width>700 ? (
          <div>
            <div className="w-[76vw] flex flex-col gap-14">
              <div className="flex justify-between">
                <img className="h-14 w-14" src={svgImage1} alt="SVG Image1" />
                <img className="h-14 w-14" src={svgImage2} alt="SVG Image2" />
                <img className="h-14 w-14" src={svgImage3} alt="SVG Image3" />
                <img className="h-14 w-14" src={svgImage4} alt="SVG Image4" />
                <img className="h-14 w-14" src={svgImage5} alt="SVG Image5" />
                <img className="h-14 w-14" src={svgImage6} alt="SVG Image6" />
              </div>
              <div className="flex justify-between">
                <img className="h-14 w-14" src={svgImage7} alt="SVG Image7" />
                <img className="h-14 w-14" src={svgImage8} alt="SVG Image8" />
                <img className="h-14 w-14" src={svgImage9} alt="SVG Image9" />
                <img className="h-14 w-14" src={svgImage10} alt="SVG Image10" />
                <img className="h-14 w-14" src={svgImage11} alt="SVG Image11" />
                <img className="h-14 w-14" src={svgImage12} alt="SVG Image12" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
          <div className="flex  flex-col gap-3 ">
            <div className="flex gap-4">
              <img className="h-10 w-10" src={svgImage1} alt="SVG Image1" />
              <img className="h-10 w-10" src={svgImage2} alt="SVG Image2" />
              <img className="h-10 w-10" src={svgImage3} alt="SVG Image3" />
            </div>
            <div className="flex gap-4">
              <img className="h-10 w-10" src={svgImage4} alt="SVG Image4" />
              <img className="h-10 w-10" src={svgImage5} alt="SVG Image5" />
              <img className="h-10 w-10" src={svgImage6} alt="SVG Image6" />
            </div>
            <div className="flex gap-4">
              <img className="h-10 w-10" src={svgImage7} alt="SVG Image7" />
              <img className="h-10 w-10" src={svgImage8} alt="SVG Image8" />
              <img className="h-10 w-10" src={svgImage9} alt="SVG Image9" />
            </div>
            <div className="flex fap-4">
              <img className="h-10 w-10" src={svgImage10} alt="SVG Image10" />
              <img className="h-10 w-10" src={svgImage11} alt="SVG Image11" />
              <img className="h-10 w-10" src={svgImage12} alt="SVG Image12" />
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TechStack;
