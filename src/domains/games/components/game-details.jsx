import { Button } from "components/button";
import { useGameDetails } from "domains/games";
import { useBookmarks } from "domains/bookmarks";

export const GameDetails = () => {
    const { isLoading, isError, data, error } = useGameDetails()
    const { bookmarks, addBookmark, deleteBookmark } = useBookmarks()
    
    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            { isLoading ? <h1>Loading...</h1>
            :
            isError ? <h1>Error: {error.message}</h1>
            :
            <>
                <div className="mt-10 lg:mt-0 lg:row-span-2 lg:self-center">
                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                        <img className="w-full" src={data.gameInfo.thumb} alt="" />
                    </div>
                </div>

                <div className="lg:max-w-lg lg:self:end ml-6">
                    <div className="mt-4">
                        USD
                        <span className="text-decoration: line-through ml-1">{data.gameInfo.retailPrice}</span>
                        <span className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ml-3">{data.gameInfo.salePrice}</span>
                    </div>
                    <div className="mt-4">
                        <div className="items-center space-y-1">
                            <p className="text-lg font-bold text-gray-900 sm:text-xl">{data.gameInfo.name}</p>
                            <p className="text-md text-gray-900">Release Date: {(new Date(data.gameInfo.releaseDate * 1000)).toDateString().slice(3)}</p>
                        </div>
                        <div className="mt-5 space-y-1">
                            <p className="text-base text-gray-500">Steam % rating: {Number(data.gameInfo.steamRatingPercent) > 0 ? `${data.gameInfo.steamRatingPercent}%` : "No ratings"}</p>
                            <p className="text-base text-gray-500">Steam rating comments: {data.gameInfo.steamRatingText ? data.gameInfo.steamRatingText : "No rating comments"}</p>
                            <p className="text-base text-gray-500">Metacritic score: {Number(data.gameInfo.metacriticScore) > 0 ? data.gameInfo.metacriticScore : "No score"}</p>
                        </div>
                        {(bookmarks.filter((bookmark) => bookmark.gameInfo.steamAppID === data.gameInfo.steamAppID)).length > 0 ?
                        <Button 
                        type="button"
                        variant="outline"
                        className="mt-5"
                        onClick={() => deleteBookmark(data)}
                        >
                            Remove from bookmarks
                        </Button>
                        :
                        <Button
                        type="button"
                        variant="primary"
                        className="mt-5"
                        onClick={() => addBookmark(data)}
                        >
                            Save this to bookmarks!
                        </Button>
                        }

                    </div>
                </div>  
            </> 
            }  
        </div>
    )
}