interface IUser {
  id: string;
  email: string;
  password_hash: string;
  isActive: boolean;
}

class User {
  id: string;
  email: string;
  password_hash: string;
  isActive: boolean;

  constructor({ id, email, password_hash, isActive = true }: IUser) {
    this.id = id;
    this.email = email;
    this.password_hash = password_hash;
    this.isActive = isActive;
  }
}

export default User;
