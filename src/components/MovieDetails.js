import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link ,useParams} from 'react-router-dom'
export const MovieDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState([])

    //get  movie by details 
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`)
        setMovie(res.data)
    }
    useEffect(() => {
        getMovieDetails();
    }, [])
  return (
    <Container>
       
       <div className='movie-details'>
    <div className='title'>
      <h2 className='text-sm-start'>Title:{movie.title}</h2>
      <img
className="img"
src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
alt="ascad"
/>
    </div>
<div className='movie-desc mt-2 col-md-6 fs-2'>
  <h2>Description</h2>
<p className="card-text-details border-bottom">
    Release date :{movie.release_date}
</p>
<p className="card-text-details border-bottom">
    vote count: {movie.vote_count}
</p>
<p className="card-text-details border-bottom">
    vote average :{movie.vote_average}
    </p>
  </div>  
    </div>

   
            <div className="card-story mt-1  d-flex flex-column align-items-start">
                <div className="text-end p-4 ">
                    <p className="card-text-title border-bottom">Story:</p>
                </div>
                <div className="text-end px-2">
                    <p className="card-text-story">{movie.overview}</p>
                </div>
           
            <div className='text-center mx-auto'>
                <Link to="/">
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary mx-2">
                    Back to home                </button>
            </Link>
            <a href={movie.homepage}>
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary">
Watch Film
                </button>
            </a>   
            </div>
            </div>
</Container>
  )
}
