import React from "react";
import avatar from "../../../assets/avatar.png";

interface IMessage {
  id: number;
  name: string;
  message: string;
  date: string;
}

export const Message = (props: IMessage) => {
  return (
    <div className="h-14 flex mb-3">
      <div className="bg-gray-700 mr-3 rounded-full">
        <img className="h-full rounded-full" src={avatar} alt="" />
      </div>
      <div className="">
        <p className=" text-emerald-700">
          {props.name}
          <span className="text-neutral-400 text-sm"> {props.date}</span>
        </p>
        <p className="text-neutral-200 text-lg">{props.message}</p>
      </div>
    </div>
  );
};
