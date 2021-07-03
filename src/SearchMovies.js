import React,{useState} from 'react';
import MovieCard from './MovieCard'
function SearchMovies(){
    const [query,setQuery]=useState('');
    const [movies,setMovies]=useState([]);
    const searchMovies=async(e)=>{
        e.preventDefault();
const url=`https://api.themoviedb.org/3/search/movie?api_key=93e39a2bf3b803d8e36f1670974409b3&language=en-US&query=${query}&page=1&include_adult=true`;
       try{
            const res= await fetch(url);
        const data=await res.json();
        console.log(data.results);
        setMovies(data.results);
       }
       catch(err){
           console.log(err);
       }
    }
   // https://api.themoviedb.org/3/movie/550?api_key=93e39a2bf3b803d8e36f1670974409b3
    // `https://api.themoviedb.org/3/search/movie?api_key=93e39a2bf3b803d8e36f1670974409b3&language=en-US&query=${query}&page=1&include_adult=false`
    return(
        <>
        <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input type="text" className="input" placeholder="aveenger" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <button className="button" type="submit" >Search</button>
        </form>
        <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id} />   
        ))}
        </div>
        </>
    )
}
export default SearchMovies;