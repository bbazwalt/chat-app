import React from "react";
import Sidebar from "../components/shared/Sidebar";
import Chat from "../components/chat/Chat";

const Home = () => {
  return (
    <div className=" flex bg-sky-600	h-screen items-center justify-center">
      <div className="mx-8 flex rounded-xl	w-11/12 h-full	overflow-hidden	">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
