import { faChartColumn, faCalculator } from "@fortawesome/free-solid-svg-icons";
export const MenuDrawer = {
  menus: [
    { routes: "/dashboard", 
      title: "Panel de control", 
      icon: faChartColumn  

    },

    {
      routes: "accounting",
      title: "Contabilidad",
      icon:faCalculator,
      gap: true,
    },
  ],
};
