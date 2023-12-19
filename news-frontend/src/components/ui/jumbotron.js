import { Link } from "react-router-dom";
import sample from "../../assets/jumbotronMain.jpg";
import style from "../../css/jumbotron.module.css";
// import SmallCard from "./smallcard";

const Jumbotron = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.image_container}>
        <img
          src={
            data?.link ||
            // "https://www.kasandbox.org/programming-images/avatars/spunky-sam.png" ||
            "https:///www.kasandbox.org/programming-images/avatars/mr-pants.png" ||
            sample
          }
          alt="jumbotron"
        />
        <div className={style.details}>
          <h1>{data?.heading || "Florida Man"}</h1>
          <p>
            {data?.description ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
          </p>
          <Link to={""}>David William, </Link>
          <Link to={""}>The Guardians, </Link>
          <Link to={""}>11-june-2023</Link>
        </div>
      </div>
      <div className={style.aside_container}>
        <div>
          <img src={sample} alt="" />
          <h3>Title</h3>
          <p>Small Description</p>
          <Link to={""}>David William, </Link>
          <Link to={""}>The Guardians, </Link>
          <Link to={""}>11-june-2023</Link>
        </div>
        <div>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWtRQul4j5Cz9jyQb2e4TPndJRDLGRBPlFLA&usqp=CAU"
            }
            alt=""
          />
          <h3>Title</h3>
          <p>Small Description</p>
          <Link to={""}>Mike o Hearn, </Link>
          <Link to={""}>ABC News,</Link>
          <Link to={""}>11-june-2012 </Link>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
