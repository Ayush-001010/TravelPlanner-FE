import React from "react";
import type INotification from "./INotification";
import { VscCopilotSuccess } from "react-icons/vsc";
import { VscError } from "react-icons/vsc";
import { CiWarning } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { Button } from "antd";

type IconType = "success" | "error" | "info" | "warning";

const iconObj: Record<IconType, React.ReactNode> = {
    "success": <VscCopilotSuccess />,
    "error": <VscError />,
    "info": <CiCircleInfo />,
    "warning": <CiWarning />
}
const backgroundColorObj: Record<IconType, string> = {
    "success": "#d4edda",
    "error": "#f8d7da",
    "info": "#d1ecf1",
    "warning": "#fff3cd"
}



const Notification: React.FC<INotification> = ({ type, message, onClose }) => {
    console.log("Notification component rendered with:", { type, message });
    return (
        <div className={`p-2 m-4  rounded-md shadow-md flex items-center justify-between`} style={{ backgroundColor: backgroundColorObj[type] }}>
            <p>
                {iconObj[type]}
            </p>
            <p>{message}</p>
            <p>
                <Button onClick={onClose} type="text">
                    <IoIosCloseCircle />
                </Button>
            </p>
        </div>
    );
};

export default Notification;