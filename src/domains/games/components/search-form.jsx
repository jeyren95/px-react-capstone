import React from "react";
import { useHistory } from "react-router-dom";
import { TextInputField } from "components/textinput-field";
import { Button } from "components/button";


export const SearchForm = () => {
    const [searchInput, setSearchInput] = React.useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search/${searchInput}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-2">
                <TextInputField 
                id="game-search"
                name="game-search"
                label="Search for a game!"
                type="text"
                value={searchInput}
                className="w-1/2"
                onChange={(e) => setSearchInput(e.target.value)}
                />
                <Button type="submit" variant="outline">Go</Button>
            </div>
        </form>
    )
}