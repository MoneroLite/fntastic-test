import React, { useState } from "react";
import avatarmock from "../../assets/avatar.png";
import microphone from "../../assets/microphone.svg";
import headphones from "../../assets/headphones.svg";
import settings from "../../assets/settings.svg";

export const Profile = () => {
  const [microph, setMicroph] = useState(false);
  const [headph, setheadph] = useState(false);
  return (
    <div className="flex items-center justify-between px-1 pt-1.5">
      <div className="flex items-center mb-2">
        <div className="bg-gray-700 mr-3 w-12 relative rounded-full">
          <img className="w-full rounded-full" src={avatarmock} alt="" />
          <div className="w-4 h-4 bg-red-800 rounded-full absolute right-0.5 bottom-0.5 border-2 border-gray-700"></div>
        </div>
        <div className="">
          <p className="text-base font-bold text-neutral-100">Monero</p>
          <p className="text-sm text-neutral-400">#3232</p>
        </div>
      </div>
      <div className="flex w-2/5 justify-around">
        <div
          onClick={() => setMicroph(!microph)}
          className={`rounded-md  ${!microph && "border border-red-800"} `}
        >
          <img
            className="w-6 hover:bg-neutral-500 rounded-md cursor-pointer"
            src={microphone}
          />
        </div>
        <div
          onClick={() => setheadph(!headph)}
          className={`rounded-md  ${!headph && "border border-red-800"} `}
        >
          <img
            className="w-6 hover:bg-neutral-500 rounded-md cursor-pointer"
            src={headphones}
          />
        </div>
        <img
          onClick={() => alert("Настройки пользователя")}
          className="w-6 hover:bg-neutral-500 rounded-md cursor-pointer"
          src={settings}
        />
      </div>
    </div>
  );
};
