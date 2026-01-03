import React, { useEffect, useState } from 'react'
import Moviecard from '../components/moviecard'
import NavBar from '../components/NavBar';
import '../css/Home.css'
import { searchMovies, getPopularMovies } from '../services/api';

const Home = () => {

const [searchQuery, setsearchQuery] = useState("")
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
    const loadpopmovi = async()=>{
      try{
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      }catch(error){
        setError("Failed to fetch popular movies.");
        console.log(error);
        
      }finally{
        setLoading(false);
      }
    }

    loadpopmovi();
},[])

    const handleSearch=async (e)=>{
        e.preventDefault()
        if(!searchQuery.trim()) return;
        if(loading) return;


        setLoading(true)
        try{
          const searchResults = await searchMovies(searchQuery);
          setMovies(searchResults);
          setError(null);
        } catch(err){
          setError("Failed to fetch search results.");
        }
        finally{
          setLoading(false);
        }

    }


  return (
    <div className='home'>

        <form onSubmit={handleSearch} className='search-form' >
            <input  value={searchQuery} onChange={(e)=> setsearchQuery(e.target.value)} className='search-input' type="text" placeholder='Search for movies...' />
            <button type='submit' className='search-btn'>Search</button>
        </form>

        {error && <div className='error-message'>{error}</div>}
       {loading ? (<div className='loading'>Loading..</div>): 

       <div className='home-grid'>
            {movies.map((movie)=>{
            //    return movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
           return <Moviecard movie={movie} key={movie.id} />
            })}
      </div>  }
    </div>
  )
}

export default Home