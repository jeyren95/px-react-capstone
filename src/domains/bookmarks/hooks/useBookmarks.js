import React from "react";

const INITIAL_BOOKMARKS_STATE = localStorage.getItem("bookmarks") ? JSON.parse(localStorage.getItem("bookmarks")) : []

// useReducer => add/delete from bookmarks state
const bookmarksReducer = (bookmarks, action) => {
    switch(action.type) {
        case "add bookmark":
            localStorage.setItem("bookmarks", JSON.stringify([...bookmarks, action.bookmark]))
            return [...bookmarks, action.bookmark]
        case "delete bookmark":            
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks.filter((bookmark) => bookmark.gameInfo.steamAppID !== action.bookmark.gameInfo.steamAppID)))
            return bookmarks.filter((bookmark) => bookmark.gameInfo.steamAppID !== action.bookmark.gameInfo.steamAppID)
        default:
            return bookmarks
    }
} 


const useBookmarksState = () => {
    // [current state, dispatch] = useReducer(actions, initial state)
    const [bookmarks, dispatch] = React.useReducer(bookmarksReducer, INITIAL_BOOKMARKS_STATE)

    const addBookmark = (game) => {
        dispatch({ type: "add bookmark", bookmark: game })
    }

    const deleteBookmark = (game) => {
        dispatch({ type: "delete bookmark", bookmark: game })
    }

    return {
        bookmarks,
        addBookmark,
        deleteBookmark
    }
}


// useContext => share bookmarks with entire app
const BookmarksContext = React.createContext()
BookmarksContext.displayName = "BookmarksContext"

export const BookmarksContextProvider = ({ children }) => {
    const bookmarksState = useBookmarksState()

    return (
        <BookmarksContext.Provider value={bookmarksState}>
            { children }
        </BookmarksContext.Provider>
    )
}


export const useBookmarks = () => {
    const bookmarksState = React.useContext(BookmarksContext)

    // add useEffect to refresh data or create another hook

    if (!bookmarksState) {
        throw new Error("App is not wrapped in bookmarks context provider")
    } else {
        return bookmarksState
    }
}