import React from "react";

//components
import SignInForm from "./components/SignInForm";
import Logo from "../../../components/Logo/Logo";

const SignIn = () => {
    return (
        <div className="flex flex-col justify-center items-center py-4 px-0 py-8 md:px-4 gap-4">
            <Logo/>
            <div className="flex flex-col md:shadow-xl rounded-3xl md:w-1/2">
                <SignInForm/>
            </div>
        </div>
    );
};

export default SignIn;
