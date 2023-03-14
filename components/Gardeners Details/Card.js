import Image from "next/image";
import Profile from "../../public/assets/Profile-1.png";
import { GoVerified } from "react-icons/go";
import saveIcon from "../../public/assets/save.png";
import { FaStar } from "react-icons/fa";
function Card() {
  return (
    <>
      <div className="w-[90%] my-3 flex flex-col items-center justify-center shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)] py-5 rounded-md sm:flex-row md:px-5">
        {/*Inner Div */}
        <div className="h-[200px] w-[240px] sm:h-[180px] sm:w-[220px]">
          {/*Image DIV */}
          <Image src={Profile} quality={100} />
        </div>
        <div className="w-[70%] flex flex-col items-center justify-center sm:items-start sm:pl-5">
          <div className="w-[90%] flex items-center justify-between">
            {/*Text Div */}
            <div className="w-[120px] flex items-center justify-evenly sm:w-[100px] sm:justify-between md:w-[130px] lg:w-[140px] lg:justify-evenly">
              {/*Heading */}
              <h2 className="text-base font-semibold lg:pr-20">Yairee</h2>
              <p>
                <GoVerified className="text-[#FFA800] text-2xl" />
              </p>
            </div>
            <div className="w-[50%] flex items-center justify-end">
              <p>
                <Image src={saveIcon} quality={100} height={20} width={20} />
              </p>
            </div>
          </div>
          <div className="w-[90%] flex justify-evenly my-4 sm:w-[35%] ">
            {/*Star Rating*/}
            <FaStar className="text-[#FFA800] text-2xl" />
            <FaStar className="text-[#FFA800] text-2xl" />
            <FaStar className="text-[#FFA800] text-2xl" />
            <FaStar className="text-[#FFA800] text-2xl" />
            <FaStar className="text-[#FFA800] text-2xl" />
          </div>
          <div className="my-2 flex items-center justify-center">
            {/*Button */}
            <div className="py-1 px-5 bg-[#F1F1F1] w-[120px]">
              <p className="text-base font-semibold">32 Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
