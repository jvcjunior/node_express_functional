import Model from '../utils/model';

class Role extends Model {
  static get tableName() {
    return 'roles';
  }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 255 },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
      },
    };
  }
  
  static get relationMappings() {
    // Importing models here is a one way to avoid require loops.
    const Permission = require('./permission.model');
    const RolePermission = require('./rolePermission.model');
    return {
      permissions: {
        relation: Model.ManyToManyRelation,
        modelClass: Permission,
        join: {
          from: 'roles.id',
          through: {
            modelClass: RolePermission,
            from: 'users_permissions.userId',
            to: 'permissions_users.code'
          },
          to: 'permissions.code'
        }
      }
    }
  };
}

export default Role;