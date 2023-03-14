import { IoMenu } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { HiStar } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
function Sidebar() {
  const [toggle, setToggle] = useState(true);
  console.log("The Toogle is ", toggle);
  return (
    <>
      <div
        className={`h-[100%] ${
          toggle ? "w-[70px] sm:w-[130px]" : "w-[160px] sm:w-[260px]"
        } bg-gradient-to-b from-[#FF602B] to-[#990202]`}
      >
        <div
          className={`h-[400px] flex flex-col ${
            toggle ? "items-center pl-[14px]" : "items-start px-3"
          } justify-evenly`}
        >
          <div className="flex items-center justify-between w-full sm:justify-evenly">
            <IoMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-3xl"
            />
            <p
              className={`${
                toggle
                  ? "hidden"
                  : "flex text-white text-lg font-bold text-left"
              }`}
            >
              Collapse
            </p>
          </div>
          <div className="flex items-center justify-between w-full sm:justify-evenly">
            <MdMessage className="text-white text-3xl" />
            <p
              className={`${
                toggle
                  ? "hidden"
                  : "flex text-white text-lg font-bold text-left"
              }`}
            >
              Message
            </p>
          </div>
          <div className="flex items-center justify-between w-full sm:justify-evenly">
            <BsBookmarkFill className="text-white text-3xl" />
            <p
              className={`${
                toggle
                  ? "hidden"
                  : "flex  text-white text-lg font-bold text-left"
              }`}
            >
              Favourites
            </p>
          </div>
          <div className="flex items-center justify-between w-full sm:justify-evenly">
            <FaHistory className="text-white text-3xl" />
            <p
              className={`${
                toggle
                  ? "hidden"
                  : "flex  text-white text-lg font-bold text-left"
              }`}
            >
              Message
            </p>
          </div>
          <div className="flex items-center justify-between w-full sm:justify-evenly">
            <HiStar className="text-white text-3xl " />
            <p
              className={`${
                toggle
                  ? "hidden"
                  : "flex  text-white text-lg font-bold text-left"
              }`}
            >
              Message
            </p>
          </div>
          <div className="flex items-center justify-between w-full sm:justify-evenly">
            <IoMdSettings className="text-white text-3xl" />
            <p
              className={`${
                toggle
                  ? "hidden"
                  : "flex  text-white text-lg font-bold text-left"
              }`}
            >
              Settings
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
