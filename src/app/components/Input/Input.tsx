import React, {FunctionComponent} from "react";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
import {BackEndErrorType} from "../../../types/GlobalType";

type InputProps = {
    label?: string;
    name: string;
    value?: string | number;
    placeholder?: string;
    type: "text" | "number" | "email" | "password";
    className?: string;
    disabled?: boolean;
    register: UseFormRegister<FieldValues>;
    errors?: FieldErrors | any;
    backendErrors?: BackEndErrorType;
    row?: boolean;
    inputClassName?: string;
    textarea?: boolean;
};

/**
 * Простий інпут для тексту
 *
 * @param label - Label для поля
 * @param name - Name для поля, щоб пов'язати з формою
 * @param value - Value для поля, передати значення поля якщо вже є
 * @param placeholder - Placeholder для поля
 * @param type - Тип поля number | text | email | password
 * @param className - Додаткові класи для інпуту
 * @param disabled - Вимикає поле для введення даних
 * @param register - Передаємо функцію, яка реєструє поле у формі
 * @param errors - Передаємо помилки, що генеруються формою
 * @param backendErrors - Передаємо помилки з backend`e
 * @param row - Передаємо помилки з backend`e
 */
const Input: FunctionComponent<InputProps> = ({
                                                  label,
                                                  name,
                                                  value,
                                                  placeholder,
                                                  type,
                                                  className,
                                                  disabled,
                                                  register,
                                                  errors,
                                                  backendErrors,
                                                  row,
                                                  inputClassName,
                                              }) => {
    return (
        <div
            className={`flex w-full ${
                row ? "md:flex-row flex-col items-center" : "flex-col"
            } ${className}`}
        >
            <label className="text-gray-600 mb-0.5 w-full md:w-full" htmlFor={label}>
                {label}
            </label>
            <div className="w-full relative">
                <input
                    id={label}
                    type={type}
                    defaultValue={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...register(name)}
                    className={`w-full shadow-md border border-slate-200 bg-white rounded-xl py-3 px-4 outline-none
          hover:bg-opacity-20 placeholder:text-gray-3  
          focus:bg-opacity-0 focus:placeholder:text-opacity-100
          disabled:bg-opacity-0 disabled:cursor-not-allowed border
          ${backendErrors || errors ? "border-red" : "border-transparent"}
          ${" " + inputClassName}
        `}
                />
                {errors && (
                    <span className="text-sm text-red absolute -bottom-6 left-0">
            {errors?.message}
          </span>
                )}

                {backendErrors &&
                    backendErrors.map((error, index) => (
                        <span
                            key={index}
                            className="text-sm text-red absolute -bottom-6 left-0"
                        >
              {error}
            </span>
                    ))}
            </div>
        </div>
    );
};

export default Input;
