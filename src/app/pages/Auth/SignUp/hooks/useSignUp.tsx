import {useState} from "react";
import {FieldValues, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

//types
import {SignErrorsType, SignUpRequestType,} from "../../../../../types/AuthType";

import {useActions} from "../../../../../hooks/useActions";
import {useSignUpMutation} from "../../../../../store/api/auth.api";

const useSignUp = () => {
    const navigate = useNavigate();
    const [backendErrors, setBackendErrors] = useState<SignErrorsType | null>(
        null
    );

    const {setCredentials} = useActions();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<SignUpRequestType | FieldValues>();

    const [signUp] = useSignUpMutation();

    const signUpHandler = async (formData: SignUpRequestType | FieldValues) => {
        try {
            const authData = await signUp(formData).unwrap();
            navigate("/");
            // setCredentials(authData);
        } catch (error: any) {
            setBackendErrors(error.data);
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        signUpHandler,
        backendErrors,
    };
};

export default useSignUp;
