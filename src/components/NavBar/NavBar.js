import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () =>{
    return (
        <nav>
            <h2>EcoUrba</h2>
            <div className="NavBar">
            <button>Parquizacion.</button>
            <button>Desinfeccion.</button>
            <button>Riego.</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar

