'use client'

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
    title?: string,
    isOpen?: boolean,
    disbaled?: boolean,
    actionLabel: string,
    secondaryActionLabel?: string,
    onClose: () => void,
    onSubmit: () => void,
    secondaryAction?: () => void,
    body?: React.ReactElement,
    footer?: React.ReactElement,
};

const Modal: React.FC<ModalProps> = ({
    title,
    isOpen,
    disbaled,
    actionLabel,
    secondaryActionLabel,
    onClose,
    onSubmit,
    secondaryAction,
    body,
    footer
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disbaled) {
            return;
        };

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disbaled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disbaled) {
            return;
        }

        onSubmit();
    }, [disbaled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if (disbaled || !secondaryAction) {
            return;
        }

        secondaryAction();
    }, [disbaled, secondaryAction]);

    if (!isOpen) {
        return null;
    }


    return (
        <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
                <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 mx-auto h-full lg:h-auto md:h-auto">
                    {/* CONTENT */}
                    <div className={`translate duration-300 h-full ${showModal ? "translate-y-0" : "translate-y-full"} ${showModal ? "opacity-100" : "opacity-0"}`}>
                        <div className="translate bg-white h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                            {/* HEADER */}
                            <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                                <button onClick={handleClose} className="p-1 border-0 hover:opacity-70 transition absolute left-9">
                                    <IoMdClose size={18} />
                                </button>
                                <div className="text-lg font-semibold">{title}</div>
                            </div>
                            {/* BODY */}
                            <div className="relative p-6 flex-auto">{body}</div>
                            {/* FOOTER */}
                            <div className="flex flex-col gap-2 p-6">
                                <div className="flex flex-row items-center gap-4 w-full">
                                    {secondaryAction && secondaryActionLabel && (<Button
                                        outline
                                        disabled={disbaled}
                                        label={secondaryActionLabel}
                                        onClick={handleSecondaryAction} />)}
                                    <Button
                                        disabled={disbaled}
                                        label={actionLabel}
                                        onClick={handleSubmit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Modal;
