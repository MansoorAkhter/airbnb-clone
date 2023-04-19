'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
    id: string,
    label: string,
    type?: string,
    disabled?: boolean,
    formatePrice?: boolean,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    formatePrice,
    required,
    register,
    errors }) => {

    return (
        <div className="w-full relative">
            {formatePrice && (<BiDollar size={24} className="text-neutral-700 w-full absolute top-5 left-2" />)}
            <input
                placeholder=" "
                disabled={disabled}
                {...register(id, { required })}
                type={type}
                className={`peer w-full p-4 pt-6 font-light rounded-md bg-white border-2`}
            />
        </div>
    );
}

export default Input;