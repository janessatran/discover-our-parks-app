import { Router } from "@vaadin/router";

let outlet: any = undefined;
let router: Router | undefined = undefined;

const configureRouter = (outletEl: Element) => {
  outlet = outletEl;
  router = new Router(outlet);

  router.setRoutes([
    { path: "/discover-our-parks-app/", component: "main-layout" },
    {
      path: "/discover-our-parks-app/parks-map",
      component: "parks-map",
      animate: true,
    },
    { path: "(.*)", redirect: "/discover-our-parks-app/" },
  ]);
};

export { router, configureRouter };
