export default interface INotification{
    type: "success" | "error" | "info" | "warning";
    message : string;
    onClose: () => void;
}