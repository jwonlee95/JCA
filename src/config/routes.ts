import IRoute from "interfaces/route";
import {
    Home,
    Dashboard
} from "pages";

const routes: IRoute[] = [
    {
      path: "/",
      exact: true,
      component: Home,
      name: "Home Page",
      protected: true,
    },
    {
        path: "/dashboard",
        exact: true,
        component: Dashboard,
        name: "Dashboard Page",
        protected: true,
      }
  ];
  
  export default routes;
