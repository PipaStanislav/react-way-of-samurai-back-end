const dialogService = require('./dialog-service');
const setResponseData = require('../../libs/set-response-date');
const getRequestData = require('../../libs/get-request-data');

class DialogController {
  createDialog(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, dialogService.createDialog(data));
  }

  getDialogs(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, dialogService.getDialogs(data));  }

  getDialog(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, dialogService.getDialog(data));
  }

  addMessage(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, dialogService.addMessage(data));
  }

  deleteDialog(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, dialogService.deleteDialog(data));
  }
}

module.exports = new DialogController();