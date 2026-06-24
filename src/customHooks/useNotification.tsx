import { useState } from "react";
import Notification from "../component/Learning/Notification/Notication";

type NotificationType = {
    message: string;
    type: "success" | "error" | "info" | "warning";
    duration: number;
}

type Position =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "top-center"
  | "bottom-center";

const positionClassMap: Record<Position, string> = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2"
};

const useNotification = (
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center",
) => {
    const [notification, setNotification] = useState<Array<NotificationType>>([]);

    const triggerNotification = (message: string, type: "success" | "error" | "info" | "warning", duration: number) => {
        console.log("triggerNotification called with:", { message, type, duration });
        setNotification(prev => [...prev, { message, type, duration }]);
        setTimeout(() => {
            setNotification(prev => prev.filter(notif => notif.message !== message));
        }, duration);
    }
    console.log("useNotification hook rendered with:", { notification, position });
    const notificationComponent = notification.length > 0 ? (
        // <div className={`absolute ${position === "top-right" ? "top-0 right-0" : position === "top-left" ? "top-0 left-0" : position === "bottom-right" ? "bottom-0 right-0" : position === "bottom-left" ? "bottom-0 left-0" : position === "top-center" ? "top-0 left-1/2 transform -translate-x-1/2" : position === "bottom-center" ? "bottom-0 left-1/2 transform -translate-x-1/2" : ""} z-50`}>
        //     <Notification type={notification.type} message={notification.message} onClose={() => setNotification(null)} />
        // </div>
        <>
            {notification.map((notif, index) => (
                <div key={index}  className={`fixed ${positionClassMap[position]} z-50 flex flex-col gap-3`}>
                    <Notification type={notif.type} message={notif.message} onClose={() => {
                        setNotification(prev => prev.filter((_, i) => i !== index));
                    }} />
                </div>
            ))}
        </>
    ) : <></>;

    return {
        notificationComponent,
        triggerNotification
    };
};

export default useNotification;