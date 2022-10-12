import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuDrawer } from "../../utils/MenuDrawer";
import './drawer.css';
export const Drawer = () => {
  const [open, setOpen] = useState(true);


  return (
    <div
      className={`drawer ${open ? "w-drawer-open p-drawer " : "w-drawer-close "
        } bg-dark-purple h-screen   relative `}
    >
      <img
        src="/assets/control.png"
        className={` absolute cursor-pointer -right-3  rotate-drawer 
             ${!open && "rotate-drawer-close "}`}
        onClick={() => setOpen(!open)}
        alt="alt"
      />
      <div className="flex  jst-content ">
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
      <section className='p-drawer '>
        <ul className={` ul-nav ${!open && 'ul-nav-close'}`}>
          {
            MenuDrawer.menus.map((Menu, index) => (
              <li key={index}  title={Menu.title}   className={`${open ? 'ul-nav-li' : 'ul-nav-li-close ul-nav-li-sms cursor-pointer'} ${Menu.gap && 'mt-nav-2'}`} >

                <Link to={Menu.gap ? `/${Menu.routes}` : `${Menu.routes}`} className={`${!open && 'link-drawer'} `} >
                  {Menu.gap && <img src={`./assets/${Menu.src}.png`} alt="" className={`${open ? 'wh-icon' : 'wh-icon-close container-img '} `} />
                  }{Menu.gap || <i className={`bi ${Menu.src}  ${open ? 'wh-icon' : 'wh-icon-close '}`} ></i>}
                  {` ${open ? Menu.title : ''} `}

                </Link>

              </li>
            ))
          }
        </ul>

      </section>
    </div>
  );
};

