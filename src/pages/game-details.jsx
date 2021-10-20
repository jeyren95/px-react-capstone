import { GameDetails } from "domains/games";

export const GameDetailsPage = () => {
    return (
        <div className="flex-1">
            <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Game Details</h1>
                </div>
                <GameDetails />
            </div>
        </div>
    )
}