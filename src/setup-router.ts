import { Router } from "@vaadin/router";

let outlet: any = undefined;
let router: Router | undefined = undefined;

const configureRouter = (outletEl: Element) => {
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
