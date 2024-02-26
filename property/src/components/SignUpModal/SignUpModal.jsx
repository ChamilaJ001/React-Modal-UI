import { Link } from "react-router-dom";
import { FaGoogle, FaRegCircleCheck } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import Input from "../Input/Input";
import { Checkbox, Divider } from "@nextui-org/react";

/* eslint-disable react/prop-types */
const SignUpModal = ({ setSignInOrUp }) => {
  return (
    <div className="flex gap-20 ">
      <div className="w-full">
        <h2 className="font-bold text-3xl">Join Finder.</h2>
        <h2 className="font-bold text-3xl">Get premium benefits:</h2>

        <div className="mt-10">
          <div className="flex items-center gap-2">
            <FaRegCircleCheck className="text-primary" />
            <p className="text-gray-600 text-[17px]">
              Add and promote your listings
            </p>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <FaRegCircleCheck className="text-primary" />
            <p className="text-gray-600 text-[17px]">
              Easily manage your wishlist
            </p>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <FaRegCircleCheck className="text-primary" />
            <p className="text-gray-600 text-[17px]">Leave reviews</p>
          </div>
        </div>

        <img src="/img/signup.svg" alt="" className="mt-10 w-96" />

        <h6 className="text-gray-600 text-[17px] mt-10">
          Do not have an account?{" "}
          <Link
            className="text-primary underline"
            onClick={() => setSignInOrUp(true)}
          >
            Sign in
          </Link>
        </h6>
      </div>

      <div className="border-r"></div>

      <div className="w-full">
        <Link
          to={""}
          className="text-center justify-center flex items-center gap-1 text-[#3c76f2] border-1 border-[#3c76f2] py-3 px-5 font-bold rounded-lg hover:bg-[#3c76f2] hover:text-white ease-in-out duration-300"
        >
          <FaGoogle />
          Sign in with Google
        </Link>

        <Link
          to={""}
          className="mt-3 text-center justify-center flex items-center gap-1 text-[#3c76f2] border-1 border-[#3c76f2] py-3 px-5 font-bold rounded-lg hover:bg-[#3c76f2] hover:text-white ease-in-out duration-300"
        >
          <RiFacebookFill className="text-xl" />
          Sign in with Facebook
        </Link>

        <div className="flex items-center justify-start gap-3 mt-10 text-gray-600">
          <Divider className="my-2 w-48" />
          Or
          <Divider className="my-2 w-48" />
        </div>

        <div className="mt-10">
          <Input placeholder={"Enter your full name"} label={"Full Name"} />
        </div>

        <div className="mt-5">
          <Input placeholder={"Enter your email"} label={"Email address"} />
        </div>

        <div className="flex items-center gap-1 mt-5">
          <label htmlFor="password" className="text-md">
            Password
          </label>
          <p className="text-gray-400">min.8 char</p>
        </div>

        <Input placeholder={"Enter your password"} type={"password"} />

        <div className="mt-5">
          <Input
            placeholder={"Confirm your password"}
            type={"password"}
            label={"Confirm password"}
          />
        </div>

        <div className="flex mt-5 items-center ">
          <Checkbox classNames="text-sm">
            <p className="text-gray-600">
              By joining, I agree to the{" "}
              <Link to={""} className="text-primary underline">
                Terms of use
              </Link>{" "}
              and{" "}
              <Link to={""} className="text-primary underline">
                Privacy policy
              </Link>
            </p>
          </Checkbox>
        </div>

        <button
          href="#"
          className="text-center text-lg justify-center mt-5 w-full text-white font-semibold hover:shadow-sm hover:shadow-primary bg-primary flex items-center p-4 rounded-lg ease-in-out duration-300"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
