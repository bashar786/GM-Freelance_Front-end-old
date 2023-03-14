import Footer from "../components/Footer";
import Banner from "../components/Landing/Banner";
import Body from "../components/Landing/Body";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <Banner />
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
}
