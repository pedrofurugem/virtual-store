async function getProducts(){
    const response = await fetch('http://localhost:3000/api/products')
    const json = await response.json()
    return json
}

async function getProductsId(id){
    const response = await fetch(`http://localhost:3000/api/products/${id}`)
    const json = await response.json()
    return json
}

export { getProducts, getProductsId }
