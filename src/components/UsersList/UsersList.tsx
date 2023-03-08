import React from "react";
import UserItem from "./UserItem/UserItem";

export const UsersList = () => {
  const data = [
    {
      group: "bots",
      users: [
        {
          id: 1,
          avatar: "",
          name: "dadada",
          description: "играет в ...",
          isBot: true,
          status: "online",
        },
        {
          id: 2,
          avatar: "",
          name: "Frank",
          description: "",
          isBot: true,
          status: "offline",
        },
      ],
    },
    {
      group: "members",
      users: [
        {
          id: 3,
          avatar: "",
          name: "Monero",
          description: "Описание",
          isBot: false,
          status: "online",
        },
        {
          id: 4,
          avatar: "",
          name: "Peter",
          description: "Hi, i`am a Peter",
          isBot: false,
          status: "offline",
        },
      ],
    },
  ];

  return (
    <div>
      {data.map((item) => (
        <div>
          <p>
            {item.group} - <span>{item.users.length}</span>
          </p>
          {item?.users.map((user) => (
            <UserItem {...user} />
          ))}
        </div>
      ))}
    </div>
  );
};
