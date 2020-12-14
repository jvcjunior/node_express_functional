import Model from '../utils/model';

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
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass:  __dirname + '/role.model',
        join: {
          from: 'permissions.id',
          through: {
            // modelClass:  __dirname + '/rolePermisson.model',
            from: 'rolePermissions.code',
            to: 'rolePermissions.roleId'
          },
          to: 'roles.id'
        }
      }
    }
  };
}

export default Permission;