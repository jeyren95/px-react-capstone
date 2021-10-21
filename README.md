# Steam Games Sale App

## Overview
This application is built using React. It shows the Steam video games that are on sale, and also gives users an overview of the different ratings (if available) for each of the game.

### Resources
Steam is a video game digital distribution service by Valve. For more information on Steam: https://en.wikipedia.org/wiki/Steam_(service)

To obtain the sale prices and ratings, the app mainly makes API calls to the CheapShark API. CheapShark is a price comparison website for digital PC Games. They keep track of prices across multiple stores including Steam, GreenManGaming, Fanatical, and many others. For more information on the CheapShark API: https://apidocs.cheapshark.com/

## Setup
### Downloading the repository
Clone the repository from Github. On your terminal or Git Bash, type the following:
```shell
git clone https://github.com/jeyren95/px-frontend-capstone.git
```

### Install necessary packages
From the root folder i.e. `px-frontend-capstone`:

To install the packages, you can run the following:
```shell
npm install
```

### Run Application 
From the root folder i.e. `px-frontend-capstone`:

To run the app in development mode, you can run the following:
```shell
npm run start
```

To run the styleguidist in development mode, you can run the following:
```shell
npm run start:styleguidist
```

### Build Application
From the root folder i.e. `px-frontend-capstone`:

To build the app itself, you can run the following:
```shell
npm run build
```

To build the styleguidist, you can run the following:
```shell
npm run start:build
```

## Features
### Home page
<img width="695" src="https://user-images.githubusercontent.com/65485512/138024076-02b8b32b-93da-460e-8b28-6ed98fac38ef.png" alt="home-page" />

- This is the first page that the user sees when the app is opened on the browser, and the user will be able to see the different Steam games that are on sale. These games are sorted (by default) according to the deal rating (in descending order). Users can click on the "Learn More" button on each game to view more details about the game such as steam ratings, steam comments and release date.

- There are 4 other features on the home page, which include the following:
    1. The user can navigate across different pages of games, by clicking the "Previous" or "Next" buttons
    1. On click of the "Your Favorites" button, the user will be navigated to the Bookmarks page, where the user's saved games will be displayed.
    1. The user is also able to search for a desired game, and will be navigated to the Search page, where the search results will be displayed.
    1. The user can also sort the games based on the following criteria:
        1. Deal Rating (default)
        1. Title
        1. Price
        1. Metacritic
        1. Savings
        1. Reviews
        1. Release

#### Relevant API calls
- In order to retrieve the games, a `fetch` API call was made to the CheapShark API `deals` endpoint

- The following additional queries were used to make the call:
    1. `pageNumber` 
    1. `pageSize` 
    1. `storeID` represents which game store the games would be retrieved from
    1. `onSale` represents whether only games that are on sale would be retrieved 
    1. `sortBy` 

##### Example:
```shell
https://www.cheapshark.com/api/1.0/deals?pageNumber=1&pageSize=12&storeID=1&onSale=1&sortBy=Savings
```
- storeID = 1 indicates that only games from the Steam store would be retrieved
- onSale = 1 indicates that only games that are on sale would be retrieved

### Search page
<img width="695" src="https://user-images.githubusercontent.com/65485512/138025037-1a4a6d66-8ad1-4e44-ba83-20b88e46b0fb.png" alt="search-page" />

- This page displays the most relevant results from the user's search 

#### Relevant API calls
- In order to retrieve the searched games, 2 `fetch` API calls had to be made to the CheapShark API `games` endpoint upon navigation to the search page

- The first call was used to retrieve the relevant games based on the search term inputted by the user

- The following additional queries were used to make the first call:
    1. `title` represents the search term made by the user

##### Example
```shell
https://www.cheapshark.com/api/1.0/games?title=batman
```
- The above call would only retrieve details such as the game IDs, and not the desired game details that the Search page would like to display, which is why a second API call had to be made to retrieve those relevant details

- Given the game IDs that were retrieved from the first API call, the second API call involved using each game ID as a query to retrieve the game details for each respective game 

- The following additional queries were used to make the second call:
    1. `id` represents the game ID that was retrieved from the previous call

##### Example 
```shell
https://www.cheapshark.com/api/1.0/games?id=612
```


### Game details page
<img width="695" src="https://user-images.githubusercontent.com/65485512/138037503-4e996050-3ef2-4f45-ab7b-bb6b18964592.png" alt="game-details-page" />

- This page displays the game details of the specific game that was selected by the user

- Game details include the following:
    1. Sale price
    1. Game title
    1. Game release date
    1. Steam % ratings
    1. Steam rating comments
    1. Metacritic score

- The user will also be able to save the game into the bookmarks by clicking on the "Save this to bookmarks!" button

- The saved game will then appear in the Bookmarks page

#### Relevant API calls
- In order to retrieve the game details, a `fetch` API call had to be made to the CheapShark API `deals` endpoint upon navigation to the page

- The following additional queries were used to make the call:
    1. `id` represents the deal id of the game

##### Example
```shell
https://www.cheapshark.com/api/1.0/deals?id=ZKZdAvI3UHaMPYAg0bURT7wf%2F%2FH6dh2Ita%2Fht3qdoJM%3D
```

### Bookmarks page
#### Without any saved games
<img width="695" src="https://user-images.githubusercontent.com/65485512/138038154-8e6bc6a0-19e6-4e02-98cf-ed4443939be5.png" alt="bookmarks-no-saved-games-page" />

- If there are no bookmarked games from the user, this page should display a message to indicate that there are no bookmarked games yet

#### With saved games
<img width="695" src="https://user-images.githubusercontent.com/65485512/138037887-a0fcd69c-0478-4f14-a0d4-6088151517c4.png" alt="bookmarks-saved-page" />

- If the user has bookmarked any games, those games should appear on this page

- The user should also be able to remove any bookmarked games from the page by clicking on the "Remove from bookmarks" button

- Another feature of this page include the following:
    1. The bookmarked games are saved in the local storage as well, this means that even if the user closes the application and re-opens the application, the bookmarked games will still persist

### Styleguidist page
<img width="695" src="https://user-images.githubusercontent.com/65485512/138038405-75fa4a4c-1932-4d8f-9d2f-4d22138de514.png" alt="styleguidist-page" />

- This is the page made using React-styleguidist, where users can play around and test out the different components that have been used to develop this application
