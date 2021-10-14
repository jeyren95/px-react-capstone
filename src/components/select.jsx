import React from "react";
import cn from "classnames"
import { FieldContext } from "./field";

export const Select = ({ options, ...selectProps }) => {
    const id = React.useContext(FieldContext)

    const renderOptions = () => {
        return options.map((option) => {
            return (
                <option key={option} value={option}>{option}</option>
            )
        })
    }

    return (
        <select 
        {...selectProps}
        id={id}
        className={cn("block shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md", selectProps.className)}
        >
            {renderOptions()}
        </select>
    )

}