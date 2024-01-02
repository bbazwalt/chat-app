import React, { useState } from "react";
import icon from "../assets/icon.jpg";
import Chat from "../components/chat/Chat";
import Sidebar from "../components/shared/Sidebar";

const Home = () => {
  const [activeChat, setActiveChat] = useState(false);

  return (
    <div className="bg-sky-700 flex h-screen items-center justify-center">
      <div className=" flex w-full h-full	overflow-hidden	">
        <Sidebar setActiveChat={setActiveChat} />
        {!activeChat && <img src={icon} width="1200" alt="" />}
        {activeChat && <Chat />}
      </div>
    </div>
  );
};

export default Home;
