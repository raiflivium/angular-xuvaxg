import { User } from './user';

export class UsersResponse {
  private page: number;
  private per_page: number;
  private total: number;
  private total_pages: number;
  private data: User[];
 
  constructor(new_page: number, new_per_page: number, new_total: number, new_total_pages: number, new_data: User[]) {
    this.page = new_page;
    this.per_page = new_per_page;
    this.total = new_total;
    this.total_pages = new_total_pages;
    this.data = new_data;
  }
}