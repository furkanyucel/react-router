import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const useGate = () => {
    navigate("/products");
  }

  return (
    <Fragment>
      <h1>Home</h1>
      <button onClick={useGate}>Navigate Kullan</button>
    </Fragment>
  )
}

export default Home;
