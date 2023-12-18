import NewsCard from "./newscard";

const CardSection = ({ title, articles }) => {
  const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "2rem 0",
    width: "100%",
  };
  return (
    <>
      <h1>{title || "News Articles"}</h1>
      <section style={style}>
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
