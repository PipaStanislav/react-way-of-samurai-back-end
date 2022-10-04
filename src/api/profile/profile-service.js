const setMetaData = require('../../libs/set-meta-data');
const userService = require('../user/user-service');

let { profiles } = require('../../db');

class ProfileService {
  createProfile(data) {
    const user = userService.getUser({ id: data.userId });
    const profile = this.getProfile({ id: data.userId });

    if (user.error) {
      return user;
    }

    if (profile) {
      return { error: 'Profile already exist' };
    }

    profiles.push(data);

    return { data };
  }

  getProfiles({ offset = 0, limit = 10 }) {
    return setMetaData({ data: profiles.slice(offset, limit), totalCount: profiles.length });
  }

  getProfile({ id }) {
    const user = profiles.find(({ userId }) => userId === Number(id));

    return user ? user : { error: 'Profile not exist' };
  }

  updateProfile({ id, ...data }) {
    profiles.forEach((profile, index) => {
      if (profile.userId === Number(id)) {
        profiles[index] = { ...profile, ...data }
      }
    })

    return this.getProfile({ id });
  }

  deleteProfile(data) {
    profiles = profiles.filter(({ userId }) => userId !== Number(data.id))

    return true;
  }
}

module.exports = new ProfileService();