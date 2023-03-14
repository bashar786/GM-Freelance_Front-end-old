import Image from "next/image";
import Card from "../components/Gardeners Details/Card";
import Sidebar from "../components/Sidebar";
import email from "../public/assets/email.png";
import Share from "../public/assets/Share.png";
import Emoji from "../public/assets/Emoji.png";
import Send from "../public/assets/Send.png";
function messages() {
  return (
    <>
      <div className="flex">
        <div className="flex">
          {/*Top Container */}
          {/*Sidebar */}
          <Sidebar />
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="h-[100vh] md:w-[50%]">
            {/*Message Area */}
            <div className="h-[80%]">{/*Empty Area */}</div>
            <div className="border-[1px] border-[#E1E1E1] h-[126px] mx-4 px-5 my-5">
              {/*Input Box */}
              <input
                type="text"
                placeholder="Write your message..."
                className="h-20 w-full outline-none"
              />
              <div className="flex items-end justify-end">
                <p className="flex items-center justify-evenly w-[150px]">
                  <Image src={email} quality={100} height={30} width={30} />
                  <Image src={Share} quality={100} height={30} width={30} />
                  <Image src={Emoji} quality={100} height={30} width={30} />
                  <Image src={Send} quality={100} height={30} width={30} />
                </p>
              </div>
            </div>
          </div>
          <div className="h-[100vh] overflow-y-scroll flex flex-col items-center justify-between py-8 md:w-[50%]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default messages;
