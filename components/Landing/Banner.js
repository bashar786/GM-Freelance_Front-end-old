import Image from "next/image";
import BannerLogo from "../../public/assets/Exclude.png";
function Banner() {
  return (
    <>
      <div className="w-full h-[70px] flex items-center justify-center">
        <Image src={BannerLogo} height={55} quality={100} />
      </div>
    </>
  );
}

export default Banner;
