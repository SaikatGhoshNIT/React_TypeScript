import HabitForm from './Components/HabitForm';
import HabitList from './Components/HabitList';
import Header from './Components/Header';
import './index.css'


function App() {
  return (
    <div className='max-w-3xl mx-auto p-4 flex flex-col gap-4'>
      <Header/>
      <HabitForm/>
      <HabitList/>
    </div>
  )
}

export default App