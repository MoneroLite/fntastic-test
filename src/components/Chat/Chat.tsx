import React from "react";
import { Message } from "./Message/Message";

export const Chat = () => {
  const data = [
    {
      id: 1,
      name: "John",
      message: "Hello",
      date: "09.03.23",
    },
    {
      id: 2,
      name: "Peter",
      message: "Hello my name is Peter",
      date: "09.03.23",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between px-4">
      <div className="h-full pt-2 overflow-y-scroll">
        {data.map((item) => (
          <Message key={item.id} {...item} />
        ))}
      </div>
      <div className="h-16">
        <input
          className="w-full h-9 bg-neutral-700 text-neutral-200 px-2 rounded-md"
          type="text"
          placeholder="Введите сообщение"
        />
      </div>
    </div>
  );
};
