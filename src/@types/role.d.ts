interface IRole {
  id: number;
  name: String;
  description: String;
  permissions: IPermission[];
  created_at: Date;
  updated_at: Date;
}