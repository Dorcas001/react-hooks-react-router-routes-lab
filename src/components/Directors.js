import React from "react";
import { directors } from "../data";

function Directors() {
  const director = directors.map((direct)=>(
  <div>
    <h2 > Name : {direct.name}</h2>
    <ul> Movies : {direct.movies.map((movies)=>(
    <li key={movies}>
      {movies}
    </li>
    ))}
    </ul>
  </div>

  ))
  return <div>{/*{code here}*/}
  <h1>Directors Page</h1>
  {director} 
  </div>;
}

export default Directors;
