//ProfileSidebar
import React, {FunctionComponent} from "react";

import {NavLink} from "react-router-dom";

import {ReactComponent as User} from "../../../../../assets/user.svg";
import {ReactComponent as Case} from "../../../../../assets/case.svg";
import Logout from "../../../../../assets/logout.png";
import {UserNameType} from "../../../../../types/UserType";

type ProfileSidebarProps = {
    visible: boolean;
    setVisible: Function;
    profileId?: number;
    profileName: UserNameType;
};

const ProfileSidebar: FunctionComponent<ProfileSidebarProps> = ({
                                                                    visible,
                                                                    setVisible,
                                                                    profileId,
                                                                    profileName,
                                                                }) => {
    return (
        <div
            className={`
          ${visible ? "flex justify-end fixed" : "hidden"}
          z-20 w-full h-full
        `}
        >
            <div
                className="absolute bg-white opacity-60 w-full h-full"
                onClick={() => {
                    setVisible(false);
                }}
            ></div>

            <div
                className={`flex flex-col items-center bg-white w-2/12 z-30  overflow-auto`}
            >
                <div className="flex justify-start items-center border-b border-orange-500 pt-8 pb-4 px-4 w-full gap-4">
                    {/* <img
              className={`flex w-10 h-10 rounded-full stroke-black hover:bg-orange-100 cursor-pointer`}
              src={IBookmark}
              alt=""
            /> */}
                    <User className="w-10 h-10 fill-black"/>
                    <div>{profileName.firstName} {profileName.lastName}</div>
                </div>

                <NavLink
                    to={`/profile/${profileId}`}
                    className="flex justify-start items-center border-b border-orange-500 cursor-pointer px-2 py-4 w-full hover:bg-orange-100 gap-4"
                >
                    <div className="flex cursor-pointer">
                        <Case/>
                    </div>
                    <div className="">Мій профіль</div>
                </NavLink>


                <NavLink
                    to={"/"}
                    className="flex justify-start items-center border-b border-orange-500 cursor-pointer px-2 py-4 w-full hover:bg-orange-100 gap-4"
                >
                    <div className="flex cursor-pointer">
                        <img
                            className={`flex w-12 h-12 rounded-full stroke-black hover:bg-orange-100 cursor-pointer`}
                            src={Logout}
                            alt=""
                        />
                    </div>
                    <div className="">Вихід</div>
                </NavLink>
            </div>
        </div>
    );
};

export default ProfileSidebar;
export {};
