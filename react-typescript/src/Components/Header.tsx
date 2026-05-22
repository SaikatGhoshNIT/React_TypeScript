import React from 'react'
import Button from './Button';

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4'>
        <div className='flex flex-col gap-1'>
            <h1 className='text-3xl font-bold'>Habit Tracker</h1>
            <span className='text-zinc-400 text-sm'>1/1 done today</span>
        </div>
        <div className='flex flex-col items-end gap-1'>
            <span className='text-zinc-400 text-sm'>Apr 6 - Apr 12</span>
            <div className='flex justify-between gap-2'>
                {/* <Button name='Prev'/>
                <Button name='Next'/> */}
                {/* We can also use Children , a new way to pass content to components */}
                <Button>Prev</Button>
                <Button>Next</Button>
            </div>
        </div>
    </header>
  )
}

export default Header