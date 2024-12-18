import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="">
      <SignedOut>
        <SignUpButton />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default Home;
