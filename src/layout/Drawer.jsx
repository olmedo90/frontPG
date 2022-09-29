import { useState } from "react";
import { Link } from "react-router-dom";

import './drawer.css';
export const Drawer = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Plan De Cuentas", src: `bi-journal-text` },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
      <div
        className={` ${open ? "w-drawer-open p-drawer " : "w-drawer-close "
          } bg-dark-purple h-screen   relative`}
      >
        <img
          src="/assets/control.png"
          className={` absolute cursor-pointer -right-3  rotate-drawer 
             ${!open && "rotate-drawer-close "}`}
          onClick={() => setOpen(!open)}
          alt="alt"
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/assets/logo.png"
            className={`cursor-pointer  ${!open && "pt-8 "} `}
            alt="alt"
          />
          <h1
            className={`text-white text-xl  ${!open && "hidden-drawer"}`}
          >
            users
          </h1>
        </div>
        <ul className="p-drawer">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-1 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2 "} ${index === 0 && "bg-light-white"
                } `}
            >
              <i className={`bi ${Menu.src} icon-drawer wh-icon`} style={{ fontSize: 20 }}></i>
              {/* <span className={`${!open && "hidden-drawer"} origin-left `}>
                {Menu.title}
              </span> */}
              <Link to={`/${Menu.title}`} >{Menu.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      
  );
};

