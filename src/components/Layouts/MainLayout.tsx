import React from "react";
import styles from "./layout.module.scss";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className="flex w-screen h-screen">
      <div className="h-full w-20 bg-slate-700">sdsd</div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};
