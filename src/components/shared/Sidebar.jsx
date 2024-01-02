import React from "react";
import Chats from "../chat/Chats";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = ({ setActiveChat }) => {
  return (
    <div className=" flex-initial w-4/12 bg-sky-900 relative ">
      <Navbar />
      <Search />
      <Chats setActiveChat={setActiveChat} />
    </div>
  );
};

export default Sidebar;
