import carrito  from './assets/carrito.png'
import './CartWidget.css'

const CartWidget =() =>{
    return (
        <div className='cart'>
            <img className='carrito' src={carrito} />
            50
        </div>
    )
}

export default CartWidget