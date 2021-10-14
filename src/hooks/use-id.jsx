import React from "react";

let id = 0
export const useId = (providedId) => {
    const [ensuredId] = React.useState(providedId || String(id++))
    return ensuredId
}