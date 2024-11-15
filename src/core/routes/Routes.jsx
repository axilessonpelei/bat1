import {Main} from "../../ui/pages/home/Main.jsx";
import { createBrowserRouter} from "react-router-dom";
import {Staking} from "../../ui/pages/staking/Staking.jsx";
import {Pool} from "../../ui/pages/pool/Pool.jsx";
import {Factory} from "../../ui/pages/factory/Factory.jsx";
import {Router} from "../../ui/pages/router/Router.jsx";
import {Layout} from "../../ui/component/HOCs/Layout.jsx";

const routes = [
    {
        path: "/",
        element: <Main />,
    },

    {
        path: "/pool",
        element: <Pool />,
    },
    {
        path: "/factory",
        element: <Factory />,
    },
    {
        path: "/router",
        element: <Router />,
    },

    {
        path: "/staking",
        element: <Staking/>,
    }
]

const routesLayout = routes.map((route) => {
    route.element = <Layout>{route.element}</Layout>;
    return route;
});

const router = createBrowserRouter(routesLayout);
export {router}