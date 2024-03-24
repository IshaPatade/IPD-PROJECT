import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };
  return (
    <>
      <section className="">
        <Header />
        <section className="bg-[#2C003E]">
          <div
            className="2xl:container mx-auto flex "
            style={{ margin: "0px" }}
          >
            <div className="w-[70%] mx-auto h-screen text-center grid grid-cols-1">
              <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="heading text-white">
                  Tracking Pharmaceutical Products using Blockchain
                </h1>

                {/* <Link to="#Home">
                <button className="bg-white text-black font-[poppins] py-3 px-5 rounded-md">
                  Get Started
                </button>
              </Link> */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
