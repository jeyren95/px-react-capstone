import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { BookmarksContextProvider } from "domains/bookmarks";

import { AppShell } from "./app-shell";
import { GamesPage } from "./pages/games";
import { GameDetailsPage } from "./pages/game-details";
import { BookmarksPage } from "./pages/bookmarks";
import { SearchResultsPage } from "./pages/search-results";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5000
        }
    }
})

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <QueryClientProvider client={queryClient}>
                <AppShell>
                    <BookmarksContextProvider>
                        <Route path="/games/:id">
                            <GameDetailsPage />
                        </Route>
                        <Route path="/bookmarks">
                            <BookmarksPage />
                        </Route>
                        <Route path="/search/:searchTerm">
                            <SearchResultsPage />
                        </Route>
                        <Route path="/" exact>
                            <GamesPage />
                        </Route> 
                    </BookmarksContextProvider>
                </AppShell> 
            </QueryClientProvider>
        </Switch>
    </BrowserRouter>
    , document.getElementById("root")
)
