import React from "react";
import { fetchGames } from "domains/games";
import { useQuery } from "react-query";

export const useGames = () => {
    const [selectedSortingOption, setSelectedSortingOption] = React.useState("Deal Rating")
    const [page, setPage] = React.useState(0)

    const gamesQuery = useQuery(["games", page, selectedSortingOption], () => {
        const controller = new AbortController()
        const promise = fetchGames(page, selectedSortingOption, controller.signal)
        promise.cancel = () => controller.abort()
        return promise
    }, 
    {
        keepPreviousData: true
    })

    return {
        ...gamesQuery,
        setSelectedSortingOption,
        page,
        setPage
    }
}














