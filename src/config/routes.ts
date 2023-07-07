import Home from '../pages/Home';
import Account from '../pages/Account';
import Dashboard from '../pages/Dashboard';
import Sneaker from '../pages/Sneaker';
import Panda from '../pages/Panda'
import Seafoam from '../pages/Seafoam'

interface RouteType {
    path: string,
    component: () => JSX.Element, 
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/account",
      component: Account,
      name: "Account",
      protected: true
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    },
    {
      path: "/sneaker",
      component: Sneaker,
      name: "Sneaker",
      protected: true
    },
    {
      path: "/panda",
      component: Panda,
      name: "Panda",
      protected: true
    },
    {
      path: "/seafoam",
      component: Seafoam,
      name: "Seafoam",
      protected: true
    },
];

export default routes