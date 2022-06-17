
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"


function sum (a, b){
    return a + b;
}

function primeiroJSX(){
    return(
        <div className="teste">
            <h1>Robinson Enedino - Introdução ao ReactJS</h1>
            <p>Soma: {sum(10,20)}</p>
            </div>


    )
}

const App = () => {

    return (
        <div className="App">
            {primeiroJSX()}  
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)



const element = <div clasName="App"> Hello World </div>
