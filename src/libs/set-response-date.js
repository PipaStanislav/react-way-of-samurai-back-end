const setResponseDate = (response, data) => {
  let statusCode = data.error ? 400 : 200;
  return response.status(statusCode).json(data);
}

module.exports = setResponseDate;