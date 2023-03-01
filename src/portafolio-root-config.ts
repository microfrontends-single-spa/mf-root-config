import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication(
  {
    name: "@portafolio/mf-menu",
    app: () => System.import<LifeCycles>("@portafolio/mf-menu"),
    activeWhen: ["/"]
  }
);

registerApplication(
  {
    name: "@portafolio/mf-header",
    app: () => System.import<LifeCycles>("@portafolio/mf-header"),
    activeWhen: ["/"]
  }
);

registerApplication(
  {
    name: "@portafolio/mf-advertising",
    app: () => System.import<LifeCycles>("@portafolio/mf-advertising"),
    activeWhen: ["/advertising"]
  }
);

registerApplication(
  {
    name: "@portafolio/mf-whatsapp",
    app: () => System.import<LifeCycles>("@portafolio/mf-whatsapp"),
    //activeWhen: ["/mf-whatsapp", "/mf-advertising"]
    //activeWhen: ["/mf-whatsapp"]
    activeWhen: ["/whatsapp"]
  }
);

/*registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});*/

// registerApplication({
//   name: "@portafolio/navbar",
//   app: () => System.import("@portafolio/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
