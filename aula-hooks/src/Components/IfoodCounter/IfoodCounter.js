// rfc traz o snnippet boilerplate

import React, { useState } from 'react'
import './IfoodCounter.css'

export default function IfoodCounter() {

    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

    function up(){
        setButtonStyle("counter-button-minus-active")
        setValue(value+1);
    }
    
    function down(){
        if (value <= 1){
            setButtonStyle("counter-button-minus-desactive")
        }


        if (value > 0){
            setValue(value-1);

        }
    }

    return (
        <div className="counter-wrapper">
            <button 
                className={buttonStyle}
                onClick={down} 
            > -
            </button>
            <p>{value}</p>
            <button 
                className="counter-button-plus-active "
                onClick={up}
                > +
            </button>
        </div>
    )
}
