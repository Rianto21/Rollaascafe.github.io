import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
  
    component: () =>
      import("../views/Product.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/seatReservation",
    name: "SeatReservation",
  
    component: () =>
      import("../views/SeatReservation.vue"),
  },
  {
    path: "/login",
    name: "Login",
  
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Registration",
  
    component: () =>
      import("../views/Registration.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
