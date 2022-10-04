const profileService = require('./profile-service');
const setResponseData = require('../../libs/set-response-date');
const getRequestData = require('../../libs/get-request-data');

class ProfileController {
  createProfile(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, profileService.createProfile(data));
  }

  getProfiles(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, profileService.getProfiles(data));  }

  getProfile(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, profileService.getProfile(data));
  }

  updateProfile(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, profileService.updateProfile(data));
  }

  deleteProfile(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, profileService.deleteProfile(data));
  }
}

module.exports = new ProfileController();