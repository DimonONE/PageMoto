import React, { useState } from "react"
import InputMask from 'react-input-mask';

export const YouTel = (props) => {
    const [value, setValue] = useState('')
    const onChange = (event) => {
        setValue(event.target.value)
    }
    console.warn("Ошибка -> Warning: findDOMNode")
    return(
        
        <InputMask className="shadow tel" value={value} onChange={onChange} mask="+7\ (999) 99-99-99"  
        maskChar="_" type="tel" name="email" placeholder={props.placeholder} data-constraints="@NotEmpty @Phone"/>
)}