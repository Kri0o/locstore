import React from "react";
import Products from "./Products";
import Image from "../assets/bg.jpg";

const Home = () => {
  return (
    <div className="main">
      <div className="card text-bg-dark border-0">
        <img src={Image} className="card-img" alt="background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container"></div>
          <h5 className="card-title display-4 fw-bolder mb-0 text-danger">
            LOCATION DE MATERIEL
          </h5>
          <p className="card-text lead display-5 text-info fs-2">
            POUR PARTICULIERS ET EVENEMENTS
          </p>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
