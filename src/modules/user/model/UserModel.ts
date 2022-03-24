interface IUser {
  id: string;
  email: string;
  password_hash: string;
}

class User {
  id: string;
  email: string;
  password_hash: string;

  constructor({ id, email, password_hash }: IUser) {
    this.id = id;
    this.email = email;
    this.password_hash = password_hash;
  }
}

export default User;
