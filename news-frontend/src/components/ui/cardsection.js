import NewsCard from "./newscard";
import style from "../../css/cardsection.module.css";

const CardSection = ({ title, articles }) => {
  return (
    <>
      <h1>{title || "News Articles"}</h1>
      <section className={style.container}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>
    </>
  );
};

export default CardSection;
