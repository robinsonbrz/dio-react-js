import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const App = () => {

    return (
        <div clasName="App">
            Helloo World    
        </>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)



const element = <div clasName="App"> Hello World </>