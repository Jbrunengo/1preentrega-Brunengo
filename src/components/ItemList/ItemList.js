
import ItemDetail from '../ItemDetail/ItemDetail.js'


const ItemList = ({products}) => {
    return(
        <div className="ListGroup">
            {Array.isArray (products) && products.map(prod=> <ItemList key ={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList