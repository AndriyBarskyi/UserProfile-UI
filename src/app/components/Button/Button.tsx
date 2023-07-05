import React, {FunctionComponent} from "react";
import {useNavigate} from "react-router-dom";
import {ReactComponent as Arrow} from "./assets/arrow.svg";

type ButtonProps = {
    children?: React.ReactNode;
    disabled?: boolean;
    fill?: boolean;
    arrow?: boolean;
    arrowPosition?: "left" | "right";
    className?: string;
    to?: string;
    noSubmit?: boolean;
    onClick?: () => void;
};

/**
 * Кнопка
 *
 * @param {string} children - Все що буде в середині кнопки
 * @param {boolean} disabled - Відключає використання кнопки
 * @param {boolean} fill - Заливає всю кнопку
 * @param {boolean} arrow - Чи є стрілка в кнопці
 * @param {string} arrowPosition - Позиція стрілки, use right or left
 * @param {string} className - Додаткові стилі кнопки
 * @param {string} to - Вказує, куди потрібно перейти по кліку кнопки. Використовується навігація реакту
 * @param {boolean} noSubmit - Не відправляє submit в формі
 */
const Button: FunctionComponent<ButtonProps> = ({
                                                    children,
                                                    disabled,
                                                    fill,
                                                    arrow,
                                                    arrowPosition,
                                                    className,
                                                    to,
                                                    noSubmit,
                                                    onClick,
                                                }) => {
    const navigate = useNavigate();
//border border-orange-600 text-orange-600 hover:bg-orange-100  
    const isFill = fill
        ? "bg-red-500 text-white"
        : "border border-red-600 bg-red-100 text-red-600 hover:text-white hover:bg-red-600 ";
    const iconFill = fill ? "fill-white" : "fill-red-600";

    const navigateTo = (path?: string) => {
        return () => {
            navigate(path || "", {});
        };
    };

    return (
        <button
            onClick={onClick ? () => onClick && onClick() : navigateTo(to)}
            //type="submit"
            type={`${noSubmit ? "button" : "submit"}`}
            className={`flex justify-center items-center w-full py-3 text-base rounded-xl font-bold gap-3 cursor-pointer ${isFill} 
      ${arrowPosition == "right" ? "flex-row-reverse" : ""} ${className}
      hover:opacity-90
      active:opacity-80
      disabled:bg-black disabled:bg-opacity-10 disabled:cursor-not-allowed disabled:opacity-100 disabled:bg-transparent-gradient
      `}
            disabled={disabled}
        >
            {arrow && (
                <Arrow
                    className={`${iconFill} w-4 relative bottom-[2px]
        ${arrowPosition == "right" ? "right" : "transform rotate-180"}`}
                />
            )}
            {children}
        </button>
    );
};

export default Button;
