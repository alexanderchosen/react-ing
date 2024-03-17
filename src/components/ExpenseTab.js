function ExpenseTab (props){

    return (
        <div>
            <div>date = {props.date.toISOString()}</div>
            <div> {props.title} </div>
            <div> {props.amount} </div>
        </div>
    )
}

export default ExpenseTab