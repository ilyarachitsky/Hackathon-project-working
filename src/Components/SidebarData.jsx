import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Map",
    path: "/map",
    icon: <BiIcons.BiMap />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdContact />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
