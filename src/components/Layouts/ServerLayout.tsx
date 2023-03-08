import React from "react";
import "./serverLayout.scss";

export const ServerLayout = () => {
  return (
    <div className="flex h-full max-h-full">
      <div className="w-1/5 h-full">
        <div className="h-12 bg-gray-600">server header</div>
        <div className="h-auto channel__list">chnl list</div>
        <div className="h-16 bg-gray-600">user info</div>
      </div>
      <div className="w-full">
        <div className="w-full h-12 bg-slate-300">chat header</div>
        <div className="flex wrap__chat">
          <div className="w-full bg-slate-700">chat</div>
          <div className="w-1/5 bg-slate-500">user list</div>
        </div>
      </div>
    </div>
  );
};
