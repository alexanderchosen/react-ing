import { useState } from "react"
import Card from "../Card"
import "./NewExpenseForm.css"

const NewExpenseForm = function (props){
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [clickedCardClassName, setClickedClassName]= useState('')
    const changeDiv = (event)=>{
        const cardClassName = event.currentTarget.closest('.add-expenses').className
        setClickedClassName(cardClassName)
        props.onChangeDiv(cardClassName)
    }

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
    }
    const submitHandler = function(event){
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <div>
            <Card className = "add-expenses">
                <div className="new-expense-btn">
                <button id="btn-new-expense" onClick={changeDiv}> ADD NEW EXPENSE</button>
                </div>
            </Card>
            <Card className ="add-expenses form">
            <form onSubmit={submitHandler}>
                <div className="title-and-amount">
                    <div className="title">
                        <label> Title </label>
                        <input
                        type="text"
                        placeholder="Enter Title Here"
                        value={enteredTitle}
                        onChange={titleChangeHandler}>
                        </input>
                    </div>
                    <div className="amount">
                        <label> Amount </label>
                        <input
                        type="number"
                        placeholder="Enter Amount Here"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}>
                        </input>
                    </div>
                </div>
                <div className="date">
                    <label> Date </label>
                    <input
                    type="date"
                    min="2020-01-01"
                    max="2024-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler}>
                    </input>
                </div>
                <div className="submit-btn">
                    <button id="btn-new-expense"
                    type="submit" onClick={changeDiv}> Add Expense </button>
                </div>
            </form>
            </Card>
        </div>
    )
}


export default NewExpenseForm