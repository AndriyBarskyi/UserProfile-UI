import React from "react";

import {NavLink} from "react-router-dom";

//hooks
import useSignUp from "../../hooks/useSignUp";

//Components
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/Input";

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        signUpHandler,
        errors,
        backendErrors,
    } = useSignUp();

    return (
        <form
            onSubmit={handleSubmit(signUpHandler)}
            className="flex flex-col md:p-10 py-8 px-4 lg:p-20 gap-5"
        >
            <h1 className="text-center">Registration</h1>
            <Input
                label="First name"
                placeholder=""
                name="firstName"
                type="text"
                register={register}
            />

            <Input
                label="Last name"
                placeholder=""
                name="lastName"
                type="text"
                register={register}
            />

            <Input
                label="Email"
                placeholder="your@mail.com"
                name="email"
                type="email"
                register={register}
            />

            <Input
                label="Address (Example: Svobody Ave, 28, Lviv, Lviv Oblast, 79000)"
                placeholder=""
                name="address"
                type="text"
                register={register}
            />

            <Input
                label="Password"
                name="password"
                type="password"
                register={register}
            />
            <Input
                label="Repeat password"
                name="repeatPassword"
                type="password"
                register={register}
            />

            <Button fill>Sign Up</Button>


            <div className="flex flex-row justify-center gap-4">
                Already registered?
                <NavLink to={`/`}>
                    <div className="text-red-600">Sign In</div>
                </NavLink>
            </div>
        </form>
    );
};

export default SignUpForm;
