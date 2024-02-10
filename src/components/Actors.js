import React from "react";
import { actors } from "../data";

function Actors() {
  const actor = actors.map((act)=>(
  <div>
    <h2>Actor : {act.name}</h2>
    <ul>
      {act.movies.map((movies)=>
      <li key={movies}>{movies}</li>
      )}
    </ul>
  </div>
  ));
  return <div>{/*{code here}*/}
  <h1>Actors Page</h1>
  <div>  {actor}
  </div>
  
  </div>;
}

export default Actors;
