// Hooks
// deve-se importar {useState} de react
import {useState} from 'react';


function Smartcounter(){
    // useState retorna um vetor
    // prim parametro é a variável, e o segundo a função que vai trabalhar essa variável
    // setando a variavel com valor inicial 1
    const [quantity, incrementQuantity] = useState(1)
    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={()=>incrementQuantity(quantity+1)}>Incremento</button>
            <button onClick={()=>incrementQuantity(quantity-1)}>Decremento</button>
        </>
    )
}

export default Smartcounter;