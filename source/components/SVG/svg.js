import { header } from '../Header/index.js'

/**
 * @param {boolean} useImage
 * @param {boolean} error
 * @param {string} siteName
 * @param {string} content svg string
 * @returns
 */
export const SVG = (useImage, error, siteName, content) => `
  <svg width="210" height="${
    useImage ? 302 : 200
  }" viewBox="0 0 210 ${useImage ? 302 : 200}" fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:html="http://www.w3.org/1999/xhtml"
  >
    <defs>
      <rect id="profile-rect" x="0" y="0" width="158" height="158" rx="4.5" ry="4.5"/>
      <clipPath id="profile-clip">
        <use xlink="#profile-rect"/>
      </clipPath>
    </defs>
    <rect data-test-id="card-bg" x="0.5" y="0.5" rx="4.5" ry="4.5" width="99%" height="99%" stroke="#4a4e51" fill="#4a4e51" stroke-opacity="1"/>
    ${
      error
        ? '<rect data-test-id="card-bg" x="0.5" y="60%" rx="4.5" ry="4.5" width="99%" height="40%" stroke="#4a4e51" fill="#2d2d2d" stroke-opacity="1"/>'
        : '<rect data-test-id="card-bg" x="0.5" y="45%" rx="4.5" ry="4.5" width="99%" height="55%" stroke="#4a4e51" fill="#2d2d2d" stroke-opacity="1"/>'
    }
    ${header(siteName, error)}
    ${content}
  </svg>
`
