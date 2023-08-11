import { getProducts } from '../../services/service'
import { useState, useEffect} from 'react'
import { styled } from 'styled-components'
import { Header } from '../Header/index'
import { Footer } from '../Footer/index'

export const ProductsList = ()=> {
    const [product, setPrducts] = useState([])
    
    useEffect(()=> {
        const fetchData = async () => {
            const data = await getProducts()      
            setPrducts(data)
        }
        fetchData()
    })

    return(
        <>
        <Header />
            <AreaProducts>
                {
                    product.map((prod, index)=> {
                        return(
                            <CardProduct key={index}>
                                <ImgProduct src={prod.imageUrl} alt=""/>
                                <p>{prod.name}</p>
                                <p>R$ {prod.price.toFixed(2)}</p>
                                <ButtonCart> + Adiconar ao carrinho</ButtonCart>
                                <ButtonBuy> Comprar </ButtonBuy>
                            </CardProduct>
                        )
                    })
                }
            </AreaProducts>
        <Footer />
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