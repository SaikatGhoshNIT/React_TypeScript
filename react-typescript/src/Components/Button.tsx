
type ButtonProps = {
    //name: string
    children: React.ReactNode; 
    /* This is a special type in React that represents any valid React content, 
    such as strings, numbers, elements, or even other components.*/
}

//function Button({ name }: ButtonProps) {
function Button({ children }: ButtonProps) {
  return (
    <button className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>{children}</button>
  )
}

export default Button