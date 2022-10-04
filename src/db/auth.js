const { faker } = require('@faker-js/faker');

const users = require('./user');

const auth = [
  {
    id: 1,
    email: 'ColleenFarrel@gmail.com',
    userId: 1,
    login: 'ColleenFarrel',
    password: '1234567890'
  },
  {
    id: 2,
    email: 'UmaTurman@gmail.com',
    userId: 2,
    login: 'UmaTurman',
    password: '1234567890'
  },

  ...users.map(({ id, firstName, lastName }, index) => {
    const userName = faker.internet.userName(firstName, lastName);

    return {
      id: index + 3,
      email: faker.internet.email(firstName, lastName),
      userId: id,
      login: userName,
      password: '1234567890'
    }
  }),
]

module.exports = auth;