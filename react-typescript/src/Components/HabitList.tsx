import React from 'react'
import Button from './Button';
import { eachDayOfInterval, endOfWeek, format, isFuture, startOfWeek } from 'date-fns';

function HabitList(){

const habits = [{id: 1, name: 'Drink Water'}]

if(habits.length === 0){
    return (
        <div className='text-center text-zinc-400 py-12'>No habits yet. Add a habit to get started!</div>
    )
}

    return (
    <div className='flex flex-col gap-3'>
        {habits.map((habit) => {
            return(
                <HabitItems key={habit.id} habit={habit}></HabitItems>
            )
        })}
    </div>
  )
}

type HabitItemProps = {
    habit: {
        id: number;
        name: string;
    }
}

function HabitItems({habit : {name}}: HabitItemProps){
    const visibleDate = eachDayOfInterval({
        start: startOfWeek(new Date(), {weekStartsOn: 1}),
        end: endOfWeek(new Date(), {weekStartsOn: 1})
    });
    return(
    <div className='rounded-lg bg-zinc-800 p-4 flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
            <div className='flex items-center gap-3'>
            <span className='text-zinc-300 font-medium'>{name}</span>
            <span className='text-sm text-amber-400'>🔥 3</span>
            </div>
            <Button>Delete</Button>
        </div>
        <div className='flex gap-2'>
            {visibleDate.map(date => (
                <Button key={date.toISOString()} disabled={isFuture(date)}>
                    <span className='font-medium'>{format(date,"EEE")}</span>
                    <span>{format(date,"d")}</span>
                </Button>
            ))}
        </div>
    </div>)
}

export default HabitList