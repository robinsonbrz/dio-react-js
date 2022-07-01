function Counter(){
    let quantity = 10;

    function incrementQuantity(){
        quantity += 1;
        console.log(quantity)
        document.getElementById("counter-box").innerHTML=quantity;
    }
    function decrementQuantity(){
        quantity -= 1;
        console.log(quantity)
        document.getElementById("counter-box").innerHTML=quantity;
    }

    return (
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={incrementQuantity}>Incrementar</button>
            <button onClick={decrementQuantity}>Decrementar</button>
        </>
    )
}

export default Counter;