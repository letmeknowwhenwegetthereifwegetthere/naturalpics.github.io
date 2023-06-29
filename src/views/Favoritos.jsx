import { useContext } from "react";
import Context from "../Context";
import FiltroFavoritos from "../components/FiltroFavoritos";
import React from "react";
import {Container } from "react-bootstrap";



const Favoritos = () =>{

  return (
    <>
    <Container fluid>
        <Container className="my-2 text-center">
            <h1>Favoritas ❤️</h1>
            <p> Aquí encontrarás todas tus fotos favoritas</p>
            <hr/>
        </Container>
        <FiltroFavoritos/>
    </Container>
    </>
  )
}
export default Favoritos
