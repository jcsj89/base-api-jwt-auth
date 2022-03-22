interface IUser {
  id: string;
  name: string;
  password: string;
}

class User {
  id: string;
  name: string;
  password: string;

  constructor({ id, name, password }: IUser) {
    this.id = id;
    this.name = name;
    this.password = password;
  }
}

export default User;
