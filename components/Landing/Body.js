import { FiSearch } from "react-icons/fi";
import PrimaryButton from "./PrimaryButton";
import SecondryButton from "./SecondryButton";
function Body() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center h-14 my-5">
          {/*Search Bar */}
          <FiSearch className="text-[#8F8F8F] text-2xl relative left-8 sm:left-10" />
          <input
            type="text"
            placeholder="Search for ..."
            className="bg-[#F3F3F3] text-[#8F8F8F] text-xl font-semibold outline-none border-2 border-[#D5D5D5] py-2 w-[260px] rounded-lg pl-8 sm:pl-16 sm:w-[340px] md:w-[500px] lg:w-[800px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-evenly sm:flex-row sm:w-[620px] md:w-[740px] lg:w-[1024px]">
            {/*Buttons */}
            <SecondryButton title="Budget" />
            <SecondryButton title="Minimum Rating" />
            <SecondryButton title="Preferred Gender" />
          </div>
        </div>
        <div className="flex items-center justify-center my-10">
          {/*Seacrh Button */}
          <PrimaryButton />
        </div>
      </div>
    </>
  );
}

export default Body;
