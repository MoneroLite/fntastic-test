import React from "react";
import avatarmock from "../../../assets/avatar.png";

interface IUserItem {
  avatar: string;
  name: string;
  description?: string;
  isBot: boolean;
  status: string;
}

const UserItem = (props: IUserItem) => {
  return (
    <div className="flex items-center">
      <div className="bg-gray-700 mr-3 w-12 relative rounded-full">
        <img className="w-full rounded-full" src={avatarmock} alt="" />
        <div className="w-4 h-4 bg-red-800 rounded-full absolute right-0.5 bottom-0.5 border-2 border-gray-700"></div>
      </div>
      <div className="">
        <p className="text-base font-bold text-emerald-700">
          {props.name}
          {props.isBot && (
            <span className="bg-sky-700 rounded-md text-sm ml-1 text-white p-0.5">
              BOT
            </span>
          )}
        </p>
        {props.description ? (
          <p className="text-sm text-slate-700">{props.description}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UserItem;
