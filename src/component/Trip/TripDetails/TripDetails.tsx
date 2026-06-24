import React, { useEffect, useState } from 'react';
import type { NodeProps } from '@xyflow/react';
import { Handle, Position } from '@xyflow/react';
import type { IItenaryInterface } from '../../../services/Interfaces/TripInterface';
import moment from 'moment';

const TripDetails: React.FC<NodeProps> = ({ data }) => {
    const [details, setDetails] = useState<IItenaryInterface>();

    useEffect(() => {
        if (data) {
            setDetails(data as any);
        }
    }, [data]);

    return (
        <>
            <Handle type="target" position={Position.Top} />
            <div className="bg-[#f2f2f2] border-1 border-dashed border-[#212529] shadow-2xl shadow-white/20 rounded-lg w-[220px] h-sm p-2">
                <div className="flex items-center justify-center text-[#212529] text-xl border-b-1 border-[#3a4048] pb-2">
                    <p className="m-0 font-lora  ">
                        {details?.placeName.toUpperCase()}
                    </p>
                </div>
                <div className="flex  justify-between mt-2 ">
                    <p className="m-0 flex flex-col text-[#212529] text-[6px] font-bold">Start Date & Time :
                        <span className="font-normal mr-1">{moment(details?.startDate).format('Do MMMM  YY, hh:mm a')}</span>
                    </p>
                    <p className="m-0 flex flex-col text-[#212529] text-[6px] font-bold">End Date & Time :
                        <span className="font-normal">{moment(details?.endDate).format('Do MMMM  YY, hh:mm a')}</span>
                    </p>
                </div>
                <div className="my-2 border-b-1 border-[#3a4048]">
                    <p className="m-0 text-[#212529] text-[8px] font-bold">Notes:
                        <span className="font-normal ml-1 text-[7px]">{details?.notes}</span>
                    </p>
                </div>
                <div className="mt-2 flex justify-between gap-1">
                    <p className="m-0 flex flex-col justify-center items-center cursor-pointer">
                        <span className="text-[7px] font-bold w-[18px] h-[18px] flex justify-center items-center rounded-full bg-[#212529] text-white hover:bg-[#495057] hover:text-[#212529] transition duration-300 ease-in-out">
                            <i className="bi bi-building-fill-add" />
                        </span>
                        <span className="text-[5px] font-bold">
                            Hotel
                        </span>
                    </p>
                    <p className="m-0 flex flex-col justify-center items-center cursor-pointer">
                        <span className="text-[7px] font-bold w-[18px] h-[18px] flex justify-center items-center rounded-full bg-[#212529] text-white hover:bg-[#495057] hover:text-[#212529] transition duration-300 ease-in-out">
                            <i className="bi bi-card-checklist" />
                        </span>
                        <span className="text-[5px] font-bold">
                            Things to do
                        </span>
                    </p>
                    <p className="m-0 flex flex-col justify-center items-center cursor-pointer">
                        <span className="text-[7px] font-bold w-[18px] h-[18px] flex justify-center items-center rounded-full bg-[#212529] text-white hover:bg-[#495057] hover:text-[#212529] transition duration-300 ease-in-out">
                            <i className="bi bi-images" />
                        </span>
                        <span className="text-[5px] font-bold">
                            Photos
                        </span>
                    </p>
                    <p className="m-0 flex flex-col justify-center items-center cursor-pointer">
                        <span className="text-[7px] font-bold w-[18px] h-[18px] flex justify-center items-center rounded-full bg-[#212529] text-white hover:bg-[#495057] hover:text-[#212529] transition duration-300 ease-in-out">
                            <i className="bi bi-pen" />
                        </span>
                        <span className="text-[5px] font-bold">
                            Edit
                        </span>
                    </p>
                    <p className="m-0 flex flex-col justify-center items-center cursor-pointer">
                        <span className="text-[7px] font-bold w-[18px] h-[18px] flex justify-center items-center rounded-full bg-[#212529] text-white hover:bg-[#495057] hover:text-[#212529] transition duration-300 ease-in-out">
                            <i className="bi bi-trash" />
                        </span>
                        <span className="text-[5px] font-bold">
                            Delete
                        </span>
                    </p>
                    <p className="m-0 flex flex-col justify-center items-center cursor-pointer">
                        <span className="text-[7px] font-bold w-[18px] h-[18px] flex justify-center items-center rounded-full bg-[#212529] text-white hover:bg-[#495057] hover:text-[#212529] transition duration-300 ease-in-out">
                            <i className="bi bi-plus-circle" />
                        </span>
                        <span className="text-[5px] font-bold">
                            Add Place
                        </span>
                    </p>
                    <p className="m-0 flex flex-col justify-center items-center cursor-pointer">
                        <span className="text-[7px] font-bold w-[18px] h-[18px] flex justify-center items-center rounded-full bg-[#212529] text-white hover:bg-[#495057] hover:text-[#212529] transition duration-300 ease-in-out">
                            <i className="bi bi-currency-rupee" />
                        </span>
                        <span className="text-[5px] font-bold">
                            Add Expense
                        </span>
                    </p>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} />
        </>
    )
};

export default TripDetails;