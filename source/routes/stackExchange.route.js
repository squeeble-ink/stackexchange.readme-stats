import express from 'express'
import * as dotenv from 'dotenv'
import { userImage } from '../components/UserImage/index.js'
import { userName } from '../components/UserName/index.js'
import { badgeContainer } from '../components/BadgeContainer/index.js'
import { reputationContainer } from '../components/ReputationContainer/index.js'
import {
  devError,
  userError,
  webError,
} from '../components/Icons/icons.js'
import { SVG } from '../components/SVG/index.js'
import { errorText } from '../components/ErrorText/index.js'
import { siteName } from '../components/SiteName/index.js'
import { siteLogo } from '../components/SiteLogo/index.js'

dotenv.config()

const router = express.Router()

router.get('/', async (req, res) => {
  const userId = req.query.userId
  const seSite = req.query.seSite
  const useImage = req.query.img ? false : true
  const nameX = req.query.nameX || null
  const nameSize = req.query.nameSize || 25
  let missingInfo = null

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Content-Type', 'image/svg+xml; charset=utf-8')
  res.header('X-Content-Type-Options', 'nosniff')
  res.header('Cache-Control', 'public, max-age=86400')

  if (!userId) {
    missingInfo = [
      'userId is required!',
      'Example:',
      '?userId=7185314',
    ]
    return res.send(
      SVG(
        true,
        true,
        'Error!',
        `
        ${userError()}
        ${errorText(missingInfo)}
        `,
      ),
    )
  }

  if (!seSite) {
    missingInfo = [
      'seSite is required!',
      'Example:',
      '&amp;seSite=stackoverflow',
    ]
    return res.send(
      SVG(
        true,
        true,
        'Error!',
        `
        ${userError()}
        ${errorText(missingInfo)}
        `,
      ),
    )
  }

  if (!process.env.STACK_EXCHANGE_API_KEY) {
    missingInfo = [
      'Missing private keys!',
      'Please tweet the dev.',
      '@TessavWalstijn',
    ]

    return res.send(
      SVG(
        true,
        true,
        'Error!',
        `
        ${devError()}
        ${errorText(missingInfo)}
        `,
      ),
    )
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
  const { items } = data || null

  if (!data || !items) {
    missingInfo = [
      'Stack Exchange',
      'API down!',
      'OR',
      'Hitting rate limit!',
      'Try again later.',
    ]
    return res.send(
      SVG(
        true,
        true,
        siteName(seSite),
        `
        ${webError()}
        ${errorText(missingInfo)}
        `,
      ),
    )
  }

  const user = items[0] || null

  if (!user) {
    missingInfo = ['User not found!']
    return res.send(
      SVG(
        true,
        true,
        'Error!',
        `
        ${webError()}
        ${errorText(missingInfo)}
        `,
      ),
    )
  }

  const siteLogoContent = await siteLogo(seSite)

  res.send(
    SVG(
      useImage,
      false,
      siteLogoContent ?? siteName(seSite),
      `${
        useImage
          ? await userImage(user.profile_image)
          : userName(user.display_name, nameSize, nameX)
      }
      ${siteLogoContent}
      ${reputationContainer(useImage, user.reputation)}
      ${badgeContainer(useImage, user.badge_counts)}`,
    ),
  )
})

export default router
