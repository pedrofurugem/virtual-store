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
        <AreaProducts>
            {
                product.map((prod, index)=> {
                    return(
                        <CardProduct key={index}>
                            <ImgProduct src={prod.imageUrl} alt=""/>
                            <p>{prod.name}</p>
                            <p>R$ {prod.price.toFixed(2)}</p>
                            <ButtonCart>Adiconar ao carrinho</ButtonCart>
                        </CardProduct>
                    )
                })
            }
        </AreaProducts>
        </>
    )
}

const AreaProducts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
`

const ImgProduct = styled.img`
    width: 200px
`

const CardProduct = styled.li`
   border: 4px solid black;
   width: 400px;
   margin: 5px;
   padding: 5px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border-radius: 5px;
`

const ButtonCart = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
   color: #FFF;
   font-weight: bold;
   background-color: green;
   border-radius: 5px;
`