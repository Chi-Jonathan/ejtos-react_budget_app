import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [value, setValue] = React.useState(currency);

    const handleChange = (event) => {
        setValue(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        })
    };

    return (
        <div className='alert alert-secondary'>
            <select value={value} onChange={handleChange}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};
export default Currency;