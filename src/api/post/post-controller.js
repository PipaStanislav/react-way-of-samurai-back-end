const postService = require('./post-service');
const setResponseData = require('../../libs/set-response-date');
const getRequestData = require('../../libs/get-request-data');

class PostController {
  createPost(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, postService.createPost(data));
  }

  getPosts(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, postService.getPosts(data));  }

  getPost(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, postService.getPost(data));
  }

  updatePost(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, postService.updatePost(data));
  }

  deletePost(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, postService.deletePost(data));
  }

  follow(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, postService.follow(data));
  }

  unfollow(request, response) {
    const data = getRequestData(request);

    return setResponseData(response, postService.unfollow(data));
  }
}

module.exports = new PostController();