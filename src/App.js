import { Products } from "./components/Products";
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
     <GlobalStyle/>
     <Products />
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
