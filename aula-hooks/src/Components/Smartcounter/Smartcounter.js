// Hooks
// deve-se importar {useState} de react
import {useState} from 'react';


function Smartcounter(){
    // useState retorna um vetor
    // prim parametro é a variável statefull, 
    // e o segundo a função que vai trabalhar essa variável "enganchada"
    // setando a variavel com valor inicial 1
    // isto seria uma variável "enganchada" numa função
    const [quantity, changeQuantity] = useState(1)
    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={()=>changeQuantity(quantity+1)}>Incremento</button>
            <button onClick={()=>changeQuantity(quantity-1)}>Decremento</button>
        </>
    )
}

export default Smartcounter;