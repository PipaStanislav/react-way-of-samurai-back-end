const { faker } = require('@faker-js/faker');

const users = [
  {
    id: 1,
    firstName: "Colleen",
    lastName: "Farrel",
    status: "Ducimus rem quisquam facere vitae.",
    isFollow: true,
    avatar: {
      small: {
        src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/685.jpg',
        title: 'small'
      },
      large: {
        src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/685.jpg',
        title: 'large'
      },
    },
    address: {
      country: "Angola",
      city: "West Jay"
    },
    fullName: "Colleen Farel"
  },
  {
    id: 2,
    firstName: "Uma",
    lastName: "Turman",
    status: "Ducimus rem quisquam facere vitae.",
    isFollow: true,
    avatar: {
      small: {
        src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1183.jpg',
        title: 'small'
      },
      large: {
        src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1183.jpg',
        title: 'large'
      },
    },
    address: {
      country: "Angola",
      city: "West Jay"
    },
    fullName: "Uma Turman"
  },
  ...Array(100).fill({}).map((obj, index) => ({
    id: index + 3,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    status: faker.lorem.sentence(),
    avatar: {
      small: {
        src: faker.image.image(320, 240),
        title: 'small'
      },
      large: {
        src: faker.image.avatar(640, 480),
        title: 'large'
      },
    },
    address: {
      country: faker.address.country(),
      city: faker.address.city(),
    },
    get fullName() { return `${ this.firstName } ${ this.lastName }` },
  })),
]

module.exports = users;