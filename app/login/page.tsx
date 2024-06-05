"use server";

import AuthBody from "./_components/body-auth";

const AuthPage = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <AuthBody />
      </div>
    </div>
  );
};

export default AuthPage;
