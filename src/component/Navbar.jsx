import React from 'react';
import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
    return (
        <div>
<nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm ">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" href="/">LOC'STORE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Accueil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/products">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Categorie 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Categorie 3</a>
        </li>
        
      </ul>
      <div className="buttons">
        <a to="" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1" ></i>  Me connecter</a>
            <a to="" className="btn btn-outline-dark ms-2">
            <i className="fa-solid fa fa-user-plus me-2"></i>  S'inscrire</a>
            <a to="" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i>{state.length}</a>
      </div>
    </div>
    <form class="d-flex" role="search">
        <input class="form-control me-2 ms-2" type="search" placeholder="Recherche" aria-label="Search" />
        <button class="btn btn-outline-dark ms-2" type="submit">Recherche</button>
      </form>
  </div>
</nav>
        </div>
    );
}

export default Navbar;