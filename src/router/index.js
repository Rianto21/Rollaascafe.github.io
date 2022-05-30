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
    path: "/product/:id",
    name: "detailProduct",
  
    component: () =>
      import("../views/DetailProduct.vue"),
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
    path: "/keranjang",
    name: "Keranjang",
  
    component: () =>
      import("../views/Keranjang.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
  
    component: () =>
      import("../views/Checkout.vue"),
  },
  {
    path: "/profile/:id",
    name: "Profile",
  
    component: () =>
      import("../views/Profile.vue"),
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
  {
    path: "/dashboard",
    name: "Dashboard",
  
    component: () =>
      import("../views/Dashboard.vue"),
  },
  {
    path: "/dashboard/karyawan",
    name: "Karyawan",
  
    component: () =>
      import("../views/Karyawan.vue"),
  },
  {
    path: "/dashboard/tambahKaryawan",
    name: "TambahKaryawan",
  
    component: () =>
      import("../views/TambahKaryawan.vue"),
  },
  {
    path: "/dashboard/karyawan/edit/:id",
    name: "EditKaryawan",
  
    component: () =>
      import("../views/EditKaryawan.vue"),
  },
  {
    path: "/dashboard/product",
    name: "ProductAdmin",
  
    component: () =>
      import("../views/ProductAdmin.vue"),
  },
  {
    path: "/dashboard/product/tambah",
    name: "TambahProduct",
  
    component: () =>
      import("../views/TambahProduct.vue"),
  },
  {
    path: "/dashboard/product/edit/:id",
    name: "EditProduct",
  
    component: () =>
      import("../views/EditProduct.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const isAuthenticated = sessionStorage.getItem("login")
const user = sessionStorage.getItem("user")

router.beforeEach((to, from, next) => {
  if (to.name == 'Keranjang' && !isAuthenticated) next({ name: 'Home' })
  if (to.name == 'Profile' && !isAuthenticated) next({ name: 'Home' })
  else if (to.name == 'Dashboard' && (!isAuthenticated || user == 'useronly')) next({ name: 'Home' })
  else if (to.name == 'Karyawan' && (!isAuthenticated || user == 'useronly')) next({ name: 'Home' })
  else if (to.name == 'TambahKaryawan' && (!isAuthenticated || user == 'useronly')) next({ name: 'Home' })
  else if (to.name == 'EditKaryawan' && (!isAuthenticated || user == 'useronly')) next({ name: 'Home' })
  else if (to.name == 'ProductAdmin' && (!isAuthenticated || user == 'useronly')) next({ name: 'Home' })
  else if (to.name == 'TambahProduct' && (!isAuthenticated || user == 'useronly')) next({ name: 'Home' })
  else if (to.name == 'EditProduct' && (!isAuthenticated || user == 'useronly')) next({ name: 'Home' })
  else if (to.name == null) next({ name: 'Home' })
  else next()
})


export default router;
