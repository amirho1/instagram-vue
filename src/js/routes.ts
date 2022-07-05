import HomePage from "../pages/home.vue";
import NotFoundPage from "../pages/404.vue";
import Login from "../pages/login.vue";
import PreLogin from "../pages/preLogin.vue";
import Register from "../pages/register.vue";

var routes = [
  { path: "/preLogin", component: PreLogin },
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
