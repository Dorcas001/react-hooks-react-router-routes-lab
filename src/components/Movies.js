import React from "react";
import { movies } from "../data";

function Movies() {
  const allMovie = movies.map((movie)=>(
    <div key={movie.title}>
      <h2>Title : {movie.title}</h2>
      <h3>Time : {movie.time}</h3>
      <ul>
        {movie.genres.map((genre)=> (
        <li key={genre}> {genre}</li>
          
         ))} 
      </ul>

    </div>

  ))
  return <div>{/*{code here}*/}
  <h1> Movies Page</h1>
  <div> {allMovie}</div>
  </div>;
}

export default Movies;
