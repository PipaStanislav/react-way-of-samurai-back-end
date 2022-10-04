const userService = require('../user/user-service');

let { auth } = require('../../db');

class AuthService {
  login(data) {
    const { id, password, ...authData } = auth.find(({ login, email, password }) => password === data.password && (login === data.login || email === data.email));

    return { data: authData };
  }

  registration({ login, email,  password }) {
    const auth = this.login({ login, email,  password })

    if (auth) {
      return { error: 'User with that email or login already exist' }
    }

    const user = userService.createUser()

    const newAuth =  {
      email,
      login,
      password,
      userId: user.id,
      id: auth[auth.length - 1].id + 1,
    };

    auth.push(newAuth);

    return { data: { email, login, userId: user.id } };
  }

  me() {
    const { id, password, ...authData } = auth[0];
    return { data: authData };
  }
}

module.exports = new AuthService();