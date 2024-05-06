import { Link } from "react-router-dom"
import { Nav } from "./style"


export function NavBar(){
    return (
        <Nav>
            <h1>Tárcio Teixeira</h1>
            <ul>
                <li>Habilidades</li>
                <li>Meus Projetos</li>
            </ul>   
        </Nav>
    )
}
export default NavBar