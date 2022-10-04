const setMetaData = ({ data, ...metaData }) => {
  return {
    data,
    metaData: {
      ...metaData,
      count: data.length
    }
  }
}

module.exports = setMetaData;