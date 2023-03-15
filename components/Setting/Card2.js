function Card2() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[80%] py-5 border-2 border-[#E1E1E1]">
        <div className="w-[80%] flex items-center justify-center md:w-[65%] md:justify-start py-2">
          {/*Top Div */}
          <p className="text-black text-[16px] font-bold leading-5 md:pl-[3%] lg:pl-[6%] xl:pl-[9%]">
            Password Reset
          </p>
        </div>
        <div className="w-[80%] flex flex-col items-center justify-center md:w-[65%]">
          {/*Bottom Div */}
          <div className="flex flex-col items-center justify-center w-[80%] my-3 sm:w-[100%] sm:flex-row md:justify-evenly ">
            <p>Current Password</p>
            <input
              type="text"
              className="border-2 border-[#E1E1E1] w-full sm:w-[55%] sm:ml-[8px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center my-3 w-[80%] sm:w-[100%] sm:flex-row md:justify-evenly ">
            <p>Current Password</p>
            <input
              type="text"
              className="border-2 border-[#E1E1E1] w-full sm:w-[55%] sm:ml-[8px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center my-3 w-[80%] sm:w-[100%] sm:flex-row md:justify-evenly">
            <p>Current Password</p>
            <input
              type="text"
              className="border-2 border-[#E1E1E1] w-full sm:w-[55%] sm:ml-[8px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
