import { useBookmarks, Bookmark } from "domains/bookmarks";

export const BookmarksPage = () => {
    const { bookmarks, deleteBookmark } = useBookmarks()

    const renderBookmarks = () => {
        return bookmarks.map((bookmark) => {
            return (
                <Bookmark 
                key={bookmark.gameInfo.steamAppID}
                title={bookmark.gameInfo.name}
                normalPrice={bookmark.gameInfo.retailPrice}
                salePrice={bookmark.gameInfo.salePrice}
                imageUrl={bookmark.gameInfo.thumb}
                deleteBookmark={() => deleteBookmark(bookmark)}
                />
            )
        })
    }

    return (
        <div className="flex-1">
            <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Your Favorites</h1>
                </div>
                <div>
                {bookmarks ? 
                bookmarks.length > 0 ? 
                renderBookmarks()
                :
                <h1>You have no saved games yet!</h1>
                :
                <h1>Loading...</h1>
                }
                </div>
            </div>
        </div>
    )

}