import React, { Dispatch, SetStateAction } from "react";
import bell from "../../assets/bell.svg";
import users from "../../assets/users.svg";

interface IHeaderChat {
  userList: boolean;
  setUserList: Dispatch<SetStateAction<boolean>>;
}

export const HeaderChat = ({ userList, setUserList }: IHeaderChat) => {
  return (
    <div className="flex justify-between items-center pt-2 px-4">
      <div className="text-neutral-300 font-bold">
        <span className="text-xl">#</span>Главная
      </div>
      <div className="flex items-center">
        <img
          onClick={() => alert("Уведомления")}
          className="w-7 cursor-pointer"
          src={bell}
          alt=""
        />
        <img
          onClick={() => setUserList(!userList)}
          className="w-7 ml-3 cursor-pointer"
          src={users}
          alt=""
        />
        <input
          className="rounded-md ml-3 bg-neutral-600 px-0.5 text-neutral-200"
          type="text"
          placeholder="Поиск"
        />
      </div>
    </div>
  );
};
