import { Types } from "../types/types";
export const initialDrawer = {
    show:true
}

export const DrawerReducer = (state, action) => {
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