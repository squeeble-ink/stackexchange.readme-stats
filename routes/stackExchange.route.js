import express from 'express'
import r from 'request'
import fetch from 'node-fetch'
import * as dotenv from 'dotenv'
dotenv.config()

const request = r.defaults({ encoding: null })

const router = express.Router()

const getRep = async (rep, surfix = '') => {
  if (rep > 9999) {
    switch (surfix) {
      case '':
        surfix = 'K'
        break
      case 'K':
        surfix = 'M'
        break
      case 'M':
        surfix = 'B'
        break
    }

    let obj = {}
    obj = await getRep(Math.round(rep / 1000), surfix)
    dist = obj.dist
    rep = obj.rep
    surfix = obj.surfix
  }

  return {
    rep,
    surfix,
  }
}

const getBadge = (type, amount, badges = '', neighbor = '') => {
  const maxW = 168

  let width = maxW / amount - 1 * amount

  let left = 0
  let colors = {}
  switch (type) {
    case 'bronze':
      colors.stroke = '#d1a684'
      colors.fill = '#4d433b'
      if (amount === 2) {
        left = maxW / amount + 1 * amount
      }

      if (amount === 3) {
        left = (maxW / amount) * 2 + 1 * amount
      }
      break
    case 'silver':
      colors.stroke = '#b4b8bc'
      colors.fill = '#424242'
      if (amount === 2 && neighbor === 'G') {
        left = maxW / amount + 1 * amount
      }

      if (amount === 3) {
        left = maxW / amount + 1
        width += 1
      }
      break
    case 'gold':
      colors.stroke = '#ffcc01'
      colors.fill = '#5e553c'
      break
  }

  if (badges === '' || badges === '0') {
    return null
  }

  return `
  <g data-testid="${type}-card">
    <rect data-testid="${type}-bg"
      x="${-5.5 + left}"
      y="12.5"
      rx="4.5"
      ry="4.5"
      width="${width}"
      height="25"
      stroke="${colors.stroke}"
      fill="${colors.fill}"
      stroke-opacity="1"
    />
    <rect data-testid="${type}-dot"
      x="${5 + left}"
      y="23"
      rx="4"
      ry="4"
      width="4"
      height="4"
      stroke="${colors.stroke}"
      fill="${colors.stroke}"
      stroke-opacity="1"
    />
    <text x="${
      left + (width / 2 - 3 * badges.length)
    }" y="30" class="badge" data-testid="header">${badges}</text>
  </g>
`
}

const getBadges = ({ bronze, silver, gold }) => {
  bronze = `${bronze}`
  silver = `${silver}`
  gold = `${gold}`

  let badges = 3
  let neighbor = ''
  if (bronze === '' || bronze === '0') {
    badges -= 1
    neighbor = 'G'
  }

  if (silver === '' || silver === '0') {
    badges -= 1
  }

  if (gold === '' || gold === '0') {
    badges -= 1
  }

  const bronzeCard = getBadge('bronze', badges, bronze)
  const silverCard = getBadge('silver', badges, silver, neighbor)
  const goldCard = getBadge('gold', badges, gold)

  return {
    bronzeCard,
    silverCard,
    goldCard,
  }
}

