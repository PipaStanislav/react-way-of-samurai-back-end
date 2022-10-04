const { faker } = require('@faker-js/faker');

const users = require('./user');

const followers = [
  {
    id: 1,
    userId: 2,
    followerId: 1,
  }
]


for (let i = 0; i < users.length; i++) {
  let length = faker.random.numeric();

  for (let j = 0; j < length; j++)
    followers.push({
      id: followers.length + 1,
      userId: users[i].id,
      followerId: Number(faker.mersenne.rand(1, 100)),
    })
}

module.exports = followers;