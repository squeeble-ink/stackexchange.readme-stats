import r from 'request'

const request = r.defaults({ encoding: null })

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

/**
 * @param {string} base64Image base64 image string
 * @returns svg string
 */
export const userImage = async (profileImage) => {
  const imageData = await getProfileImageData(profileImage)
  const base64Image = imageData.toString('base64')

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
        xlink:href="data:image/jpg;base64,${base64Image}"
        widht="158"
        height="158"
      />
    </g>
  `
}
