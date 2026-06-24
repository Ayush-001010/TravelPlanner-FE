import React from "react";
import type IHeader from "./IHeader";
import { useTripContext, type ITripContext } from "../../Trip";

const Header: React.FC<IHeader> = () => {
    const { formType } = useTripContext() as ITripContext;

    const getHeaderTitle = () => {
        switch (formType) {
            case "Places" : return (
                <div className="mt-1 text-center border-b border-[#3a4048] pb-2">
                    <p className="text-lg font-bold m-0 text-[#f8f9fa] text-shadow-lg">Create Itinerary</p>
                    <p className="text-xs text-[#e7d8c9] m-0">Kindly complete the form to help us prepare your travel plan</p>
                </div>
            )
            default:
                return null;
        }
    }
    return (
        <div>
            {getHeaderTitle()}
        </div>
    )
};

export default Header;