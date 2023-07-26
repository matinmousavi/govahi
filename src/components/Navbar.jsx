import { FaBars } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen(false);
  };
  const openHandler = () => {
    setIsOpen(true);
  };
  return (
    <>
      <nav className="py-6 sm:px-8 md:px-5 xl:px-20 px-5 fixed top-0 left-0 right-0 z-10 bg-white">
        <div className="flex items-center justify-between">
          <FaBars
            className="md:hidden sm:text-3xl cursor-pointer"
            onClick={openHandler}
          />
          <h3 className="font-black text-dark-blue tracking-[6px] xl:text-xl md:text-base sm:text-xl text-xs">
            SUNTECH
          </h3>
          <ul className="md:flex hidden justify-center xl:gap-24 md:gap-14 text-charcoal w-4/5">
            <li className="hover:text-cherry transition-all duration-300">
              <a href="#">خانه</a>
            </li>
            <li className="hover:text-cherry transition-all duration-300">
              <a href="#">مشتریان</a>
            </li>
            <li className="hover:text-cherry transition-all duration-300">
              <a href="#">گواهی نامه ها</a>
            </li>
            <li className="hover:text-cherry transition-all duration-300">
              <a href="#">تماس با ما</a>
            </li>
          </ul>
          <div className="gap-3 items-center text-white md:flex hidden">
            <a
              href="#"
              className="bg-charcoal xl:px-6 xl:py-2 md:py-1 md:px-4 rounded"
            >
              ورود
            </a>
            <a
              href="#"
              className="bg-dark-blue xl:px-5 xl:py-2 md:py-1 md:px-4 rounded"
            >
              عضویت
            </a>
          </div>
          <BsFillPersonFill className="md:hidden sm:text-3xl text-2xl" />
        </div>
      </nav>
      <nav>
        <div
          className={`h-screen z-40 flex items-center justify-center bg-white absolute w-2/3 ${
            isOpen ? "right-0" : "-right-[67%]"
          } transition-all duration-700 md:hidden`}
        >
          <div className="w-10/12 h-5/6">
            <h3 className="flex justify-between items-center font-black text-dark-blue tracking-[6px] xl:text-xl md:text-base sm:text-xl text-xs">
              <a href="#" className="sm:px-5 sm:text-base text-[0.7rem] px-1">
                SUNTECH
              </a>
              <GrFormClose
                className="sm:text-3xl text-xl cursor-pointer"
                onClick={closeHandler}
              />
            </h3>
            <ul className="py-16 ">
              <hr />
              <li className="sm:py-5 py-3 pr-8 cursor-pointer hover:bg-dark-blue hover:text-white transition-all hover:duration-300 text-xs sm:text-base">
                <a href="#">خانه</a>
              </li>
              <hr />
              <li className="sm:py-5 py-3 pr-8 cursor-pointer hover:bg-dark-blue hover:text-white transition-all hover:duration-300 text-xs sm:text-base">
                <a href="#">مشتریان</a>
              </li>
              <hr />
              <li className="sm:py-5 py-3 pr-8 cursor-pointer hover:bg-dark-blue hover:text-white transition-all hover:duration-300 text-xs sm:text-base">
                <a href="#">گواهی نامه ها</a>
              </li>
              <hr />
              <li className="sm:py-5 py-3 pr-8 cursor-pointer hover:bg-dark-blue hover:text-white transition-all hover:duration-300 text-xs sm:text-base">
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
