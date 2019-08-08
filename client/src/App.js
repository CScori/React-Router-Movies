import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>

      <Link to="/">Home</Link>
      <Link to="/movies/">Movies</Link>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
