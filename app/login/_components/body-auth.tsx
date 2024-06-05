"use client";

import { useState } from "react";
import Login from "./login";
import Register from "./register";

const AuthBody = () => {
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

  return (
    <div className="w-full max-h-screen overflow-hidden">
      <div className="w-full flex flex-col items-center gap-3">
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
