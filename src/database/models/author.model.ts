import Model from '../utils/model';

class Author extends Model {
  static get modelPaths() {
    return [__dirname];
  }

  static get tableName() {
    return 'authors';
  }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        picture: { type: 'string', minLength: 1, maxLength: 255 },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
      },
    };
  }

  static get relationMappings() {
    // Importing models here is a one way to avoid require loops.
    // const Article = require('./article.model');
    return {
      author: {
        relation: Model.HasManyRelation,
        modelClass: 'article.model',
        join: {
          from: 'authors.id',
          to: 'articles.author_id'
        }
      }
    }
  };
  
}

export default Author;