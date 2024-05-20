import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setNavVisible(!navVisible);
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
    <div>
      {width > 700 ? (
        <div className="fixed :h-[30vh] md:h-[12vh] w-full bg-gray-100">
          <div className="flex justify-center">
            <div className="flex justify-end w-[76vw]">
              <div className="flex">
                <div className="flex flex-col gap-6 md:flex-row gap-4 md:gap-12 lg:flex-row justify-end w-[76vw]">
                  <div>
                    <div className="py-2 visible md:invisible">
                      <SideBar
                        toggleNavVisibility={toggleNavVisibility}
                        navVisible={navVisible}
                      />
                    </div>
                    <div
                      className={`flex gap-2 flex-col ${
                        navVisible
                          ? "invisible font-semibold md:flex-row md:visible md:text-xl md:gap-8 lg:flex-row lg:text-2xl lg:gap-12"
                          : " text-md font-semibold md:flex-row md:text-xl md:gap-8 lg:flex-row lg:text-2xl lg:gap-12"
                      } text-gray-500`}
                    >
                      <Link to="/About">About</Link>
                      <Link to="/TechStack">TechStack</Link>
                      <Link to="/Projects">Projects</Link>
                      <Link to="/Footer">Contact</Link>
                    </div>
                  </div>
                  <div
                    className={`flex gap-4 ${
                      navVisible
                        ? "invisible md:flex-row md:visible md:gap-4 md:text-xl md:py-11 lg:flex-row lg:gap-5 lg:text-2xl lg:justify-end lg:py-11"
                        : "text-md md:flex-row md:text-xl md:gap-4 md:py-11 lg:flex-row lg:text-2xl lg:gap-5 lg:justify-end lg:py-11"
                    }`}
                  >
                    <a href="https://github.com/prak32">
                      <FaGithub />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100022254796671">
                      <FaFacebook />
                    </a>
                    <a href="https://www.Linkedin.com/in/prakash-shrestha-334402182/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-12 fixed :h-[32vh] bg-gray-100">
          <div className="flex justify-center">
            <div className="flex justify-end w-[76vw]">
              <div className="flex">
                <div className="flex flex-col gap-6 justify-end w-[76vw]">
                  <div>
                    <div className="py-2">
                      <SideBar
                        toggleNavVisibility={toggleNavVisibility}
                        navVisible={navVisible}
                      />
                    </div>
                    <div
                      className={`flex gap-2 flex-col ${
                        navVisible
                          ? "invisible font-semibold text-sm"
                          : " text-sm font-semibold"
                      } text-gray-500`}
                    >
                      <Link to="/About">About</Link>
                      <Link to="/TechStack">TechStack</Link>
                      <Link to="/Projects">Projects</Link>
                      <Link to="/Footer">Contact</Link>
                    </div>
                  </div>
                  <div
                    className={`flex gap-4 ${
                      navVisible ? "invisible text-sm" : "text-sm"
                    }`}
                  >
                    <a href="https://github.com/prak32">
                      <FaGithub />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100022254796671">
                      <FaFacebook />
                    </a>
                    <a href="https://www.Linkedin.com/in/prakash-shrestha-334402182/">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
