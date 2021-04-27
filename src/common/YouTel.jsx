import React, { useState } from "react"
import InputMask from 'react-input-mask';
import { Validator } from "../Data/Store";

export const YouTel = (props) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }
    const onFocus = (e) => {
        props.setErr(false)
    }
    const onBlur = () => {
        for (let char of value){
            if(char === "_"){
                return props.setErr(true)
            }
        }
    }

    console.warn("Ошибка -> Warning: findDOMNode")
    return(
        <div>
            <React.StrictMode>
                <InputMask className="shadow tel" value={value} onChange={onChange} mask="+7\ (999) 99-99-99"  
                maskChar="_" onBlur={onBlur} onFocus={onFocus}  placeholder={props.placeholder} />
            </React.StrictMode>
            {props.err && <p className="mfValidation show error">{Validator["@NotEmpty"].message}</p>}
        </div>
)}