import React, { useState } from "react"
import InputMask from 'react-input-mask';

export const YouTel = (props) => {
    return(
        <InputMask className="shadow tel" value={props.value} onChange={props.onChange} mask="+7\ (999) 99-99-99"  
        maskChar="_" type="tel" name="email" placeholder={props.placeholder} data-constraints="@NotEmpty @Phone"/>
)}