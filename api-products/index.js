const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const products = [
    { id: 1, name: 'Samsung Galaxy S22 Ultra', price: 3999.00, imageUrl: 'https://samsungbrshop.vtexassets.com/arquivos/ids/200596-1600-auto?v=638048057328700000&width=1600&height=auto&aspect=true' },
    { id: 2, name: 'Apple iPhone 12 Pro Max', price: 6299.00, imageUrl: 'https://i.zst.com.br/thumbs/12/30/1d/-880816741.jpg' },
    { id: 3, name: 'Apple iPhone 13 mini', price: 5699.00, imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-5-4inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656713272198' },
    { id: 4, name: 'ASUS Zenfone 8', price: 2699.10, imageUrl: 'https://m.media-amazon.com/images/I/51N9B817FQL._AC_SL1000_.jpg' },
    { id: 5, name: 'Motorola Edge 30 Ultra', price: 3599.10, imageUrl: 'https://brmotorolanew.vtexassets.com/arquivos/ids/163311-800-auto?v=638079352125770000&width=800&height=auto&aspect=true' },
    { id: 6, name: 'ASUS Zenfone 9', price: 3149.10, imageUrl: 'https://a-static.mlcdn.com.br/1500x1500/smartphone-asus-zenfone-9-128gb-vermelho-5g-snapdragon-8-8gb-ram-592-cam-dupla-selfie-12mp/magazineluiza/236697500/d0b7dcba96a0314717185a903df21fcd.jpg' },
    { id: 7, name: 'Samsung Galaxy S23', price: 3664.22, imageUrl: 'https://m.media-amazon.com/images/I/61XWTf2no8L._AC_SL1500_.jpg' },
    { id: 8, name: 'Samsung Galaxy S23 Plus', price: 3959.10, imageUrl: 'https://p.turbosquid.com/ts-thumb/S2/MTzigG/Mx/2mainturbo/jpg/1675965080/1250x1250/fit_q99/4cade98cd375fddf36179bf38e2d4bda66db33bd/2mainturbo.jpg' },
    { id: 9, name: 'Samsung Galaxy S23 Ultra', price: 6799.00, imageUrl: 'https://imgs.casasbahia.com.br/55058055/1g.jpg' },
    { id: 10, name: 'Motorola razr 40 Ultra', price: 7199.10, imageUrl: 'https://brmotorolanew.vtexassets.com/arquivos/ids/164740-1600-auto?v=638228020072900000&width=1600&height=auto&aspect=true' },
    { id: 11, name: 'Samsung Galaxy Z Flip 4', price: 6999.10, imageUrl: 'https://samsungbrshop.vtexassets.com/arquivos/ids/214185-800-auto?v=638258222109500000&width=800&height=auto&aspect=true' },
    { id: 12, name: 'Xbox Controller', price: 374.00, imageUrl: 'https://m.media-amazon.com/images/I/61h4J5s0pBL._AC_SL1500_.jpg' },
    { id: 13, name: 'PowerA Fusion Pro 2', price: 281.30, imageUrl: 'https://m.media-amazon.com/images/I/71+l0IapOkL._AC_SL1500_.jpg' },
    { id: 14, name: '8BitDo Pro 2 Wired', price: 285.00, imageUrl: 'https://m.media-amazon.com/images/I/71ld2XuYEJL._AC_SL1500_.jpg' },
    { id: 15, name: 'PowerA Enhanced Wired', price: 213.42, imageUrl: 'https://m.media-amazon.com/images/I/71Q335ladgL._AC_SL1500_.jpg' },
    { id: 16, name: 'Logitech F310', price: 287.10, imageUrl: 'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/f310/f310-gallery-1.png?v=1' },
    { id: 17, name: 'Dazz Dual Shock', price: 41.50, imageUrl: 'https://m.media-amazon.com/images/I/31i+gFFJ6KL._AC_.jpg' },
    { id: 18, name: 'Gamesir F5', price: 109.99, imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_660281-MLB52316325313_112022-F.webp' },
    { id: 19, name: 'IPEGA PG 9025', price: 108.89, imageUrl: 'https://a-static.mlcdn.com.br/1500x1500/controle-joystick-sem-fio-ipega-pg-9025-preto/rabischool/251controlejoystick9025/f956db434e2de97e0e7ee8f90747c886.jpeg' },
    { id: 20, name: 'Gamesir X2 Pro', price: 271.00, imageUrl: 'https://m.media-amazon.com/images/I/519smV3YgQL._AC_SL1000_.jpg' }
]

app.get('/api/products', (_, res)=> {
    res.json(products)
})

app.get('/api/products/:id', (req, res)=> {
    const productId = req.params.id

    const product = products.find(product => product.id === Number(productId))

    if(!product){
        return res.status(404).send({ message: 'não existe esse produto'})
    }

    res.status(200).send(product)
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
}) //http://localhost:3000/api/products