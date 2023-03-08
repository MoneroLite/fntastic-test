import React from "react";
import { FaDiscord } from "react-icons/fa";

export const ServerItem = () => {
  return (
    <FaDiscord
      className="p-1 cursor-pointer mb-3 bg-lime-700 mx-auto rounded-full transition-all hover:rounded-xl hover:bg-lime-600"
      color="white"
      size={52}
    />
  );
};
