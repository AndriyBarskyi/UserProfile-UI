import {useState} from "react";
import {FieldValues, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

//types
import {SignErrorsType, SignInRequestType} from "../../../../../types/AuthType";

import {useActions} from "../../../../../hooks/useActions";
import {useSignInMutation} from "../../../../../store/api/auth.api";
import {useGetUserMutation} from "../../../../../store/api/profile.api";

const useSignIn = () => {
    const navigate = useNavigate();
    const [backendErrors, setBackendErrors] = useState<SignErrorsType | null>(
        null
    );

    const {setCredentials, setProfile} = useActions();

    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue,
    } = useForm<SignInRequestType | FieldValues>();

    const [signIn] = useSignInMutation();
    const [getProfile] = useGetUserMutation();

    const signInHandler = async (formData: SignInRequestType | FieldValues) => {
        try {
            const authData = await signIn(formData).unwrap();
            setCredentials(authData);
            setTimeout(async () => {
                const userData = await getProfile(null).unwrap();
                console.log("POST sign In, userData", userData)
                setProfile(userData);
                navigate("/profile/:id");
            }, 500);
        } catch (error: any) {
            setBackendErrors(error.data);
        }
    };


    return {
        register,
        handleSubmit,
        errors,
        setValue,
        signInHandler,
        backendErrors,
    };
};

export default useSignIn;
