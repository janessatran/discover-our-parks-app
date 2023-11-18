import { Router } from "@vaadin/router";
let outlet = undefined;
let router = undefined;
const configureRouter = (outletEl) => {
    outlet = outletEl;
    router = new Router(outlet);
    router.setRoutes([
        { path: "/", component: "main-layout" },
        {
            path: "/parks-map",
            component: "parks-map",
            animate: true,
        },
        { path: "(.*)", redirect: "/" },
    ]);
};
export { router, configureRouter };
