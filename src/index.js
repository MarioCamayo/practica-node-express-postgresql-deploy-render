import express from 'express'

const app = express()

app.get('/', (req, res)=>{
  res.send('<h1>Hello welcome</h1>')
})
app.get('/products', (req, res)=>{
  res.send('<h1>Estos son tus productos</h1>')
})
app.get('/pay', (req, res)=>{
  res.send('<h1>ya puedes pagar tus productos</h1>')
})
app.get('/permiun', (req, res)=>{
  res.send('<h1>Tienes Acceso Ilimitado a la Aplicación</h1>')
})
app.listen(3001, ()=>{
  console.log('server listening on port 3001')
})