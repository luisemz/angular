export interface User {
  _id: string;
  sub: string;
  username: string;
  password: string;
  email: string;
  name: string;
  lastName: string;
  origen: string;
  role: string | Object;
  birthday: Date;
  creationDate: Date;
  updateDate: Date;
}
