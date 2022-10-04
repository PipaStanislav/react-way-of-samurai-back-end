const authService = require('./auth-service');
const setResponseData = require('../../libs/set-response-date');
const getRequestData = require('../../libs/get-request-data');

class AuthController {
  login(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, authService.login(data));
  }

  registration(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, authService.registration(data));  }

  me(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, authService.me(data));
  }
}

module.exports = new AuthController();