import { ContainerInicio } from "./style"

function Inicio() {
    return (
        <ContainerInicio>
            <div className="text">
                <small>Olá, eu sou</small>
                <h1>Tárcio Teixeira</h1>
                <p>
                    Sou um desenvolvedor front-end, especialista na linguagem
                    JavaScript, tenho competência em desenvolver 
                    interfaces web complexas, aplico a metodologia ágil Scrum e sou
                    estudante de graduação em Análise e Desenvolvimento de sistemas pela intituição
                    Anhanguera.
                </p>
                <div className="social_links">
                    <ul>
                        <li>Linkedin</li>
                        <li>github</li>
                        <li>email</li>
                        <li>whatsapp</li>
                    </ul>
                </div>
            </div>
            <div className="image">
                <div>
                    <img src="../../assets/perfil_linkedin.jpg"
                    alt="img"></img>
                </div>
            </div>
        </ContainerInicio>
    )
}
export default Inicio