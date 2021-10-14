```jsx
const Demo = () => {
    const [input, setInput] = React.useState("")

    return (
        <TextInput 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-1/2"
        />
    )
}
<Demo />

```