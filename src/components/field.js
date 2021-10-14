import React from "react";
import { useId } from "hooks/use-id";

export const FieldContext = React.createContext()
FieldContext.displayName = "FieldContext"

export const Field = ({ providedId, children }) => {
    const ensuredId = useId(providedId)
    
    return (
        <FieldContext.Provider value={ensuredId}>
            <div className="space-y-2">{ children }</div>
        </FieldContext.Provider>
    )
}