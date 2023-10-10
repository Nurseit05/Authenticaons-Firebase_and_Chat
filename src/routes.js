import { Navigate } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { CHAT_ROUTER, LOGIN_ROUTER } from "./utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTER,
        element: <Login/>
    }
    // {
    //     path: '*',
    //     element: <Navigate to={LOGIN_ROUTER} replace />
    // }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTER,
        element: <Chat/>
    }
    // {
    //     path: '*',
    //     element: <Navigate to={CHAT_ROUTER} replace />
    // }
]