import { useState, useEffect } from "react";

function ContentCard() {
  const [character, setCharacter] = useState([])
  useEffect(
    () => {
      fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      //pulo do gato -> aqui eu puxo o ponto de partida 
      .then((res) => (setCharacter(res.results)))
      .catch((error) => console.log(error))
    }, [])
  // console.log(character,"aki")
  return (

    <ul className="content-card">
      {character.map((x, index)=>(        
        <li key={index} className="card">
        <div className="image-card m2">
          <img className="img-crd" src={x.image} alt="" />          
        </div>
        <div className="conteudo-card">
          <h3 className="m2">{x.name}</h3>
          <h4 className="m2">Alive - Human</h4>
          <h4 className="m2"> Last known location:</h4>
          <p className="tsz1 m2"> Citadel of Ricks</p>
          <h4 className="m2">First seen in:</h4>
          <p className="tsz1 m2">The Ricklantis Mixup</p>
          <div className="link-card tsz1 m2"><a href="http://www.google.com.br">link do card</a></div>
        </div>
      </li>


      ))}
      


    </ul>
  );
}

export default ContentCard;