interface IRole {
  id: string;
  role: string;
  description: string;
}

class Role {
  id: string;
  role: string;
  description: string;

  constructor({ id, role, description }: IRole) {
    this.id = id;
    this.role = role;
    this.description = description;
  }
}

export default Role;
