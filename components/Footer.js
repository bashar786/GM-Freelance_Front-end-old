import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#191716] to-[#361601] py-10 md:py-2">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-evenly lg:py-0">
        {/*Menu and Button */}
        <div className="w-[200px] flex flex-col items-center justify-center md:flex-row md:my-5 sm:w-[300px] md:w-[600px] lg:w-[750px] md:justify-between ">
          <p className="text-white">Who We Are</p>
          <p className="text-white">Testimonials</p>
          <p className="text-white">Our Team</p>
          <p className="text-white">Career</p>
          <p className="text-white">Meet Us</p>
          <p className="text-white">Contact Us</p>
        </div>
        <div>
          {/*Subscribe Email relative right-24 */}
          <div className="flex flex-col items-center justify-between h-28 my-5 md:h-16 sm:my-1 sm:w-[400px] md:w-[470px] md:flex-row lg:w-[400px]">
            <input
              type="email"
              placeholder="@ e-mail"
              className="bg-white px-4 py-2 w-[250px] rounded-full sm:w-[80%] md:w-[60%] lg:w-[140%]"
            />
            <button className="bg-[#FF954F] text-white text-md font-semibold py-2 px-3 w-[130px] rounded-full lg:relative lg:right-[100px] lg:py-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="md:pl-[120px] lg:pl-[70px]">
        <div className="flex items-center justify-center h-[70px] sm:flex-row md:flex-row md:justify-start sm:h-[40px]">
          {/*Social Icons */}
          <div className="flex flex-col items-center justify-center sm:flex-row sm:w-[250px] sm:justify-evenly md:justify-start">
            <p className="text-white text-xl px-5 text-left md:px-0">
              Follow Us
            </p>
            <p className="flex items-center justify-between w-[70px] md:w-[100px] md:justify-evenly md:pl-2">
              <AiFillInstagram className="text-white text-lg" />
              <AiOutlineTwitter className="text-white text-lg" />
              <FaFacebookF className="text-white text-lg" />
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#D5D5D5]">{/*border*/}</div>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-evenly sm:pt-5">
        <div className="flex flex-col items-center justify-center md:w-[50%] md:flex-row md:justify-evenly md:pr-20">
          <p className="text-white">Privacy Policy</p>
          <p className="text-white">ADA Policy</p>
          <p className="text-white">Terms & Condition</p>
        </div>
        <div className="md:w-[50%] md:flex md:justify-end md:pr-10">
          <p className="text-white">Copyright © 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
