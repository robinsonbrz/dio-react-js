
import './App.css';
import {Perfil, Bio, LinkLinKedin} from './perfil.js'

function App() {
    return (
    <div>
        <Perfil meuNome="Robinson Enedino" arquivoFoto='./Rob.JPG'/>
        <br />
        <Bio />
        <br /><br />
        <LinkLinKedin />
    </div>);
}

export default App;
