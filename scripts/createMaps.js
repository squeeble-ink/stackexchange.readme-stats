import * as dotenv from 'dotenv'
import fetch from 'node-fetch'

dotenv.config()

const names = {}
const icons = {}

fetch(
  `https://api.stackexchange.com/2.3/sites?key=${process.env.STACK_EXCHANGE_API_KEY}&pagesize=999`,
)
  .then(async (response) => {
    const body = await response.json()
    console.log(body.items.length)
    const items = body.items

    items.forEach(async ({ api_site_parameter, name, icon_url }) => {
      names[api_site_parameter] = name
      icons[api_site_parameter] = icon_url
    })
  })
  .then(async () => {
    console.log(names)
    console.log(icons)
  })
