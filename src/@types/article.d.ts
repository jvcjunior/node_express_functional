interface IArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  firstParagraph: string;
  author_id: IAuthor;
  body: string;
  created_at: Date;
  updated_at: Date;
}