import React from "react";

export const ChannelItem = ({
  name,
  active,
}: {
  name: string;
  active: boolean;
}) => {
  return (
    <div
      className={`mb-2 p-1 ${
        active ? "bg-neutral-800" : ""
      } hover:bg-neutral-800 rounded-lg cursor-pointer`}
    >
      <p className={`${active ? "text-neutral-200" : "text-neutral-500"}`}>
        <span className="text-xl font-bold mr-0.5">#</span>
        {name}
      </p>
    </div>
  );
};
