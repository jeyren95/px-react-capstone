import { useSearchGames, Game  } from "domains/games";
import { Button } from "components/button";
import { Link } from "react-router-dom";

export const SearchResultsPage = () => {
    const { isLoading, isError, error, data } = useSearchGames()
    
    const renderSearchedGames = () => {        
        return data.map((game) => {
            const deal = game.deals.filter((deal) => deal.storeID === "1")[0]
            return (
                <Game 
                key={game.info.steamAppID}
                id={deal.dealID}
                title={game.info.title}
                imageUrl={game.info.thumb}
                normalPrice={deal.retailPrice}
                salePrice={deal.salePrice}
                savings={deal.savings}
                />
            )
        })
    }

    return (
        <div className="flex-1">
            <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Search Results</h1>
                </div>
                <Link to="/">
                    <Button type="button" variant="outline" className="mb-10"> 
                        Head back!
                    </Button>
                </Link>
                { isLoading ? <h1>Loading...</h1>
                :
                isError ? <h1>Error: {error.message}</h1>
                :
                data.length > 0 ? 
                <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-4 xl:gap-x-6">
                    {renderSearchedGames()} 
                </div> 
                : 
                <h1>Oops, no results for your search!</h1> 
                }
            </div>
        </div>
    )
    
}