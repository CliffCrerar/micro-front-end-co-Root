import { registerApplication, start } from "single-spa";
// import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";


// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

const navBarApp = '@micro-front-end-co/navbar'
registerApplication({
  name: navBarApp,
  app: () => System.import(navBarApp),
  activeWhen: isActive.nav,
  customProps: { domElement: document.getElementById('nav-container') }
});


registerApplication({
  name: "@micro-front-end-co/page-one",
  app: () => System.import("@micro-front-end-co/page-one"),
  activeWhen: isActive.pageOne,
  customProps: { domElement: document.getElementById('page-onne-container') }
});

registerApplication({
  name: "@micro-front-end-co/page-two",
  app: () => System.import("@micro-front-end-co/page-two"),
  activeWhen: isActive.pageTwo,
  customProps: { domElement: document.getElementById('page-two-container') }
});

// start({
//   urlRerouteOnly: true,
// });

start();