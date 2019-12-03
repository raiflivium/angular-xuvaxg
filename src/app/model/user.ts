export class User {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;

  constructor(new_first_name: string, new_last_name: string, new_email: string, new_avatar: string) {
    this.first_name = new_first_name;
    this.last_name = new_last_name;
    this.email = new_email;
    this.avatar = new_avatar;
  }
}