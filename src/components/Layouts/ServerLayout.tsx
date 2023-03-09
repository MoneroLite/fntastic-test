import React, { useState } from "react";
import { Profile, UsersList, HeaderChat, ChannelList, Chat } from "../index";
import "./serverLayout.scss";

export const ServerLayout = () => {
  const [usersSidebar, setUsersSidebar] = useState(true);
  return (
    <div className="flex h-full max-h-full">
      <div className="w-1/5 h-full">
        <div className="h-12 bg-neutral-700 border-b border-r border-neutral-800">
          <p className="font-bold text-neutral-100 p-2">Cупер сервер</p>
        </div>
        <div className="bg-neutral-700 channel__list overflow-y-scroll">
          <ChannelList />
        </div>
        <div className="h-16 bg-neutral-700 border-t border-neutral-800">
          <Profile />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-12 bg-neutral-700">
          <HeaderChat userList={usersSidebar} setUserList={setUsersSidebar} />
        </div>
        <div className="flex wrap__chat">
          <div className="w-full bg-neutral-600">
            <Chat />
          </div>
          {usersSidebar && (
            <div className="w-1/5 bg-neutral-800 overflow-y-scroll">
              <UsersList />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
