import Model from '../utils/model';
class User extends Model {
  static get tableName() {
    return 'users';
  }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        roleId: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 255 },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
      },
    };
  }

  static get relationMappings() {
    // Importing models here is a one way to avoid require loops.
    return {
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/role.model',
        join: {
          from: 'users.roleId',
          to: 'roles.id'
        }
      }
    }
  };
  
}

export default User;