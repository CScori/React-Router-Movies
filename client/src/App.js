import React, { useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";
import axios from "axios";

const App = () => {
  const [savedList, setSavedList] = useState([]);
const [Movies, setMovies] = useState([]);
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies/${id}')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getMovies();
  }, []);
 console.log(Movies);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/movies/">Movies</Link>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />
      <SavedList list={savedList} />
    </div>
  );
};

export default App;
