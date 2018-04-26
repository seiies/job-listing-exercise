const dataMock = require('./dataMock')

const getItem = id => {
  const empty = {}

  if (!id) {
    return empty
  }

  let nId = Number.parseInt(id)

  if (Number.isInteger(nId)) {
    return dataMock.jobDescriptions[nId] || empty
  }

  return empty
}

const getList = () => dataMock.jobList

module.exports = { getList, getItem }
