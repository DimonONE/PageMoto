import React, { useState } from "react"
import InputMask from 'react-input-mask';
// import { Validator } from "../Data/Store";

export const YouTel = (props) => {
    const [value, setValue] = useState('')
    const onChange = (event) => {
        console.log(typeof( value))
     
        setValue(event.target.value)

    }

    const onBlur = () => {
        if (value < 11){
            alert('Please use only letters.');
        }
            
    }

    console.warn("Ошибка -> Warning: findDOMNode")
    return(
        <div>
            <InputMask className="shadow tel" value={value} onChange={onChange} mask="+7\ (999) 99-99-99"  
            maskChar="_" onBlur={onBlur} placeholder={props.placeholder} />
        </div>
)}