import { Field } from "./field";
import { Select } from "./select";
import { Label } from "./label";

export const SelectField = ({ label, id, ...selectProps }) => {
    return (
        <Field providedId={id}>
            <Label>{label}</Label>
            <Select 
            {...selectProps}                
            />
        </Field>
    )
}