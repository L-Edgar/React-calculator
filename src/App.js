import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Alert from './components/Alert'
import {v4} from 'uuid'
const initExpenses=[
  {id:v4(),charge:'rent',amount:16000},
  {id:v4(),charge:'car payment',amount:50000},
  {id:v4(),charge:'credt card bill',amount:5000}
]

function App() {
  //state values
  //all expenses, add expenses
  const [expenses,setExpenses]=useState(initExpenses)
  //single expense
  const [charge, setCharge]=useState('')
  //single amount
  const [amount,setAmount]=useState('')
 //functionality
 const handleCharge=e=>{
  setCharge(e.target.value)
 }
 const handleAmount=e=>{
  setAmount(e.target.value)
 }
 const handleSubmit=e=>{
  e.preventDefault()
 }
  return (
    <>
    <Alert></Alert>
    <h1>Budget calculator</h1>
    <main className="App">
    <ExpenseForm></ExpenseForm>
    <ExpenseList expenses={expenses}></ExpenseList>
    </main>
    
    <h1>
      total spending:<span className='total'>
        ${expenses.reduce((acc,curr)=>{
          return (acc+=curr.amount);
        },0)}
      </span>
    </h1>
    </>
  );
}

export default App;
