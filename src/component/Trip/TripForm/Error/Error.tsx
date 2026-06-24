import React from "react";
import type IError from "./IError";

const Error: React.FC<IError> = ({ errorMessage }) => {
    return (
        <p className="text-red-500 text-sm">{errorMessage}</p>
    )
}

export default Error;