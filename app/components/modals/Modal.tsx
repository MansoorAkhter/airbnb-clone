'use client'

import { useEffect, useState } from "react";

interface ModalProps {
    title: string,
    isOpen: boolean,
    disbaled: boolean,
    actionLabel: string,
    secondaryLabel: string,
    onClose: () => void,
    onSubmit: () => void,
    secondaryAction: () => void,
    body: React.ReactElement,
    footer: React.ReactElement,
};

const Modal: React.FC<ModalProps> = ({
    title,
    isOpen,
    disbaled,
    actionLabel,
    secondaryLabel,
    onClose,
    onSubmit,
    secondaryAction,
    body,
    footer
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen)
    }, []);

    const handleDisabled = () => {
        if (disbaled) {
            return;
        }
    }
    return (
        <div>

        </div>
    );
};

export default Modal;
