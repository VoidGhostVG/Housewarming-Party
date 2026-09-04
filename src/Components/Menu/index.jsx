
import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = (props) => {
    return (
        <>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">🏠 Home</Link>
                    </li>

                    <li>
                        <Link to="/cadastrar">💌 Cadastrar</Link>
                    </li>

                    <li>
                        <Link to="/convidados">👭 Convidados</Link>
                    </li>

                    <li>
                        <Link to="/sugestoes">🎁 Sugestões</Link>
                    </li>

                    <li>
                        <Link to="/perguntas">❓ Perguntas</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
