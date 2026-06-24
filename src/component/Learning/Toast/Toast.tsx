import React from "react";
import type IToast from "./IToast";
import { Button } from "antd";
import useNotification from "../../../customHooks/useNotification";

const Toast: React.FC<IToast> = () => {
    const { triggerNotification , notificationComponent } = useNotification("top-left");
    return (
        <div>
            {notificationComponent}
            <Button onClick={() => triggerNotification("Success message", "success", 3000)}>
                Show Success
            </Button>
            <Button onClick={() => triggerNotification("Error message", "error", 3000)}>
                Show Error
            </Button>
            <Button onClick={() => triggerNotification("Warning message", "warning", 3000)}>
                Show Warning
            </Button>
            <Button onClick={() => triggerNotification("Info message", "info", 3000)}>
                Show Info
            </Button>
        </div>
    )
};

export default Toast;