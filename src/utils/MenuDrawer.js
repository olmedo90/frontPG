export const MenuDrawer = {
    menus: [
        { routes: 'dashboard', title: "Dashboard", src: "bi-graph-up-arrow" },
        { routes: 'inventarios', title: "Inbox", src: "bi-telegram" },
        { routes: 'plancuentas', title: "Contabilidad", src: `plandecuentas`, gap: true },
        { routes: 'inventarios', title: "Schedule ", src: "bi-calendar" },
        { routes: 'inventarios', title: "Search", src: "bi-search" },
        { routes: 'inventarios', title: "Analytics", src: "bi-clipboard2-data-fill" },
        { routes: 'inventarios', title: "C. Inventario", src: "inventario", gap: true },
        { routes: 'inventarios/createItems', title: "Crear Items", src: "bi-clipboard2-plus-fill" },
        { routes: 'inventarios', title: "Files ", src: "Folder", gap: true },
        { routes: 'inventarios', title: "", src: "bi-gear" },
    ],
}