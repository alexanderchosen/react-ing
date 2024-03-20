import ExpenseTab from "./components/ExpenseTab";
import './index.css'
import Card from './components/Card'

function App (){
  const expenses = [
    {
      id: "1",
      title: "Transport Fare",
      amount: 400,
      date: new Date(2024, 3, 13)
    },
    {
      id: "2",
      title: "Daily Feeding",
      amount: 2500,
      date: new Date(2024, 3, 13)
    },
    {
      id: "3",
      title: "Data Subscription",
      amount: 1000,
      date: new Date(2024, 3, 13)
    },
    {
      id: "4",
      title: "Miscellaneous",
      amount: 3000,
      date: new Date(2024, 3, 15)
    },
    {
      id: "5",
      title: "Hostel Fee",
      amount: 150000,
      date: new Date(2024, 3, 17)
    }
  ]

  return (
    <Card className="expense-tab">
      <ExpenseTab
        title = {expenses[0].title}
        amount = {expenses[0].amount}
        date = {expenses[0].date}
      ></ExpenseTab>
      <ExpenseTab
        title = {expenses[1].title}
        amount = {expenses[1].amount}
        date = {expenses[1].date}
      ></ExpenseTab>
      <ExpenseTab
        title = {expenses[2].title}
        amount = {expenses[2].amount}
        date = {expenses[2].date}
      ></ExpenseTab>
      <ExpenseTab
        title = {expenses[3].title}
        amount = {expenses[3].amount}
        date = {expenses[3].date}
      ></ExpenseTab>
      <ExpenseTab
        title = {expenses[4].title}
        amount = {expenses[4].amount}
        date = {expenses[4].date}
      ></ExpenseTab>
    </Card>
  )
}

export default App;
