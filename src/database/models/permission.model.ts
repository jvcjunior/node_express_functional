const { Model } = require('objection');

class Permission extends Model {
  static get tableName() {
    return 'permissions';
  }

  static get idColumn() {
    return ['code'];
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        code: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 255 },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
      },
    };
  }

  static get relationMappings() {
    // Importing models here is a one way to avoid require loops.
    const Role = require('./role.model');
    const RolePermission = require('./rolePermission.model');
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: Role,
        join: {
          from: 'permissions.id',
          through: {
            modelClass: RolePermission,
            from: 'permissions_users.code',
            to: 'users_permissions.userId'
          },
          to: 'roles.id'
        }
      }
    }
  };
}

export default Permission;