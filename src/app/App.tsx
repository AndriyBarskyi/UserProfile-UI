import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";
import Profile from "./pages/Profile/Profile";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route
                    path="/profile/:id"
                    element={<PrivateRoute component={Profile}/>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
