import React from "react";
import type ILabel from "./ILabel";

const Label: React.FC<ILabel> = ({ title }) => {
    return (
        <p className="text-xs text-[#dee2e6]">{title}</p>
    );
};

export default Label;