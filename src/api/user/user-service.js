const setMetaData = require('../../libs/set-meta-data');

let { users, followers } = require('../../db');

class UserService {
  createUser(data) {
    const newUser = { ...data, id: users[users.length - 1].id + 1 || 1};
    users.push(newUser);

    return { newUser };
  }

  getUsers({ offset = 0, limit = 10, authUser = {} }) {
    const data = users.slice(offset, limit).map((user) => {
      const follower = followers.find(({ userId, followerId }) => userId === user.id && followerId === 1);

      return follower ? { ...user, isFollow: true } : { ...user, isFollow: false };
    });

    return setMetaData({ data, totalCount: users.length });
  }

  getUser(data) {
    const user = users.find(({ id }) => id === Number(data.id));

    return user ? user : { error: 'User not exist' };
  }

  updateUser({ id, ...data }) {
    users.forEach((user, index) => {
      if (user.id === Number(id)) {
        users[index] = { ...user, ...data }
      }
    })

    return this.getUser({ id });
  }

  deleteUser(data) {
    users = users.filter(({ id }) => id !== Number(data.id))

    return true;
  }

  follow({ id, userId }) {
    const newFollower = {
      id: followers[followers.length - 1].id + 1,
      userId,
      followerId: id,
    }

    followers.push(newFollower);
    return true;
  }

  unfollow({ id, userId }) {
    followers = followers.filter((follower) => (follower.userId !== userId || follower.followerId !== id))
    return true;
  }
}

module.exports = new UserService();