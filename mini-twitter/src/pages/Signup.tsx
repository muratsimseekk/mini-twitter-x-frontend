import image1 from "../assets/sign-up.png";
import { FaApple, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdCopyright } from "react-icons/md";

import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [popup, setPopup] = useState(false);

  return (
    <div className="w-full  h-[100vh] flex flex-col">
      <div className={"h-[95vh] flex items-center"}>
        <div className="w-[55%] h-full bg-yellow-100">
          <img src={image1} className="w-full h-full" />
        </div>
        {!popup ? (
          <div className="w-[45%]  flex flex-col gap-8 pl-14 ">
            <div>
              <FaTwitter color={"#1DA1F2"} size={"45px"} />
            </div>
            <h2 className="text-6xl font-bold tracking-wide">Happening Now</h2>
            <h3 className="text-4xl font-bold tracking-wide">
              Join Twitter today
            </h3>
            <div className="w-full flex flex-col gap-4">
              <button className="flex items-center justify-center w-[60%] gap-2 border  py-2.5 rounded-2xl">
                <FcGoogle size={"25px"} />
                <p>Sign up with Google</p>
              </button>

              <button className="flex items-center gap-2 border justify-center w-[60%] py-2.5 rounded-2xl">
                <FaApple size={"25px"} />
                <p>Sign up with Apple</p>
              </button>

              <button
                onClick={() => setPopup(true)}
                className="flex items-center gap-2 border justify-center w-[60%] py-2.5 rounded-2xl"
              >
                <p>Sign up with phone or e-mail</p>
              </button>
            </div>
            <p className=" w-[80%] text-sm">
              By signing up you agree to{" "}
              <span className="text-blue-400">Terms of Service</span> and{" "}
              <span className={"text-blue-400"}>Privacy Policy</span>,including{" "}
              <span className={"text-blue-400"}>Cookie Use</span>.
            </p>
            <div className="flex gap-2">
              <p>Already have account ? </p>
              <Link to={"/login"}>
                <p className="text-[#1DA1F2] hover:cursor-pointer hover:underline">
                  Log in
                </p>
              </Link>
            </div>
          </div>
        ) : (
          <div className={"w-[45%] flex flex-col "}>
            <FaTwitter color={"#1DA1F2"} size={"45px"} />
            <h2>Create an Account</h2>
            <form>
              <input placeholder={"Name"} />
            </form>
          </div>
        )}
      </div>
      <div className={"h-[5vh] flex justify-center items-center"}>
        <div className="flex text-[10px]  gap-2.5 ">
          <p className={"hover:underline hover:cursor-pointer"}>About</p>
          <p className={"hover:underline hover:cursor-pointer"}>Help Center</p>
          <p className={"hover:underline hover:cursor-pointer"}>
            Terms of Service
          </p>
          <p className={"hover:underline hover:cursor-pointer"}>
            Privacy Policy
          </p>
          <p className={"hover:underline hover:cursor-pointer"}>
            Cookie Policy
          </p>
          <p className={"hover:underline hover:cursor-pointer"}>Ads Info</p>
          <p className={"hover:underline hover:cursor-pointer"}>Blog</p>
          <p className={"hover:underline hover:cursor-pointer"}>Status</p>
          <p className={"hover:underline hover:cursor-pointer"}>Carres</p>
          <p className={"hover:underline hover:cursor-pointer"}>
            Brand Resources
          </p>
          <p className={"hover:underline hover:cursor-pointer"}>Advertising</p>
          <p className={"hover:underline hover:cursor-pointer"}>Marketing</p>
          <p className={"hover:underline hover:cursor-pointer"}>
            Twitter for Business{" "}
          </p>
          <p className={"hover:underline hover:cursor-pointer"}>Developers</p>
          <p className={"hover:underline hover:cursor-pointer"}>Directory</p>
          <p className={"hover:underline hover:cursor-pointer"}>Settings</p>
          <div
            className={
              "flex items-center gap-1 hover:underline hover:cursor-pointer"
            }
          >
            <MdCopyright />
            <p>2021 Twitter,Inc</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
