//import { ProductsList } from "./components/ProductsList/productsList";
import { AppRoutes } from "./components/Pages/routes"
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
     <GlobalStyle/>
     <AppRoutes />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding:0;
    }

    li {
      list-style: none
    }
`

export default App;
