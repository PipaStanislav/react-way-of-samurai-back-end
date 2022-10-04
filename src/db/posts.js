const { faker } = require('@faker-js/faker');

const Posts = [
  {
    id: 1,
    userId: 1,
    message: faker.lorem.sentence(),
    likesCount: 0,
    authorId: 1,
  }
];

module.exports = Posts;