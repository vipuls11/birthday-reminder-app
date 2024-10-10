import React, { useState } from 'react'
import data from './components/data'
import './App.css'
import List from './List'

function App() {
const [people, setPelople] = useState(data)
 
const today = new Date();
console.log(today, "today")
const currentMonth = today.getMonth();
console.log(currentMonth, "currentmonth")
const currentDate = today.getDate();
console.log(currentMonth,"currentdate")

// Filter birthdays
const filterDates = people.filter(person => {
  const dob = new Date(person.date); // Convert to Date object
  return dob.getDate() === currentDate && dob.getMonth() === currentMonth;
});

console.log(filterDates)
  return (
    <>
     <main className='main_container'>
      <section className='container'>
        <h3>{filterDates.length} Birthdays Today</h3>
        <List people={filterDates}/>
        <button onClick={()=>setPelople([])}>Clear All</button>
      </section>
     </main>
    </>
  )
}

export default App
