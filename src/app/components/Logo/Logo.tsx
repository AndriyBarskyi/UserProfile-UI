import React from "react";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className="flex">
            <NavLink to={`/`}>
                <div className="text-2xl font-bold text-red-600">UserProfileApp</div>
            </NavLink>
        </div>
    );
};

export default Logo;
