import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuDrawer } from "../utils/MenuDrawer";
import './drawer.css';
import { TextAfter } from "./TextAfter";
export const Drawer = () => {
  const [open, setOpen] = useState(true);


  return (
    <div
      className={` ${open ? "w-drawer-open p-drawer " : "w-drawer-close "
        } bg-dark-purple h-screen   relative `}
    >
      <img
        src="/assets/control.png"
        className={` absolute cursor-pointer -right-3  rotate-drawer 
             ${!open && "rotate-drawer-close "}`}
        onClick={() => setOpen(!open)}
        alt="alt"
      />
      <div className="flex gap-x-4 jst-content ">
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
      <section className='p-drawer'>
        {MenuDrawer.menus.map((Menu, index) => (
          <nav key={index}
            className={`cursor-pointer ul-nav 
              ${Menu.gap ? "mt-9" : "mt-2 "}  ${!open && 'icons-close '}`}>
              {/* <TextAfter gap={Menu.gap} srcs={Menu.src} titles={Menu.title} open={open} /> */}

            <Link to={Menu.gap ? `/${Menu.routes}` : `${Menu.routes}`} className={`${!open && "hidden-drawer "} ul-nav-li `} >
            <TextAfter gap={Menu.gap} srcs={Menu.src} titles={Menu.title} open={open} />
              {Menu.title}
            </Link>
          </nav>
        ))}
      </section>
    </div>
  );
};

