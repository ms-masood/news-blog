import { Link } from "react-router-dom";

const Page401 = () => {
  return (
    <>
      Not Authorized
      <br />
      <Link to={"/"}>Homepage</Link>
    </>
  );
};

export default Page401;
