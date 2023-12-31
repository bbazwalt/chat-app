import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../config/firebase";

const Chats = ({ setActiveChat }) => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div onClick={() => {
      setActiveChat(true);
    }}>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className=" p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-sky-900"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              className="w-12 h-12 rounded-full object-cover	"
              src={chat[1].userInfo.photoURL}
              alt=""
            />
            <div>
              <span className="text-lg font-medium">
                {chat[1].userInfo.displayName}
              </span>
              <p className="text-sm">{chat[1].lastMessage?.text}</p>
              <p className=" text-xs">
                {chat[1].date?.toDate().toLocaleString("en-US")}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
