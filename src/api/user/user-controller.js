const userService = require('./user-service');
const setResponseData = require('../../libs/set-response-date');
const getRequestData = require('../../libs/get-request-data');

class UserController {
  createUser(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, userService.createUser(data));
  }

  getUsers(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, userService.getUsers(data));  }

  getUser(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, userService.getUser(data));
  }

  updateUser(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, userService.updateUser(data));
  }

  deleteUser(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, userService.deleteUser(data));
  }

  follow(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, userService.follow(data));
  }

  unfollow(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, userService.unfollow(data));
  }
}

module.exports = new UserController();