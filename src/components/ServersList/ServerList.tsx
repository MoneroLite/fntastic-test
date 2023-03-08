import React from "react";
import { ServerItem } from "./ServerItem/ServerItem";

const servers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export const ServerList = () => {
  return (
    <div className="w-full py-3">
      {servers.map((item) => (
        <ServerItem key={item.id} />
      ))}
    </div>
  );
};
