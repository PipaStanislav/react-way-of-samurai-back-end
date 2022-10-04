const getRequestData = (request) => {
  return { ...request.body, ...request.query, ...request.params };
};

module.exports = getRequestData;
