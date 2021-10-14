import { useParams } from "react-router-dom";
import { fetchGame } from "domains/games";
import { useQuery } from "react-query"

export const useGameDetails = () => {
    const { id } = useParams()
    const gameDetailsQuery = useQuery(["gameDetails", id], () => {
        const controller = new AbortController()
        const promise = fetchGame(id, controller.signal)
        promise.cancel = () => controller.abort()
        return promise
    })
    
    return gameDetailsQuery
}
