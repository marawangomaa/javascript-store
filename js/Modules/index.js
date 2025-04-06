import CartLogic from "./CartLogic.js";

export default function InitialScripts(path) {
  if (path === "/home") {
    import("./slider.js").then((module) => module.default());
  }
  if(path === "/register"){
    import("./register.js").then((module) => module.default());
  }
  if(path === "/login"){
    import("./login.js").then((module) => module.default());
  }
  if(path === "/profile"){
    import("./checkStatus.js").then((module) => module.default());
    import("./logout.js").then((module) => module.default());
  }

  if (path === "/cart") {
    import("./checkOut.js").then((module) => module.default());
  }
  
  if (path === "/features") {
    import("./checkOut.js").then((module) => module.default());
  }

  import("./search.js").then((module) => module.default());

  CartLogic();
}
