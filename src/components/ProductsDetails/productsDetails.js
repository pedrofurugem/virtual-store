import { useState, useEffect } from 'react'
import { getProductsId } from '../../services/service'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const ProductsDetails = ()=> {
    const [product, setProduct] = useState([])

    const {id} = useParams()

    useEffect(()=> {
        const fetchData = async () => {
            const data = await getProductsId(id)
            setProduct(data)
        }
        fetchData()
    }, [id])

    return(
        <>
            <div>
                <Link to="/">Voltar</Link>
                <img src={product.imageUrl} alt=""/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <ButtonCart> + Adiconar ao carrinho</ButtonCart>
                <ButtonBuy> Comprar </ButtonBuy>
            </div>
        </>
    )
}

const ButtonCart = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
   color: #FFF;
   font-weight: bold;
   background-color: green;
   border-radius: 5px;
   margin-top: 8px;
`

const ButtonBuy = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
   color: #FFF;
   font-weight: bold;
   background-color: green;
   border-radius: 5px;
   margin-top: 8px;
`