import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@micro-front-end-co/navbar",
//   app: () => System.import("@micro-front-end-co/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
