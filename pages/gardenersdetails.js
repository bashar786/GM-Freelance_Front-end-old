import Image from "next/image";
import Card from "../components/Gardeners Details/Card";
import Sidebar from "../components/Sidebar";
import email from "../public/assets/email.png";
import Share from "../public/assets/Share.png";
import Emoji from "../public/assets/Emoji.png";
import Send from "../public/assets/Send.png";
function gardenersdetails() {
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
            <div className="h-[80%] border-2 border-black">
              {/*Empty Area */}
            </div>
          </div>
          <div className="h-[100vh] overflow-y-scroll flex flex-col items-center justify-between md:w-[50%]">
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

export default gardenersdetails;
