// fetch games by deal rating (default)
export const fetchGames = (page, selectedSortingOption, signal) =>
    fetch(`https://quiet-coast-60910.herokuapp.com/https://www.cheapshark.com/api/1.0/deals?pageNumber=${page}&pageSize=12&storeID=1&onSale=1&sortBy=${selectedSortingOption}`, {signal})
    .then((res) => res.json())

// fetch 1 game via dealID
export const fetchGame = (id, signal) => 
    fetch(`https://quiet-coast-60910.herokuapp.com/https://www.cheapshark.com/api/1.0/deals?id=${id}`, {signal})
    .then((res) => res.json())

// fetch searched games
export const fetchSearchedGames = (searchTerm, signal) => 
    fetch(`https://quiet-coast-60910.herokuapp.com/https://www.cheapshark.com/api/1.0/games?title=${searchTerm}`, {signal})
    .then((res) => res.json())

// fetch games by game ID
export const fetchGameByGameId = (id) =>
    fetch(`https://quiet-coast-60910.herokuapp.com/https://www.cheapshark.com/api/1.0/games?id=${id}`)
    .then((res) => res.json())

