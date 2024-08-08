import express from 'express'
import pg from 'pg'
import {config} from 'dotenv'


config()
const app = express()
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true

})

app.get('/', (req, res)=>{
  res.send('<h1>Hello welcome</h1>')
})

app.get('/day', async (req, res)=>{
  const result = await pool.query('SELECT NOW()')
  return res.json(result.rows[0])
})

app.get('/products', (req, res)=>{
  res.send('<h1>Estos son tus productos</h1>')
})

app.get('/pay', (req, res)=>{
  res.send('<h1>ya puedes pagar tus productos</h1>')
})

app.get('/premium', (req, res)=>{
  res.send('<h1>Tienes Acceso Ilimitado a la Aplicación</h1>')
})

app.listen(3001, ()=>{
  console.log('server listening on port 3001')
})