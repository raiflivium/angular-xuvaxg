export class User {
  private name: string;
  private email: string;

  constructor(new_name: string, new_email: string) {
    this.name = new_name;
    this.email = new_email;
  }
}