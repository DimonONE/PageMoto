import React, { useState } from "react"
import InputMask from 'react-input-mask';
import { Validator } from "../Data/Store";

export const YouTel = (props) => {
    const [value, setValue] = useState('')
    const [err, setErr] = useState(false)
    const onChange = (event) => {
        setValue(event.target.value)
    }

      const onFocus = (e) => {
        setErr(false)
      }

      const onBlur = () => {
          for (let char of value){
              if(char === "_"){
                  return setErr(true);
              }
          }
        setErr(true)
      }

    console.warn("Ошибка -> Warning: findDOMNode")
    return(
        <div>
            <InputMask className="shadow tel" value={value} onChange={onChange} mask="+7\ (999) 99-99-99"  
            maskChar="_" onBlur={onBlur} onFocus={onFocus}  placeholder={props.placeholder} />
            {err && <p className="mfValidation show error">{Validator["@NotEmpty"].message}</p>}
        </div>
)}