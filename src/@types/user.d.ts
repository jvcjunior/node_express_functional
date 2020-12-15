interface IUser {
  id: number;
  name: String;
  email: String;
  role: IRole;
  password?: String;
  created_at?: Date;
  updated_at?: Date;
}