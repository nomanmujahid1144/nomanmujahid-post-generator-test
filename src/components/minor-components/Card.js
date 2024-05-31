export const Card = ({children}) => {
    return (
        <div className='w-full bg-card-gray border rounded-lg max-w-full m-0 px-8 py-12 no-underline transition-colors duration-200'>
            {children}
        </div>
    )
}