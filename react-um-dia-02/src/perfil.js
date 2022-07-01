// div_root = document.getElementById('root');
// div_root.innerHTML = "<h1>Hello World!</h1>";


function Perfil(props) {

    // JSX utilizando uma linguagem parecida com HTML e suas tags
    const tituloDaPagina = (
        <div>
            <h1>{props.meuNome}
            <br />codando em React</h1>

            <h2 className="welcome">Seja bem vindo!</h2>
        </div>
    )

    const minhaFoto = <img src={props.arquivoFoto} className="inline_img" alt="Programador sentado em sua desk"></img> 

    const perfilContent = (
        <div>
            <div className="nome">
                {tituloDaPagina}
            </div>
            <div>
                {minhaFoto}
            </div>
        </div>);

    return perfilContent;
}

function Bio() {
    const minibio = 
    <div className="minibio">
        Bacharel em Engenharia Elétrica e Computação.
        <br />
        Com mais de 15 anos em TI.
        <br />
        Python, Django, FastApi, Javascript, CSS, etc.
        <br />
        Conhecimento e prática, em Python/Django:
        <br />
        - Django WEB Templates - Django Views e HTML.
        <br />
        - Javascript e jQuery no frontend, CSS, Bootstrap.
        <br />
        - Python - backend Django e FastApi Frameworks.
        <br />
        - Testes unitários e pytest.
    </div>;
    return minibio;
}

function LinkLinKedin() {
    return (
        <div className="linkedin">
            <ul className="flex-container">
                <li className="flex-item row"><a href="https://www.linkedin.com/in/robinsonbrz/" target="_blank" rel="noreferrer">Linkedin</a></li>
                <li className="flex-item row"><a href="https://enedino.com.br/portfolio/" target="_blank" rel="noreferrer">Portfólio</a></li>
                <li className="flex-item row"><a href="https://github.com/robinsonbrz" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
        </div>);
}

export {Bio, LinkLinKedin, Perfil};