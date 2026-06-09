import React from "react";
import type ICreateTrip from "./ICreateTrip";
import { Modal } from "antd";
import Header from "./Header/Header";
import TripForm from "./TripForm/TripForm";

const CreateTrip: React.FC<ICreateTrip> = ({ open, closeFunc }) => {
    return (
        <Modal open={open} onCancel={closeFunc} centered width={700} footer={null}>
            <Header />
            <TripForm />
        </Modal>
    )
};

export default CreateTrip;