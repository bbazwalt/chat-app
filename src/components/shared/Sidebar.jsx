import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "../chat/Chats";

const Sidebar = () => {
  return (
    <div className=" flex-initial w-4/12 bg-sky-900 relative ">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
