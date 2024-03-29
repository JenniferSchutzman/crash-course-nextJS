import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
