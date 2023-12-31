import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import Input from "../message/Input";
import Messages from "../message/Messages";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <>
      {data && (
        <div className=" flex-auto">
          <div className=" h-12 bg-slate-600 flex items-center justify-between p-2 text-gray-400 ">
            <span>{data.user?.displayName}</span>
          </div>
          <Messages />
          <Input />
        </div>
      )}
    </>
  );
};

export default Chat;
