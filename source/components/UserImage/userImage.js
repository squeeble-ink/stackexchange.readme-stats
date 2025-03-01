import { getBase64Image } from '../../utils/getBase64Image.js'

/**
 * @param {string} profileImageUrl
 * @returns svg string
 */
export const userImage = async (profileImageUrl) => {
  const base64Image = await getBase64Image(profileImageUrl)

  return `
    <g data-test-id="profile-card" transform="translate(25, 40)">
      <style>
        .profile-image {
          border-radius: 25px;
        }
      </style>
      <image
        data-test-id="profile"
        class="profile-image"
        xlink:href="${base64Image}"
        widht="158"
        height="158"
      />
    </g>
  `
}
