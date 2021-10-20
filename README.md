# Steam Games Sale App

## Overview
This application is built using React. It shows the Steam video games that are on sale, and also gives users an overview of the different ratings (if available) for each of the game.

### Resources
Steam is a video game digital distribution service by Valve. For more information on Steam: https://en.wikipedia.org/wiki/Steam_(service)

To obtain the sale prices and ratings, the app mainly makes API calls to the CheapShark API. CheapShark is a price comparison website for digital PC Games. They keep track of prices across multiple stores including Steam, GreenManGaming, Fanatical, and many others. For more information on the CheapShark API: https://apidocs.cheapshark.com/

## Setup
### Downloading the repository
Clone the repository fromGithub. On your terminal or Git Bash, type the following:
```shell
git clone https://github.com/jeyren95/px-frontend-capstone.git
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
npm run build:start
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


### Search page
<img width="695" src="https://user-images.githubusercontent.com/65485512/138025037-1a4a6d66-8ad1-4e44-ba83-20b88e46b0fb.png" alt="search-page" />

- This page displays the most relevant results from the user's search 


### Game details page
<img width="695" src="https://user-images.githubusercontent.com/65485512/138037503-4e996050-3ef2-4f45-ab7b-bb6b18964592.png" alt="game-details-page />

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

### Bookmarks page
#### Without any saved games
<img width="695" src="https://user-images.githubusercontent.com/65485512/138038154-8e6bc6a0-19e6-4e02-98cf-ed4443939be5.png" alt="bookmarks-no-saved-games-page" />

- If there are no bookmarked games from the user, this page should display a message to indicate that there are no bookmarked games yet

#### With saved games
<img width="695" src="https://user-images.githubusercontent.com/65485512/138037887-a0fcd69c-0478-4f14-a0d4-6088151517c4.png" alt="bookmarks-saved-page" />

- If the user has bookmarked any games, those games should appear on this page

- The user should also be able to remove any bookmarked games from the page by clicking on the "Remove from bookmarks" button

### Styleguidist page
<img width="695" src="https://user-images.githubusercontent.com/65485512/138038405-75fa4a4c-1932-4d8f-9d2f-4d22138de514.png" alt="styleguidist-page" />

- This is the page made using React-styleguidist, where users can play around and test out the different components that have been used to develop this application
