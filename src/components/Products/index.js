import { getProducts } from '../../services/service'
import { useState, useEffect} from 'react'
import { styled } from 'styled-components'

export const Products = ()=> {
    const [product, setPrducts] = useState([])
    
    useEffect(()=> {
        const fetchData = async () => {
            const data = await getProducts()
            //console.log(data)
            setPrducts(data)
        }
        fetchData()
    })

    return(
        <>
        <h1>Products</h1>
        {
            product.map((prod, index)=> {
                return(
                    <li key={index}>
                        <Img src={prod.imageUrl} alt=""/>
                        <p>{prod.name}</p>
                        <p>{prod.price}</p>
                    </li>
                )
            })
        }
        </>
    )
}

const Img = styled.img`
    width: 250px;
`