const setMetaData = require('../../libs/set-meta-data');
const userService = require('../user/user-service');

let { posts, users } = require('../../db');

class PostService {
  createPost(data) {
    const newPost = {
      ...data,
      likesCount: 0,
      userId: Number(data.userId),
      id: posts[posts.length - 1].id + 1 || 1,
    };
    posts.push(newPost);

    return { newPost };
  }

  getPosts({ offset = 0, limit = 10, userId }) {
    const userPosts =  posts.filter(post => post.userId === Number(userId)).map(post => {
      const user = userService.getUser({ id: post.authorId });
      
      return { ...post, user };
    });

    return setMetaData({ data: userPosts.slice(offset, limit), totalCount: users.length });
  }

  getPost(data) {
    const user = posts.find(({ id }) => id === Number(data.id));

    return user ? user : { error: 'Post not exist' };
  }

  updatePost({ id, ...data }) {
    posts.forEach((user, index) => {
      if (user.id === Number(id)) {
        posts[index] = { ...user, ...data }
      }
    })

    return this.getPost({ id });
  }

  deletePost(data) {
    posts = posts.filter(({ id }) => id !== Number(data.id))

    return true;
  }
}

module.exports = new PostService();