
import {  useReducer } from 'react'
import { DrawerReducer, initialDrawer } from '../reducers/DrawerReducer';
import { initState, LoginReducer } from '../reducers/LoginReducer';
import { LoginContext, DrawerContext} from './ProyectContexts';




export const ProyectContextProvider = ({ children }) => {
   const [user, userDispatch]= useReducer(LoginReducer, initState);
   const [showDrawer, showDrawerDispatch]= useReducer(DrawerReducer, initialDrawer);
   return (
    <LoginContext.Provider value={{user, userDispatch}}>
      <DrawerContext.Provider value={{showDrawer, showDrawerDispatch}}>
         {children}
      </DrawerContext.Provider>
   </LoginContext.Provider>
   )
}
