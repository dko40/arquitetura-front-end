import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ContentCardHome() {
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
        <div className="image-card m1">
          <img className="img-crd" src={x.image} alt="" />          
        </div>
        <div className="conteudo-card m1">
          <h3>{x.name}</h3>
          <b>Status: </b> {x.status} <br />
          <b>Especie: </b>{x.species} <br />
          <b>Origin: </b>{x.origin.name}<br />
          <b>Type: </b>{x.type}<br />
          <b>Gender: </b>{x.gender}<br />
          
          <Link to={`/character/${x.id}`}>Character details</Link>   

          </div>
      </li>
      ))}
    </ul>
  );
}
export default ContentCardHome;