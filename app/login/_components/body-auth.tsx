"use client";

import { useState } from "react";
import Login from "./login";
import Register from "./register";
import Image from "next/image";
import uniforLogo from "../../../public/uniforlogo.svg";
import { useRouter } from "next/navigation";

const AuthBody = () => {
  const router = useRouter();
  const [count, setCount] = useState<number>(0);
  const [component, setComponent] = useState<boolean>(true);
  const [animation, setAnimation] = useState(
    "animate__animated animate__fadeInLeft"
  );

  const handleChangeAnimation = () => {
    if (count === 0) {
      setAnimation("animate__animated animate__fadeIn");
      setCount(1);
    }
    setAnimation("animate__animated animate__fadeOutRight");

    setTimeout(() => {
      setAnimation("animate__animated animate__fadeInLeft");
      setComponent(!component);
    }, 300);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="w-full max-h-screen overflow-hidden">
      <div className="w-full flex flex-col items-center gap-5">
        <div
          className="flex text-center gap-3 items-center hover:cursor-pointer"
          onClick={handleLogoClick}
        >
          <Image src={uniforLogo} alt="Unifor Logo" width={42} height={42} />
          <p className="h-fit text-[#044CF4] font-bold text-2xl">
            UNIFOR EVENTS
          </p>
        </div>
        <div className="w-3/12 self-center">
          {component ? (
            <Login
              animation={animation}
              changeAnimation={handleChangeAnimation}
            />
          ) : (
            <Register
              animation={animation}
              changeAnimation={handleChangeAnimation}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthBody;
