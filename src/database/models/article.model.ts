const { Model } = require('objection');

class Article extends Model {
  static get tableName() {
    return 'authors';
  }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        category: { type: 'string', minLength: 1, maxLength: 50 },
        title: { type: 'string', minLength: 1, maxLength: 100 },
        summary: { type: 'string', minLength: 1, maxLength: 255 },
        firstParagraph: { type: 'string', minLength: 1, maxLength: 255 },
        body: { type: 'string' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
      },
    };
  }
  
}

export default Article;