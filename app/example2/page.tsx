"use client"

import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

interface CustomAlertProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    heading?: string;
    message: string;
    dismissible?: boolean;
    showIcon?: boolean;
    onClose?: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
                                                     variant = 'info',
                                                     heading,
                                                     message,
                                                     dismissible = false,
                                                     showIcon = true,
                                                     onClose
                                                 }) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        onClose?.();
    };

    // Icons for different variants (you can replace these with your preferred icons)
    const getIcon = () => {
        switch (variant) {
            case 'success':
                return '✅';
            case 'danger':
                return '⚠️';
            case 'warning':
                return '⚠️';
            case 'info':
                return 'ℹ️';
            default:
                return null;
        }
    };

    if (!show) return null;

    return (
        <Alert
            variant={variant}
            onClose={handleClose}
            dismissible={dismissible}
            className="d-flex align-items-center"
        >
            {showIcon && getIcon() && (
                <span className="me-2">{getIcon()}</span>
            )}
            <div>
                {heading && (
                    <Alert.Heading>{heading}</Alert.Heading>
                )}
                {message}
            </div>
        </Alert>
    );
};

// Example usage component
const AlertExample: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <div className="p-3">
            {/* Basic Alert */}
            <CustomAlert
                message="This is a basic info alert"
            />

            {/* Alert with heading */}
            <CustomAlert
                variant="success"
                heading="Well done!"
                message="You successfully read this important alert message."
            />

            {/* Dismissible Alert */}
            <CustomAlert
                variant="warning"
                heading="Warning"
                message="This alert can be dismissed by clicking the close button."
                dismissible={true}
                onClose={() => console.log('Alert closed')}
            />

            {/* Danger Alert */}
            <CustomAlert
                variant="danger"
                message="This is a danger alert — check it out!"
                showIcon={true}
            />

            {/* Controlled Alert with Button */}
            <Button
                onClick={() => setShowAlert(!showAlert)}
                className="mb-3"
            >
                Toggle Alert
            </Button>

            {showAlert && (
                <CustomAlert
                    variant="primary"
                    message="This alert is controlled by a button!"
                    dismissible={true}
                    onClose={() => setShowAlert(false)}
                />
            )}
        </div>
    );
};

export default AlertExample;