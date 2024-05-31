export const Button = ({type, text}) => {
    return (
        <button type={type} className = "rounded-lg uppercase border border-green bg-transparent text-green px-3 py-2 text-sm font-bold hover:bg-green hover:text-background" >
            {text}
        </button>
    )
}