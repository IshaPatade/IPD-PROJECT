import { HashLink as Link } from "react-router-hash-link";
import "./HeroSection.css";
import React, { useState, useEffect } from "react";

import { useLogin } from "../../hooks/useLogin";

{
  /* <section className="py-10">
  <div className="2xl:container mx-auto">
    <div className="w-[90%] mx-auto grid grid-cols-1">

    </div>
  </div>
</section> */
}

const HeroSection = () => {
  const [emailSignIn, setEmailSignIn] = useState();
  const [passwordSignIn, setPasswordSignIn] = useState();

  const { login, errorLogin, isLoadingLogin } = useLogin();
  const handleSignin = async (e) => {
    console.log("trying loogen in");
    await login(emailSignIn, passwordSignIn);
    console.log("loogen in");
  };
  return (
    <>
      <section className="bg-[#2C003E]">
        <div className="2xl:container mx-auto flex " style={{ margin: "0px" }}>
          <div className="w-[40%] mx-auto h-screen text-center grid grid-cols-1">
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
          <div className="w-[40%] mx-auto h-screen text-center grid grid-cols-1">
            <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
              {/* <header>
                <img
                  class="w-20 mx-auto mb-5"
                  src="https://img.icons8.com/fluent/344/year-of-tiger.png"
                />
              </header> */}

              <div>
                <label class="block mb-2 text-purple-500" for="username">
                  Username
                </label>
                <input
                  class="w-full p-2 mb-6 text-purple-700 border-b-2 border-purple-500 outline-none "
                  type="email"
                  placeholder="Email"
                  value={emailSignIn}
                  onChange={(e) => setEmailSignIn(e.target.value)}
                />
              </div>
              <div>
                <label class="block mb-2 text-purple-500" for="password">
                  Password
                </label>
                <input
                  class="w-full p-2 mb-6 text-purple-700 border-b-2 border-purple-500 outline-none "
                  type="password"
                  placeholder="Password"
                  value={passwordSignIn}
                  onChange={(e) => setPasswordSignIn(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label class="block mb-2 text-purple-500">Role:</label>
                <select
                  id="role"
                  name="role"
                  class="block appearance-none w-full bg-purple-200 border border-gray-200 text-gray-700 py-1 px-1 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="manufacturer">Manufacturer</option>
                  <option value="distributor">Distributor</option>
                  <option value="retailer">Retailer</option>
                </select>
              </div>
              <div>
                <button
                  className="w-full bg-purple-900 hover:bg-purple-700 text-white
                    font-bold py-2 px-4 mb-6 rounded"
                  onClick={handleSignin}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
