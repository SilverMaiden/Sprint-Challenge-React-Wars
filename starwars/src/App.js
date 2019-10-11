import React, { useState, useEffect } from 'react';
import CharacterCardHolder from './components/CardHolder/CardHolder';
import './App.css';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [peopleList, setPeopleList] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
        //1: get response.data.results
        //2: map over the array, and push each item to peopleList
        setPeopleList(response.data.results);


    })

  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCardHolder peopleList={peopleList} />

    </div>
  );
}

export default App;
