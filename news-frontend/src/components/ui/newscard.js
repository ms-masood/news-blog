import { Link } from "react-router-dom";
import style from "../../css/newscard.module.css";
import sample from "../../assets/background.png";

const NewsCard = ({ article }) => {
  return (
    <>
      <article className={style.news_article}>
        <figure>
          <img src={article?.image || sample} alt="" />
        </figure>
        <div className={style.article_body}>
          <h2>{article?.heading || "This is some title"}</h2>
          <p>
            {article?.description ||
              "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit."}
          </p>
          <span>
            Author <i className={`fa-${"solid"} fa-star`}></i>
          </span>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <span>
            Source <i className={`fa-${"regular"} fa-star`}></i>
          </span>
          <br />
          <Link to={""}>{article?.date || "11-Sep-2023, "}</Link>
          <Link to={""}>{article?.author || "David Beckham, "}</Link>
          <Link to={""}>{article?.source || "BBC News"}</Link>
        </div>
      </article>
    </>
  );
};

export default NewsCard;
