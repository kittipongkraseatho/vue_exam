import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/page/Login.vue";
import Todos from "./components/page/Todos.vue";
// import Register from "./components/Register.vue";
// // lazy-loaded
// const Profile = () => import("./components/Profile.vue");
// const BoardAdmin = () => import("./components/BoardAdmin.vue");
// const BoardModerator = () => import("./components/BoardModerator.vue");
// const BoardUser = () => import("./components/BoardUser.vue");

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/todos",
    component: Todos,
  },
  //   {
  //     path: "/login",
  //     component: Login,
  //   },
  //   {
  //     path: "/register",
  //     component: Register,
  //   },
  //   {
  //     path: "/profile",
  //     name: "profile",
  //     // lazy-loaded
  //     component: Profile,
  //   },
  //   {
  //     path: "/admin",
  //     name: "admin",
  //     // lazy-loaded
  //     component: BoardAdmin,
  //   },
  //   {
  //     path: "/mod",
  //     name: "moderator",
  //     // lazy-loaded
  //     component: BoardModerator,
  //   },
  //   {
  //     path: "/user",
  //     name: "user",
  //     // lazy-loaded
  //     component: BoardUser,
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ["/login", "/register", "/home"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
