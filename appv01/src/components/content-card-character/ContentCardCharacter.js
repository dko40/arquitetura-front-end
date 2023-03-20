import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ContentCardCharacter() {
  const { id } = useParams([]);
  const [char, setChar] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const dta = {
          id,
          avatar: data.image,
          name: data.name,
          species: data.species,
          status: data.status,
          type: data.type,
          gender: data.gender,
          origin: data.origin.name,
          episode: data.episode,
          total: data.episode.length,
        };
        setChar(dta);
      });
  }, [id]);

  return (
    <>
      <ul className="content-card">
      <h1>Character</h1><br />
        <img src={char.avatar} alt="avatar" />
        <li>
          <h3>{char.name}</h3>
        </li>
        <li>
          <span>Status: {char.status}</span>
        </li>
        <li>
          <span>Species: {char.species}</span>
        </li>
        <li>
          <span>Type: {char.type}</span>
        </li>
        <li>
          <span>Gender: {char.gender}</span>
        </li>
        <li>
          <span>Origin: {char.origin}</span>
        </li>
        <li>
          <span>Total Episode: {char.total}</span>
        </li>
        {char.episode && char.episode.length > 0 && (
          <li>
            Episodes:
            <ul>
              {char.episode.map((episodeUrl, index) => (
                
                //url.replace(/function=search/, 'function=loginsearch&user=admin&password=admin');
                //https://rickandmortyapi.com/
               <li><Link to={`${episodeUrl.replace('https://rickandmortyapi.com/api/','/')}`} 
               key={index}>
                Episode: 
                {` ${episodeUrl.replace('https://rickandmortyapi.com/api/episode/','')}`}</Link></li> 
              ))}
            </ul>
          </li>
        )}
      </ul>
    </>
  );
}

export default ContentCardCharacter;
