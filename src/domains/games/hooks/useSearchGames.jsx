import { useParams } from "react-router-dom";
import { fetchSearchedGames, fetchGameByGameId } from "domains/games";
import { useQuery } from "react-query"

export const useSearchGames = () => {
    const { searchTerm } = useParams()

    const searchGamesQuery = useQuery(["searchedGames", searchTerm], () => {
        const controller = new AbortController()

        const promise = fetchSearchedGames(searchTerm, controller.signal)
        .then((data) => {
            const steamGames = data.filter((game) => game.steamAppID !== null)
            return steamGames
        })
        .then((games) => {
            const promises = games.map((game) => fetchGameByGameId(game.gameID))
            return Promise.all(promises)
        })
        .then((data) => {
            const gamesOnSale = []
            data.forEach((game) => {
                const steamDeals = game.deals.filter((deal) => Number(deal.savings) > 0 && deal.storeID === "1")
                if (steamDeals.length > 0) {
                    gamesOnSale.push(game)
                }
            })
            return gamesOnSale
        })

        promise.cancel = () => controller.abort()
        
        return promise
    },
    {
        keepPreviousData: true
    }
    )

    return searchGamesQuery

}
