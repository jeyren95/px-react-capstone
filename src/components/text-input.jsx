import React from "react";
import { FieldContext } from "./field";
import cn from "classnames";

export const TextInput = ({ ...inputProps }) => {
    const id = React.useContext(FieldContext)

    return (
        <input 
        id={id}
        { ...inputProps }
        className={cn("block shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md", inputProps.className)}
        />
    )

}