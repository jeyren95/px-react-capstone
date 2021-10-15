import { SelectField } from "./select-field";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
 
test("<SelectField />", () => {
    render(<SelectField 
    label="This is a select field" 
    name="select-field"
    options={["Option 1", "Option 2", "Option 3", "Option 4"]}
    />
    )

    user.selectOptions(screen.getByRole("combobox"), "Option 2")
    expect(screen.getByRole("option", {name: "Option 1"}).selected).toBe(false)
    expect(screen.getByRole("option", {name: "Option 2"}).selected).toBe(true)
    expect(screen.getByRole("option", {name: "Option 3"}).selected).toBe(false)
    expect(screen.getByRole("option", {name: "Option 4"}).selected).toBe(false)
})