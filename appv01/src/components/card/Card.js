
import React from "react";

const Card = () => (

    <li className="card">
        <div className="image-card m2">
            <img className="img-crd" src="./" alt="" />
            Imagem aqui 
        </div>
        <div className="conteudo-card">
        <h3 className="m2">Alive - Human</h3> 
        <h4 className="m2"> Last known location:</h4>
        <p className="tsz1 m2"> Citadel of Ricks</p>
        <h4 className="m2">First seen in:</h4>
        <p className="tsz1 m2">The Ricklantis Mixup</p>
            <div className="link-card tsz1 m2"><a href="http://www.google.com.br">link do card</a></div>
        </div>
    </li>
)

export default Card;