router.get('/', async (req, res) => {
  const userId = req.query.userId
  const seSite = req.query.seSite
  const userImg = req.query.img ? false : true
  const nameX = req.query.nameX || null
  const nameSize = req.query.nameSize || 25

  if (!userId) {
    return res.send('userId is required!')
  }

  if (!seSite) {
    return res.send('seSite is required!')
  }

  if (!process.env.STACK_EXCHANGE_API_KEY) {
    return res.send('Issue with private keys! Contact the developer.')
  }

  let siteName = seSite
  let headerLeft = 0
  switch (seSite.toLowerCase()) {
    case 'stackoverflow':
      siteName = 'Stack Overflow'
      break
    case 'meta':
      siteName = 'Meta Exchange'
      break
    case 'askubuntu':
      siteName = 'Ask Ubuntu'
  }

  const getData = async (url) => {
    let promise = new Promise((res, rej) => {
      fetch(url, {
        method: 'GET',
      })
        .then((response) => {
          res(response.json())
        })
        .catch((error) => {
          rej(error)
        })
    })

    return await promise
  }

  const data = await getData(
    `https://api.stackexchange.com/2.2/users/${userId}?order=desc&sort=reputation&site=${seSite}&key=${process.env.STACK_EXCHANGE_API_KEY}`,
  )
  const { items } = data

  if (!data || !items) {
    return res.send(
      'Stack Exchange API down OR hitting rate limit. Try again later.',
    )
  }

  const item = items[0]

  if (!item) {
    return res.send('User not found!')
  }

  let reputation = item.reputation
  let displayName = item.display_name

  let repInfo = await getRep(reputation)

  reputation = `${repInfo.rep}${repInfo.surfix}`

  let scoreLeft = 0
  let repLeft = 90

  let profile = item.profile_image

  const getProfileImageData = async (url) => {
    let promise = new Promise((res, rej) => {
      request.get(url, function (error, result, body) {
        if (error) {
          return rej(error)
        }
        res(body)
      })
    })

    return await promise
  }

  const imageData = await getProfileImageData(profile)
  const image = imageData.toString('base64')

  const { bronzeCard, silverCard, goldCard } = getBadges(
    item.badge_counts,
  )

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Content-Type', 'image/svg+xml; charset=utf-8')
  res.header('X-Content-Type-Options', 'nosniff')
  res.header('Cache-Control', 'public, max-age=86400')
  res.send(`
    <svg width="210" height="${
      userImg ? 302 : 200
    }" viewBox="0 0 210 ${userImg ? 302 : 200}" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:html="http://www.w3.org/1999/xhtml"
    >
      <style>
        .header {
          font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
          fill: #f2f2f3;
          animation: fadeInAnimation 0.8s ease-in-out forwards;
        }

        .profile {
          border-radius: 25px;
        }

        .name {
          font: 600 ${nameSize}px 'Segoe UI', Ubuntu, Sans-Serif;
          fill: #f2f2f3;
          animation: fadeInAnimation 0.8s ease-in-out forwards;
        }

        .score {
          font: 600 30px 'Segoe UI', Ubuntu, Sans-Serif;
          fill: #f2f2f3;
          animation: fadeInAnimation 0.8s ease-in-out forwards;
        }

        .reputation {
          font: 100 12px 'Segoe UI', Ubuntu, Sans-Serif;
          fill: #f2f2f3;
          animation: fadeInAnimation 0.8s ease-in-out forwards;
        }

        .badge {
          font: 100 12px 'Segoe UI', Ubuntu, Sans-Serif;
          fill: #f2f2f3;
          animation: fadeInAnimation 0.8s ease-in-out forwards;
        }
      </style>
      <defs>
        <rect id="profile-rect" x="0" y="0" width="158" height="158" rx="4.5" ry="4.5"/>
        <clipPath id="profile-clip">
          <use xlink="#profile-rect"/>
        </clipPath>
      </defs>
      <rect data-testid="card-bg" x="0.5" y="0.5" rx="4.5" ry="4.5" width="99%" height="99%" stroke="#4a4e51" fill="#4a4e51" stroke-opacity="1"/>
      <rect data-testid="card-bg" x="0.5" y="45%" rx="4.5" ry="4.5" width="99%" height="55%" stroke="#4a4e51" fill="#2d2d2d" stroke-opacity="1"/>
      <g data-testid="header-card" transform="translate(105, 25)">
        <text x="0" y="0" class="header" text-anchor="middle" data-testid="header">${siteName}</text>
      </g>
      ${
        userImg
          ? `
      <g data-testid="profile-card" transform="translate(25, 40)">
        <image
          data-testid="profile"
          class="profile"
          xlink:href="data:image/jpg;base64,${image}"
          widht="158"
          height="158"
        />
      </g>`
          : `
      <g
        data-testid="profile-name"
        transform="translate(${nameX === null ? 105 : 0}, 65)"
      >
        <text
          x="${nameX === null ? 0 : nameX}"
          y="0"
          ${ nameX === null ? 'text-anchor="middle"' : ''}
          class="name"
        >
          ${displayName}
        </text>
      </g>`
      }
      <g data-testid="score-card" transform="translate(25, ${
        userImg ? 235 : 125
      })">
      <text x="${scoreLeft}" y="0" class="score" data-testid="header">${reputation}</text>
      <text x="${repLeft}" y="-6" class="reputation" data-testid="header">REPUTATION</text>
      </g>
      <g data-testid="badges-card" transform="translate(25, ${
        userImg ? 240 : 130
      })">
        ${goldCard}
        ${silverCard}
        ${bronzeCard}
      </g>
    </svg>
  `)
})

export default router
