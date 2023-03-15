import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Ellipse2 from "../../public/assets/Ellipse-2.png";
function Card() {
  return (
    <div className="flex justify-center">
      <div className="w-[80%] bg-white h-[320px] mt-[40px] flex justify-center rounded-md shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)] my-5">
        <div className="">
          <div className=" h-44 w-50 mt-3 flex justify-center">
            <Image
              src={Ellipse2}
              quality={100}
              className="  h-[170px] w-[100%] rounded-full"
            />
          </div>
          <div className=" flex justify-between items-center mt-2">
            <p className="font-extrabold  text-xl">Kaylie Pagie</p>
            {/* <Image src={star1} className="w-[27px] h-[26.5px] text-5xl"></Image> */}
            <MdVerified className="text-[#FFA800] text-2xl" />
          </div>
          <div className=" flex justify-center mt-2">
            <p className="font-medium text-[17px]">Service Provider</p>
          </div>
          <div className=" flex justify-around mt-2">
            <FaStar className="text-lg text-[#FFA800]" />
            <FaStar className="text-lg text-[#FFA800]" />
            <FaStar className="text-lg text-[#FFA800]" />
            <FaStar className="text-lg text-[#FFA800]" />
            <FaStar className="text-lg text-[#FFA800]" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
