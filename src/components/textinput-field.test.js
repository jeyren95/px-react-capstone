import { TextInputField } from "./textinput-field";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";

const TestBed = () => {
    const [value, setValue] = React.useState("")

    return (
        <div>
            <TextInputField 
            name="input"
            label="This is an input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}        
            />
            <div data-testid="output">{value}</div>
        </div>
    )
}

test("<TextInputField />", () => {
    render(<TestBed />)
    user.type(screen.getByRole("textbox"), "Testing input field")
    expect(screen.getByTestId("output").textContent).toBe("Testing input field")
})