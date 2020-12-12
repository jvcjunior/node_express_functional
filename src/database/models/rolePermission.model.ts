const { Model } = require('objection');

class RolePermission extends Model {
  static get tableName() {
    return 'rolePermissions';
  }

  static get idColumn() {
    return ['code', 'roleId'];
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        code: { type: 'string', minLength: 1, maxLength: 255 },
        roleId: { type: 'integer' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
      },
    };
  }
}

export default RolePermission;