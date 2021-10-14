import cn from "classnames"

export const Button = ({ variant, children, ...props }) => {
    return (
        <button
        {...props}
        className={cn(`
        inline-flex
        justify-center
        items-center
        py-2
        px-4
        border
        shadow-sm
        text-sm
        font-medium
        rounded-md
        focus:outline-none  
        focus:ring-2 
        focus:ring-offset-2
        `,
        colorByVariant[variant],
        props.className
        )}
        >
            { children }
        </button>
    )
}

const colorByVariant = {
    primary: "text-white border-transparent bg-blue-500 hover:bg-blue-600 focus:ring-blue-500",
    outline: "text-blue-500 border-blue-500 focus:ring-blue-500"
}