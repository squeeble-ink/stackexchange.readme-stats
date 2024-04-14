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

export const reputationContainer = async (useImage, reputation) => {
  const reputationInfo = await getRep(reputation)

  const reputationText = `${reputationInfo.rep}${reputationInfo.surfix}`
  return `
    <g data-test-id="score-card" transform="translate(25, ${
      useImage ? 235 : 125
    })">
      <style>
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
      </style>
      <text x="0" y="0" class="score" data-test-id="score">${reputationText}</text>
      <text x="90" y="-6" class="reputation" data-test-id="reputation">REPUTATION</text>
    </g>
  `
}
