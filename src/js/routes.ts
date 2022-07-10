import HomePage from "../pages/home.vue";
import NotFoundPage from "../pages/404.vue";
import Login from "../pages/login.vue";
import PreLogin from "../pages/preLogin.vue";
import Register from "../pages/register.vue";
import { Api } from "../hooks/useFetch";

interface AnyProps {
  [props: string]: any;
}

export const isLoggedIn = async () => {
  const response = await Api({ method: "GET", url: "/users/islogin" });
  return response.status < 400;
};

interface LoggedInFNI {
  reject: any;
  router: any;
  resolve: any;
}

const ifLoggedInRedirectHome = async ({
  reject,
  router,
  resolve,
}: LoggedInFNI) => {
  try {
    const logeInStatus = await isLoggedIn();
    if (logeInStatus) {
      reject();
      router.navigate("/");
      return;
    }
  } catch (err) {
    resolve();
  }
};

var routes = [
  {
    path: "/preLogin",
    component: PreLogin,
    async beforeEnter({ reject, router, resolve }: AnyProps) {
      ifLoggedInRedirectHome({
        reject,
        router,
        resolve,
      });
    },
  },
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: Login,
    async beforeEnter({ reject, router, resolve }: AnyProps) {
      ifLoggedInRedirectHome({
        reject,
        router,
        resolve,
      });
    },
  },
  {
    path: "/register",
    component: Register,
    async beforeEnter({ reject, router, resolve }: AnyProps) {
      ifLoggedInRedirectHome({
        reject,
        router,
        resolve,
      });
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
