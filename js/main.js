import Header from "../Pages/Components/header.js";
import Footer from "../Pages/Components/footer.js";
import Navbar from "../Pages/Components/navbar.js";
import HomePage from "../Pages/home.js";
import ShopPage from "../Pages/shop.js";
import FeaturesPage from "../Pages/features.js";
import BlogPage from "../Pages/blog.js";
import PostPage from "../Pages/post.js";
import AboutPage from "../Pages/about.js";
import ContactPage from "../Pages/contact.js";
import CartPage from "../Pages/cart.js";
import RegisterPage from "../Pages/register.js";
import LoginPage from "../Pages/login.js";
import ProfilePage from "../Pages/profile.js";
import ErrorPage from "../Pages/error.js";
import InitialScripts from "./Modules/index.js";

const navbar = document.getElementById("nav");
const header = document.getElementById("header");
const rootElement = document.getElementById("root");
const footer = document.getElementById("footer");

// setup Initial Theme Content
navbar.innerHTML = Navbar();
header.innerHTML = Header();
rootElement.innerHTML = HomePage();
footer.innerHTML = Footer();

function Navigation() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const path = e.currentTarget.getAttribute("href");
      if (!path) return;
      window.location.hash = `#${path}`;
      window.history.pushState({}, "", path);
      Routing();
    });
  });
}

function Routing() {
  let pathname = window.location.hash.replace("#/", "/") || "/home";

  if (pathname === "/" || pathname === "/#" || pathname === "/#/") {
    pathname = "/#/home";
    window.history.replaceState({}, "", pathname);
  }

  const routes = {
    "/home": HomePage,
    "/shop": ShopPage,
    "/features": FeaturesPage,
    "/blog": BlogPage,
    "/post": PostPage,
    "/about": AboutPage,
    "/contact": ContactPage,
    "/cart": CartPage,
    "/profile": ProfilePage,
    "/register": RegisterPage,
    "/login": LoginPage,
  };

  // Handle dynamic (/post/:id) route
  const dynamicRoutePattern = /^\/post\/(\d+)$/;
  const match = pathname.match(dynamicRoutePattern);

  if (match) {
    rootElement.innerHTML = PostPage();

  } else if (routes[pathname]) {
    rootElement.innerHTML = routes[pathname]();

    Navigation();
    InitialScripts(pathname);

    if (["/register", "/login"].includes(pathname)) {
      navbar.innerHTML = " ";
      header.innerHTML = " ";
      footer.innerHTML = " ";
    } else {
      navbar.innerHTML = Navbar();
      header.innerHTML = Header();
      footer.innerHTML = Footer();
    }
  } else {
    rootElement.innerHTML = ErrorPage();
  }
}

// Listen for popstate to Handle Browser Navigation (back/forward buttons)
window.addEventListener("popstate", Routing);

// Listen for hashchange to Handle pathname changing
window.addEventListener("hashchange", function(){
  Routing;
  location.reload();
});

window.addEventListener("load", function () {
  Navigation();
  Routing();
  InitialScripts("/home");
});