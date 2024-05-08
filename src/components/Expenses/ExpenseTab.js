import Card from "../Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseTab.css"

function ExpenseTab (props){
    return (
        <Card className="expenses">
            <div className="expenses-title">
                <ExpenseDate date = {props.date}/>
                <h2>{props.title}</h2>
            </div>
            <div className="expenses-amount"> ${props.amount} </div>
        </Card>
    )
}

export default ExpenseTab