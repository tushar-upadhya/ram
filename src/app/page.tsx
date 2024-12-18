import { SignInButton, SignOutButton } from "@clerk/nextjs";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="">
      <SignInButton />
      <SignOutButton />
    </div>
  );
};

export default Home;
