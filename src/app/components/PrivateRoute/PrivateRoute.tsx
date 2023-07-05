import React, {FunctionComponent} from "react";
import {Navigate} from "react-router-dom"

type PrivateRouteType = {
    component: React.ComponentType;
    path?: string;
};

export const PrivateRoute: FunctionComponent<PrivateRouteType> = ({
                                                                      component: RouteComponent,
                                                                  }) => {
    const isAuth = true;

    if (isAuth) {
        return <RouteComponent/>;
    }

    return <Navigate to="/sign-in"/>;
};

