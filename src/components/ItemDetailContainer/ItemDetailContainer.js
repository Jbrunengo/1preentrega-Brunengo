import { useState, useEffect } from "react";
import { getProductsById } from "../asyncmock";

const ItemDetailContainer =() => {
    const [product,SetProduct] = useState (null)

    useEffect (() => {
        getProductsById ('1')
            .then(response => {
                SetProduct(response)
            })
            .catch(error =>{
                console.error (error)
            })
    }, [])
    return(
        <div className='ItemdetailContainer'>
        <ItemDetail{...product}/>
        </div>
    )
    }
export default ItemDetailContainer