import Model from '../utils/model';

class Article extends Model {
  static get modelPaths() {
    return [__dirname];
  }

  static get tableName() {
    return 'articles';
  }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        authorId: { type: 'integer' },
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

  static get relationMappings() {
    // Importing models here is a one way to avoid require loops.
    // const Author = require('./author.model');
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: 'author.model',
        join: {
          from: 'articles.author_id',
          to: 'authors.id'
        }
      }
    }
  };
  
}

export default Article;