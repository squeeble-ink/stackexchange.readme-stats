import { getBase64Image } from '../../utils/getBase64Image.js'
import { siteLogoMap } from './SiteLogoMap.js'

/**
 * @param {string} seSite parameter from request
 * @returns svg string
 */
export const siteLogo = async (seSite) => {
  try {
    const siteUrl = siteLogoMap(seSite)
    const base64Image = await getBase64Image(siteUrl)
  
    return `
      <g data-test-id="site-icon-group" transform="translate(25, 5)">
        <style>
          .site-logo {
            filter: invert(.5) brightness(2);
          }
        </style>
        <image
          data-test-id="site-icon"
          class="site-logo"
          xlink:href="${base64Image}"
          width="158"
          height="28"
        />
      </g>
    `
  } catch {
    return ''
  }
}
