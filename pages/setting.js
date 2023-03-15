import Card from "../components/Setting/Card";
import Card2 from "../components/Setting/Card2";
import Card3 from "../components/Setting/Card3";
import Sidebar from "../components/Sidebar";

function setting() {
  return (
    <>
      <div className="flex">
        <div className="h-[100vh]">
          {/*Left DIV */}
          <Sidebar />
        </div>
        <div className="w-full">
          {/*Right Div*/}
          <div>
            {/*Top Div */}
            <Card />
          </div>
          <div className="border-4 border-black flex flex-col items-center justify-center ">
            {/*Center Div */}
            <div className="flex flex-col item-center justify-center w-[70%] shadow-[-10px_1px_20px_15px_rgba(0,0,0,0.1)]">
              <Card2 />
              <Card3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default setting;
