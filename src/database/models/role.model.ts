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
    return {
      permissions: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/permission.model',
        join: {
          from: 'roles.id',
          through: {
            // modelClass: __dirname + '/rolePermission.model',
            from: 'rolePermissions.roleId',
            to: 'rolePermissions.code'
          },
          to: 'permissions.code'
        }
      },
      user: {
        relation: Model.HasOneRelation,
        modelClass: __dirname + '/user.model',
        join: {
          from: 'roles.id',
          to: 'users.roleId'
        }
      }
    }
  };
}

export default Role;