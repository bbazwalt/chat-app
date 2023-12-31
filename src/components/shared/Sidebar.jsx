import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "../chat/Chats";

const Sidebar = ({setActiveChat}) => {
  return (
    <div className=" flex-initial w-4/12 bg-sky-900 relative ">
      <Navbar />
      <Search />
      <Chats setActiveChat={setActiveChat} />
    </div>
  );
};

export default Sidebar;
