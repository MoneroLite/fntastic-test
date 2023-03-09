import React from "react";
import { ChannelItem } from "./ChannelItem/ChannelItem";

export const ChannelList = () => {
  const data = [
    {
      group: "Support",
      channels: [
        { id: 1, name: "Информация", active: false },
        { id: 2, name: "Главная", active: true },
        { id: 3, name: "Новости", active: false },
      ],
    },
    {
      group: "Main",
      channels: [
        { id: 4, name: "Игры", active: false },
        { id: 5, name: "Спорт", active: false },
      ],
    },
  ];
  return (
    <div className="p-2">
      {data.map((items) => (
        <div className="mb-4" key={items.group}>
          <p className="text-neutral-300 font-bold mb-2">{items.group}</p>
          {items.channels.map((channel) => (
            <ChannelItem
              key={channel.id}
              active={channel.active}
              name={channel.name}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
