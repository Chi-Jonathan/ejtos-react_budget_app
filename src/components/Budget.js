import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget, dispatch, remaining} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(newBudget<20000 && remaining>0){
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            })
        }else if(newBudget>=20000){
            alert("The value cannot exceed 20000");
        }else{
            alert("Cannot reduce budget below spending");
        }
    }
    return (
    <div className='alert alert-secondary'>
    <span>Budget: £</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} ></input>
    </div>
    );
};
export default Budget;