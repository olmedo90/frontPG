import { useContext } from "react";
import { Link } from "react-router-dom";
import { DrawerContext, LoginContext } from "../../ContextProyect/ProyectContexts";
import { Types } from "../../types/types";
import { MenuDrawer } from "../../utils/MenuDrawer";
import "./drawer.css";
import { Icon } from '../../utils/Icon';
export const Drawer = () => {
  const { user } = useContext(LoginContext);
  const {showDrawer, showDrawerDispatch}=useContext(DrawerContext);
  const {show}=showDrawer;
  const setShowDrawer =()=>{
    showDrawerDispatch({type:Types.Drawer.SHOW_DRAWER, payload:showDrawer})
  }
  
  return (
    <div
      className={` relative ${
        show ? "w-drawer-open p-drawer " : "w-drawer-close "
      } bgDrawer  `}
    >
      <img
        src="/assets/control.png"
        className={` absolute cursor-pointer right-3  rotate-drawer 
             ${!show && "rotate-drawer-close "}`}
        onClick={() => setShowDrawer()}
        alt="alt"
      />
      <div className="flex  nameUser-content ">
        <p
          className={`userName fw-semibold fs-6 text-center pt-4 ${!show && "visually-hidden"} `}
        >{user.firstName} <br /> {user.lastName} </p>

        <h1 className={`text-white text-xl  ${!show && "hidden-drawer"}`}>
          {/* {user.name} */}
        </h1>
      </div>
      <section className="my-5 ">
        <ul className={` ul-nav ${!show && "ul-nav-close "}`}>
          {MenuDrawer.menus.map((Menu, index) => (
            <li
              key={index}
              title={Menu.title}
              className={`${
                show
                  ? "ul-nav-li"
                  : "ul-nav-li-close  cursor-pointer"
              } ${Menu.gap && "mt-3"}`}
            >
              <Link
                to={`${Menu.routes}`}
                className={`${!show && "link-drawer"} `}
              >
                {!show&& <Icon style="iconDrawer" iconName={Menu.icon}/>}
                {show &&  <><Icon style="iconDrawer" iconName={Menu.icon}/> {Menu.title}</>}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
