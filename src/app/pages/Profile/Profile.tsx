import React, {useState} from "react";
import {useParams} from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import Paper from "../../components/Paper/Paper";
import Button from "../../components/Button";
import Input from "../../components/Input";

import useProfile from "./hooks/useProfile";
import {FieldValues} from "react-hook-form";

const Profile = () => {
    const {id} = useParams();
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        errors,
        backendErrors,
        getUserHandler,
        profile,
        updateUserHandler,
    } = useProfile();

    const handleUpdateClick = (data: FieldValues) => {
        updateUserHandler(data);
        setIsEdit(true);
    };

    return (
        <Layout>
            <Paper paperClassName="pl-28 py-8">
                <div className="flex justify-around w-full">
                    <form className="flex flex-col gap-8 w-8/12" onSubmit={handleSubmit(handleUpdateClick)}>
                        <div className="flex items-center gap-8">
                            <div
                                className={`flex text-red-600 bg-red-100 border-[1px] border-red-400 w-28 h-28 rounded-full flex items-center justify-center uppercase `}
                                style={{fontSize: 48}}
                            >
                                {`${profile.firstName.slice(0, 1)}${profile.lastName.slice(0, 1)}`}
                            </div>
                            <div className="flex flex-col w-1/2 justify-around h-full gap-8">
                                <div className="flex text-xl text-slate-900 gap-4">
                                    <div>{profile.firstName} {profile.lastName}</div>
                                </div>
                                {!isEdit && (
                                    <Button
                                        fill
                                        onClick={() => {
                                            setIsEdit(true);
                                        }}
                                    >
                                        Edit
                                    </Button>
                                )}
                                {isEdit && (
                                    <Button
                                        fill
                                    >
                                        Save
                                    </Button>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <div className="w-1/2">Fist name:</div>
                            {!isEdit && <div className="w-full">{profile.firstName}</div>}
                            {isEdit && (
                                <Input
                                    inputClassName="border-red-600 hover:bg-opacity-80 focus:bg-opacity-60"
                                    name="firstName"
                                    type="text"
                                    register={register}
                                    value={profile.firstName}
                                />
                            )}
                        </div>

                        <div className="flex gap-2 items-center">
                            <div className="w-1/2">Last name:</div>
                            {!isEdit && <div className="w-full">{profile.lastName}</div>}
                            {isEdit && (
                                <Input
                                    inputClassName="border-red-600 hover:bg-opacity-80 focus:bg-opacity-60"
                                    name="lastName"
                                    type="text"
                                    register={register}
                                    value={profile.lastName}
                                />
                            )}
                        </div>

                        <div className="flex gap-2 items-center">
                            <div className="w-1/2">Email:</div>
                            {!isEdit && <div className="w-full">{profile.email}</div>}
                            {isEdit && (
                                <Input
                                    inputClassName="border-red-600 hover:bg-opacity-80 focus:bg-opacity-60"
                                    placeholder="your@mail.com"
                                    name="email"
                                    type="email"
                                    register={register}
                                    value={profile.email}
                                />
                            )}
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-1/2">Password:</div>
                            {!isEdit && <div className="w-full">*********</div>}
                            {isEdit && (
                                <Input
                                    inputClassName="border-red-600 hover:bg-opacity-80 focus:bg-opacity-60"
                                    name="password"
                                    type="password"
                                    register={register}
                                />
                            )}
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-1/2">Address:</div>
                            {!isEdit && <div className="w-full">{profile.address}</div>}
                            {isEdit && (
                                <Input
                                    inputClassName="border-red-600 hover:bg-opacity-80 focus:bg-opacity-60"
                                    name="address"
                                    type="text"
                                    register={register}
                                    value={profile.address}
                                />
                            )}
                        </div>
                    </form>
                </div>

                <div className=""></div>
            </Paper>
        </Layout>
    );
};

export default Profile;
