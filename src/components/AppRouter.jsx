import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../router/Route";
import Loader from "../UI/Loader/Loader";
const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

        if(isLoading){
            return <Loader/>
        }
    return(
        isAuth
        ?
        <Routes>
                {privateRoutes.map(route => (
                    <Route 
                    key={Math.random}
                    path={route.path} 
                    element={route.element} 
                    exact={route.exact}
                   
                     />
                    ))
                }
                <Route
        path="*"
        element={<Navigate to="posts" replace />}
            />
            </Routes>
        :
        <Routes>
                {publicRoutes.map(route => (
                    <Route 
                    key={Math.random}
                    path={route.path} 
                    element={route.element} 
                    exact={route.exact}

                    />
                    ))
                    }
                     <Route
        path="*"
        element={<Navigate to="login" replace />}
            />
            </Routes>
            



    )
}
export default AppRouter;