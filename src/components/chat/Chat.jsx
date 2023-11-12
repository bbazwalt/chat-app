import React, { useContext } from "react";
import Messages from "../message/Messages";
import Input from "./Input";
import { ChatContext } from "../../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className=" flex-auto">
      <div className=" h-12 bg-slate-600 flex items-center justify-between p-2 text-gray-400 ">
        <span>{data.user?.displayName}</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
