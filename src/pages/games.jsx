import { Game, useGames } from "domains/games";
import { Button } from "components/button";
import { SearchForm } from "domains/games";
import { SelectField } from "components/select-field";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid"

export const GamesPage = () => {
    const { isLoading, isError, error, data, setSelectedSortingOption, page, setPage } = useGames()

    const renderGames = () => {
        return data.map((data) => {
            return (
                <Game
                key={data.steamAppID}
                id={data.dealID}
                title={data.title}
                salePrice={data.salePrice}
                normalPrice={data.normalPrice}
                imageUrl={data.thumb}
                savings={data.savings}
                />
            )
        })
    }

    return (
        <div className="flex-1">
            <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Steam Games On Sale!</h1>
                </div>
                <div className="grid grid-cols-2 mb-12">
                    <SearchForm />
                    <SelectField 
                    id="sort-games"
                    label="Sort Games"
                    name="sort-games"
                    options={["Deal Rating", "Title", "Price", "Metacritic", "Savings", "Reviews", "Release"]}
                    onChange={(e) => {
                        setPage(0)
                        setSelectedSortingOption(e.target.value)
                    }}
                    className="w-1/2"
                    />
                </div>

                <div className="space-x-8 mb-10 flex items-center justify-center">            
                    <Button 
                    type="button" 
                    variant="primary"
                    onClick={() => page > 0 && setPage(page - 1)}
                    >
                        <ArrowLeftIcon className="h-5 w-5 mr-3" />
                        Previous
                    </Button>
                    <span className="text-lg font-bold">Page {page + 1}</span>
                    <Button 
                    type="button" 
                    variant="primary"
                    onClick={() => setPage(page + 1)}
                    >
                        Next
                        <ArrowRightIcon className="h-5 w-5 ml-3" />
                    </Button>
                </div>
                { isLoading ? <h1>Loading...</h1>
                :
                isError ? <h1>Error: {error.message}</h1>
                :
                <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-4 xl:gap-x-6">
                    {renderGames()}
                </div>
                }

            </div>
        </div>
    )
}