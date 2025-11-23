import "./header.scss";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <header>
            <img src="{logo}" alt="logo marca da pagina" />
            <ul>
                <li>LOOKS</li>
                <li>LANÇAMENTOS</li>
                <li>NOVIDADE</li>
            </ul>
        </header>
    )
}
export default Header
//header - tag
// Header componente funcional - logica