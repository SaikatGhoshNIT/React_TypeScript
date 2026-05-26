import type { ComponentProps } from "react";

type ButtonProps = {
   variant?: 'primary' | 'secondary' | 'ghost-destructive';
    //name: string
    //children: React.ReactNode; 
    //disabled?:boolean
    /* This is a special type in React that represents any valid React content, 
    such as strings, numbers, elements, or even other components.*/
} & ComponentProps<'button'>;

//function Button({ name }: ButtonProps) {
function Button({ ...props }: ButtonProps) {
  return (
    <button {...props} className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>{props.children}</button>
  )
}

export default Button