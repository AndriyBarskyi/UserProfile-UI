import React, {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";

type PaperProps = {
    children?: React.ReactNode;
    childrenClassName?: string;
    paperClassName?: string;
    title?: string;
    titleClassName?: string;
    navLink?: string;
    isSky?: boolean;
};

const Paper: FunctionComponent<PaperProps> = ({
                                                  children,
                                                  childrenClassName,
                                                  paperClassName,
                                                  title,
                                                  titleClassName,
                                                  navLink,
                                                  isSky,
                                              }) => {
    return (
        <div
            className={`flex flex-col shadow-md ${
                isSky ? "bg-sky-100 shadow-sky-400" : "bg-orange-100 shadow-orange-400"
            }  rounded-lg w-full px-8 py-6 gap-4 ${paperClassName}`}
        >
            {navLink && title && (
                <NavLink
                    to={`/advertisements/${navLink}`}
                    className={`${
                        isSky
                            ? "border-sky-400 bg-sky-200"
                            : "border-orange-400 bg-orange-200"
                    } px-4 py-1 w-2/12 border text-center rounded-full hover:bg-opacity-70 ${titleClassName}`}
                >
                    <div className="">{title}</div>
                </NavLink>
            )}
            {title && !navLink && <div className={``}>{title}</div>}
            <div
                className={`flex flex-row justify-start flex-wrap w-full gap-4 ${childrenClassName}`}
            >
                {children}
            </div>
        </div>
    );
};

export default Paper;
