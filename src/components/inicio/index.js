import { ContainerInicio } from "./style"

function Inicio() {
    return (
        <ContainerInicio>
            <div className="text">
                <small>Olá, eu sou</small>
                <h1>Tárcio <span>Teixeira</span> </h1>
                <p>
                    Sou um desenvolvedor front-end, especialista na linguagem
                    JavaScript, tenho competência em desenvolver 
                    interfaces web complexas, aplico a metodologia ágil Scrum e sou
                    estudante de graduação em Análise e Desenvolvimento de sistemas pela intituição
                    Anhanguera.
                </p>
                <div className="social_links">
                    <ul>
                        <li> 
                            <a href="#">
                                <i class="fa-brands fa-linkedin"></i>
                                <small>Linkedin</small>
                            </a> 
                        </li>
                        <li> 
                            <a href="#">
                                <i class="fa-brands fa-github"></i>
                                <small>GitHub</small>
                            </a> 
                        </li>
                        <li> 
                            <a href="#">
                                <i class="fa-brands fa-square-whatsapp"></i>
                                <small>Whatsapp</small>
                            </a> 
                        </li>
                        <li> 
                            <a href="#">
                                <i class="fa-solid fa-envelope"></i>
                                <small>email</small>
                            </a> 
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div>
                <img src="https://github.com/tarcio02/portfolio_react/blob/master/src/assets/perfil_linkedin.jpg?raw=true"
                alt="img"></img>
            </div>
        </ ContainerInicio>
    )
}
export default Inicio