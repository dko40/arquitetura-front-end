import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
 

function ContentCardEpisode() {
  const { id } = useParams([]);
  const [epi, setEpi] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const dta = {
          id,           
          name: data.name,
          air_date: data.air_date,
          episode: data.episode,           
        };
        setEpi(dta);
      });
  }, [id]);

  return (
    <> 
      <ul className="content-card">
        <h1>Episode</h1><br />
      <li>
          <span>ID: {epi.id}</span>
        </li>
        <li>
          <span>Episode: {epi.name}</span>
        </li>
        <li>
          <span>Air Date: {epi.air_date}</span>
        </li>
        <li>
          <span>Episode: {epi.episode}</span>
        </li> 
      </ul>
    </>
  );
}

export default ContentCardEpisode;
