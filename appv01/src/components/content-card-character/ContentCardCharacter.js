import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ContentCardCharacter() {
  const {id} = useParams()
  const [char, setChar] = useState({})
  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(data => {
        const dta = {
          id, 
          avatar: data.image,
          name: data.name,
          species: data.species,
          status:  data.status, 
          type: data.type ,
          gender: data.gender ,
           origin: data.origin.name
                  
        
        }


        setChar(dta)
      })
  },[id])
return (
  <>
   <ul className="content-card">
    <img src={char.avatar} />
    <li><h1>{char.name}</h1></li>
    <li><span>Status: {char.status}</span></li>
    <li><span>species: {char.species}</span></li>
    <li><span>Type: {char.type}</span></li>
    <li><span>Gender: {char.gender}</span></li>
    <li><span>Origin: {char.origin}</span></li>
   </ul>
  </>
)
}
export default ContentCardCharacter;