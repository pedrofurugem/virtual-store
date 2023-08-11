import { styled } from 'styled-components'

export const Header = ()=> {
    return(
        <>
          <Cabecalho>
            <h1>Logo da loja</h1>
            <Li>
                <A href="#">sobre</A>
                <A href="#">contato</A>
                <A href="#">minha conta</A>
                <A href="#">meus pedidos</A>
            </Li>
          </Cabecalho>
        </>
    )
}

const Cabecalho = styled.div`
   background-color: #ff8b31;
   height: 250px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 100px;
`

const Li = styled.li`
  
`

const A = styled.a`
  text-decoration: none;
  font-size: 22px;
  color: #000;
  margin: 15px;
`