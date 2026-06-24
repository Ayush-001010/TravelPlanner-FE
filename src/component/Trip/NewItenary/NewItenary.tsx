import React from "react";
import type INewItenary from "./INewItenary";
import { useTripContext } from "../Trip";
import { Handle, Position } from '@xyflow/react';

const NewItenary: React.FC<INewItenary> = () => {
    const { openFormHandler } = useTripContext();

    const handleClick = () => {
        openFormHandler("Places");
    }

    return (
        <div className="p-2 border-1 border-[#6c757d] rounded-lg w-[120px] flex justify-center items-center flex-col h-sm border-dashed transition duration-300 ease-in-out hover:bg-[#e9ecef] cursor-pointer">
            <Handle type="target" position={Position.Left} />
            <p onClick={handleClick} className="m-0 text-[#212529] text-sm flex flex-col items-center gap-1">
                <i className="bi bi-plus-circle" />
            </p>
            <p className="m-0 text-[5px]">
                Which place do you want to add?
            </p>
            <Handle type="source" position={Position.Right} />
        </div>
    )
};

export default NewItenary;