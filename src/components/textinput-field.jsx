import { Label } from "./label";
import { TextInput } from "./text-input";
import { Field } from "./field";

export const TextInputField = ({ id, label, ...inputProps}) => {

    return (
        <Field providedId={id}>
            <Label>{label}</Label>
            <TextInput 
            {...inputProps}
            />
        </Field>
    )


}