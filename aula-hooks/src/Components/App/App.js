
import './App.css';

// importando o component Counter e em seguida utilizando:  
// <Counter/> dentro da função App
// import Counter from '../Counter/Counter';
// import Smartcounter from '../Smartcounter/Smartcounter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';

function App() {
    return (
        <>
            <h1>Robinson Enedino</h1>
            <p>
                Olá mundo!!!
            </p>
            <IfoodCounter/>
        
        </>
    );
}

export default App;
