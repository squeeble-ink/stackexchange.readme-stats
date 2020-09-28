const express = require('express')
const request = require('request').defaults({ encoding: null })
const fetch = require('node-fetch')
const config = require('config')

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

  console.log(badges)

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

  if (!userId) {
    return res.send('userId is required!')
  }

  if (!seSite) {
    return res.send('seSite is required!')
  }

  let siteName = seSite
  let headerLeft = 0
  switch (seSite) {
    case 'stackoverflow':
      siteName = 'Stack Overflow' // 125 width
      headerLeft = 17
      break
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

  const { items } = await getData(
    `https://api.stackexchange.com/2.2/users/${userId}?order=desc&sort=reputation&site=${seSite}&key=${config.get(
      'stackexchangeKey',
    )}`,
  )

  const item = items[0]

  let reputation = item.reputation

  let repInfo = await getRep(reputation)

  reputation = `${repInfo.rep}${repInfo.surfix}`

  let scoreLeft = 0
  let repLeft = 90

  let profile = item.profile_image

  const getProfile = async (url) => {
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

  const data = await getProfile(profile)
  const image = data.toString('base64')

  const { bronzeCard, silverCard, goldCard } = getBadges(
    item.badge_counts,
  )

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Content-Type', 'image/svg+xml; charset=utf-8')
  res.header('X-Content-Type-Options', 'nosniff')
  res.header('Cache-Control', 'public, max-age=86400')
  res.send(`
    <svg width="210" height="302" viewBox="0 0 210 302" fill="none"
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
      <g data-testid="header-card" transform="translate(25, 25)">
        <text x="${headerLeft}" y="0" class="header" data-testid="header">${siteName}</text>
      </g>
      <g data-testid="profile-card" transform="translate(25, 40)">
        <image
          data-testid="profile"
          class="profile"
          xlink:href="data:image/jpg;base64,${image}"
          widht="158"
          height="158"
        />
      </g>
      <g data-testid="score-card" transform="translate(25, 235)">
      <text x="${scoreLeft}" y="0" class="score" data-testid="header">${reputation}</text>
      <text x="${repLeft}" y="-6" class="reputation" data-testid="header">REPUTATION</text>
      </g>
      <g data-testid="badges-card" transform="translate(25, 240)">
        ${goldCard}
        ${silverCard}
        ${bronzeCard}
      </g>
    </svg>
  `)
})

module.exports = router
