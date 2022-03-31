interface IResource {
  id: string;
  name: string;
  action: string;
  endpoint: string;
  description: string;
}

class Resource {
  id: string;
  name: string;
  action: string;
  endpoint: string;
  description: string;

  constructor({ id, name, action, endpoint, description }: IResource) {
    this.id = id;
    this.name = name;
    this.action = action;
    this.endpoint = endpoint;
    this.description = description;
  }
}

export default Resource;
