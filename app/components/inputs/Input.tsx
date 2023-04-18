'use client'
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

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

        </div>
    );
}

export default Input;