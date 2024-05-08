import { useState } from "react"
import NewExpenseForm from "./NewExpenseForm"

const NewExpense = function (props) {
    const [showDiv, setShowDiv] = useState(false)
    const toggleDiv = function (cardClassName){
        if(cardClassName == 'add-expenses'){
            
        }
        }
    return(
        <div>
            <NewExpenseForm selected={showDiv} onChangeDiv ={toggleDiv}/>
        </div>
    )
}

export default NewExpense