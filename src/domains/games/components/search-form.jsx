import { useHistory } from "react-router-dom";
import { TextInputField } from "components/textinput-field";
import { Button } from "components/button";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    searchInput: Yup.string().required("Please enter a search term.")
})

export const SearchForm = () => {
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            searchInput: ""
        },
        validationSchema,
        onSubmit: (values) => {
            history.push(`/search/${values.searchInput}`)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="space-y-2">
                <TextInputField 
                id="game-search"
                name="searchInput"
                label="Search for a game!"
                type="text"
                value={formik.values.searchInput}
                className="w-1/2"
                onChange={formik.handleChange}
                />
                {formik.errors && <p className="text-sm text-red-600">{formik.errors.searchInput}</p>}
                <Button type="submit" variant="outline">Go</Button>
            </div>
        </form>
    )
}