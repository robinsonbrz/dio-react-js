// rfc traz o snnippet boilerplate

// importamos useState para utilizar Hooks
// importamos useEffect para associar outros componentes 

import React, { useState, useEffect } from 'react'
import './IfoodCounter.css'

export default function IfoodCounter() {

    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

    // useEffect efeito colateral ativa quando algo disparar
    // nesse caso com relação a variavel value
    // dispara sempre que a variavel controlada se modifica
    useEffect(()=>{
        //
        document.getElementById("moeda").innerHTML = 2.00 * value
        // abaixo foi encadeado um efeito a variavel valor
    },[value]);

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
            <button id='moeda'>12,00</button>
        </div>
    )
}
