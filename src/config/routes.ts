import Home from '../pages/Home';
import Account from '../pages/Account';
import Inventory from '../pages/Inventory';
import Sneakers from '../pages/Sneakers';
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
      name: "Home",
      protected: false
    },
    {
      path: "/account",
      component: Account,
      name: "Account",
      protected: true
    },
    {
      path: "/inventory",
      component: Inventory,
      name: "Inventory",
      protected: true
    },
    {
      path: "/sneakers",
      component: Sneakers,
      name: "Sneakers",
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