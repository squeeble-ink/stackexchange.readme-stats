import express from 'express'
import cors from 'cors'
import stackExchange from './routes/stackExchange.route.js'

const fallbackPort =
  process.env.NODE_ENV === 'production' ? 3070 : 3071
const port = process.env.PORT
  ? parseInt(process.env.PORT, 10)
  : fallbackPort

const server = express()

server.use(express.json())
server.use(
  express.urlencoded({
    extended: true,
    type: '*/x-www-form-urlencoded',
  }),
)

server.use(cors())

const api = express()

api.use('/se', stackExchange)

server.use('/', api)

server.listen(port, (err) => {
  if (err) throw err
  console.log(`Listening on post ${port}`)
})
