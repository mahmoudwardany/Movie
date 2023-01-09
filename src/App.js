import './App.css';
import Navs from './components/Navs';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MovieList from './components/MovieList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MovieDetails } from './components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([])
  const [pageCount, setpageCount] = useState(0)
  //get all movies by axios 
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en")
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  }
  useEffect(() => {
    getAllMovies();
  }, [])
  //get page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  }
  const search=async(word)=>{
    const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=en`)
  setMovies(res.data.results)
  setpageCount(res.data.total_pages)
  }
  return (
    <div className="font color-body ">
    <Navs search={search} />
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/movie" element={<MovieList movies={movies} getPage={getPage} pageCount={pageCount} />} />

          <Route path="/movie/:id" element={<MovieDetails />} />

        </Routes>
      </BrowserRouter>
    </Container>
  </div>
  );
}

export default App;
