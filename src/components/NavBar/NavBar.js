import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return (
        <nav>
            <h2>EcoUrba</h2>
            <div>
            <button>Parquizacion.</button>
            <button>Desinfeccion.</button>
            <button>Riego.</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar

