import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const owner = message.senderId === currentUser.uid;

  return (
    <div
      ref={ref}
      className={owner ? "flex gap-5 mb-5 flex-row-reverse" : "flex gap-5 mb-5"}
    >
      <div className=" flex flex-col text-gray-400 font-light">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={owner ? currentUser.photoURL : data.user.photoURL}
          alt=""
        />
      </div>
      <div
        className={
          owner
            ? "max-w-[80%] flex flex-col gap-2 items-end"
            : " max-w-[80%] flex flex-col gap-2"
        }
      >
        <span className="time-stamp">
          {message.date?.toDate().toLocaleString("en-US")}
        </span>
        <p
          className={
            owner
              ? "bg-sky-600 text-white px-2.5 py-2.5 rounded-se-none rounded-lg max-w-max "
              : "bg-white px-2.5 py-2.5 rounded-ss-none rounded-lg max-w-max"
          }
        >
          {message.text}
        </p>
        {message.img && <img className="w-2/4" src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
