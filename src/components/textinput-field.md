```jsx
const Demo = () => {
    const [input, setInput] = React.useState("")
    return (
        <div className="space-y-2">           
            <TextInputField 
            id="input"
            type="text"
            name="input"
            label="This is a text input!"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-1/2"
            />
        </div>
    )
}
<Demo />
```