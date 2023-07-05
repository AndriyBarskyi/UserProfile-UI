import React from "react";

import {NavLink} from "react-router-dom";

//hooks
import useSignIn from "../../hooks/useSignIn";

//Components
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/Input";

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        signInHandler,
        errors,
        backendErrors,
    } = useSignIn();

    return (
        <form
            onSubmit={handleSubmit(signInHandler)}
            className="flex flex-col md:p-10 py-8 px-4 lg:p-20 gap-6"
        >
            <h1 className="text-center">Log In</h1>
            <Input
                label="Email"
                placeholder="your@mail.com"
                name="email"
                type="email"
                register={register}
            />

            <Input
                label="Password"
                name="password"
                type="password"
                register={register}
            />

            <Button fill>Log In</Button>

            <div className="flex flex-row justify-center gap-4">
                Not registered?
                <NavLink to={`/sign-up`}>
                    <div className="text-red-600">Sign Up</div>
                </NavLink>
            </div>
        </form>
    );
};

export default SignUpForm;
