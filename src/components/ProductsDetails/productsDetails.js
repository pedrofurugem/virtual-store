import { useState, useEffect } from 'react'
import { getProductsId } from '../../services/service'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Cart } from '../Cart/cart'

export const ProductsDetails = ()=> {
    const [product, setProduct] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [addedToCartProduct, setAddedToCartProduct] = useState(null)

    const {id} = useParams()

    useEffect(()=> {
        const fetchData = async () => {
            const data = await getProductsId(id)
            setProduct(data)
        }
        fetchData()
    }, [id])

    const addToCart = ()=> {
        //const productCopy = { ...product }
        setCartItems([...cartItems, product])
        setAddedToCartProduct(product)
    }

    return(
        <>
            <div>
                <Link to="/">Voltar</Link>
                <Img src={product.imageUrl} alt=""/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>Detalhes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                <ButtonCart onClick={ addToCart } > + Adiconar ao carrinho</ButtonCart>
                <ButtonBuy> Comprar </ButtonBuy>
            </div>
            <Cart cartItems={cartItems} />
            {addedToCartProduct && (
                <ViewCart>
                    <p>Produto(s) adicionados ao carrinho: </p>
                    <ImgView  src={product.imageUrl} alt=""/>
                    <p>{addedToCartProduct.name}</p>
                    <p>R$ {addedToCartProduct.price.toFixed(2)}</p>
                </ViewCart>
            )}
        </>
    )
}

const Img = styled.img`
   width: 250px;
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

const ViewCart = styled.div`
  background-color: #DCDCDC

`

const ImgView = styled.img`
  width: 100px;
`