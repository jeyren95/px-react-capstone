import React from "react";
import { FieldContext } from "./field";

export const Label = ({ children }) => {
    const id = React.useContext(FieldContext)

    return (
        <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900"
        >
            { children }
        </label>
    )
}
