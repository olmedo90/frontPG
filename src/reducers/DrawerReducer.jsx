import { Types } from "../types/types";
export const initialDrawer = {
    show:true
}

export const DrawerReducer = (state, action) => {
    console.log("🚀 ~ file: DrawerReducer.jsx:7 ~ DrawerReducer ~ state:", state)
    console.log("🚀 ~ file: DrawerReducer.jsx:7 ~ DrawerReducer ~ action:", action)
    const {payload}=action;
    const {show}=state;
    switch (action.type) {
        case Types.Drawer.SHOW_DRAWER:
            
            return{
                show:!show
            }
    
        default:
            break;
    }
}