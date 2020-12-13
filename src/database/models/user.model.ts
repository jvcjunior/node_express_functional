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
    const Role = require('./role.model');
    return {
      role: {
        relation: Model.HasOneRelation,
        modelClass: Role,
        join: {
          from: 'users.id',
          to: 'roles.id'
        }
      }
    }
  };
  
}

export default User;