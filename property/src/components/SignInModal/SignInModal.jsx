import { Modal, ModalContent, ModalBody, Divider } from "@nextui-org/react";

import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import Input from "../Input/Input";
import { useState } from "react";
import SignUpModal from "../SignUpModal/SignUpModal";

/* eslint-disable react/prop-types */
const SignInModal = ({ isOpen, onOpen, onOpenChange }) => {
  const [signInOrUp, setSignInOrUp] = useState(true);
  return (
    <>
      <div className="py-[300px] px-[700px]">
        <button
          onClick={onOpen}
          href="#"
          className="text-white bg-primary justify-center p-4 rounded-md hover:shadow-md hover:shadow-primary ease-in-out duration-300"
        >
          <h4 className="font-semibold">Open Modal</h4>
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        size="5xl"
      >
        <ModalContent>
          <>
            <ModalBody className="p-12 ">
              {signInOrUp ? (
                <div className="flex gap-20 ">
                  <div className="w-full">
                    <h2 className="font-bold text-3xl">Hey there!</h2>
                    <h2 className="font-bold text-3xl">Welcome back.</h2>

                    <img src="/img/signin.svg" alt="" className="mt-10 w-96" />

                    <h6 className="text-gray-600 text-[17px] mt-10">
                      Do not have an account?{" "}
                      <Link
                        className="text-primary underline"
                        onClick={() => setSignInOrUp(false)}
                      >
                        Sign up
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
                      <Input
                        placeholder={"Enter your email"}
                        label={"Email address"}
                      />

                      <div className="flex items-center justify-between mt-5">
                        <label htmlFor="password" className="text-md">
                          Password
                        </label>
                        <Link
                          to={""}
                          className="text-primary text-sm underline font-semibold"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <Input
                        placeholder={"Enter your password"}
                        type={"password"}
                      />

                      {/* <div className="flex py-2 px-1 justify-between">
                      <Checkbox classNames="text-sm">Remember me</Checkbox>
                    </div> */}

                      <button
                        href="#"
                        className="text-center text-lg justify-center mt-5 w-full text-white font-semibold hover:shadow-sm hover:shadow-primary bg-primary flex items-center p-4 rounded-lg ease-in-out duration-300"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <SignUpModal setSignInOrUp={setSignInOrUp} />
              )}
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
