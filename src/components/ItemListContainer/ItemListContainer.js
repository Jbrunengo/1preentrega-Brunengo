import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../asyncmock.js"
import ItemList from "../ItemList/ItemList.js"

const ItemListContainer =({greeting}) =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error (error)
            })
    }, [])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )

}
export default ItemListContainer