import React from "react";
import { ServerList } from "../index";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className="flex w-screen h-screen">
      <div className="h-full w-20 bg-neutral-800">
        <ServerList />
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};
