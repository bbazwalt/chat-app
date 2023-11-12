import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className=" flex items-center bg-sky-950 h-12 p-2 justify-between text-sky-100">
      <span className=" custom-navbar-logo font-bold">Chat App</span>
      <div className=" flex gap-2 ">
        <img
          className=" h-6 w-6 rounded-full object-cover"
          src={currentUser.photoURL}
          alt=""
        />
        <span className="text-white">{currentUser.displayName}</span>
        <button
          className="rounded-xl w-20 custom-navbar-button bg-sky-700 text-sky-50 border-none cursor-pointer"
          onClick={() => signOut(auth)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
