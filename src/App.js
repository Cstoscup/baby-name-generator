import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [gender, setGender] = useState('Boy')
  const [names, setNames] = useState([])

  useEffect(() => {
    console.log('KEY:', process.env.REACT_APP_API_KEY)
    axios.get(`https://api.api-ninjas.com/v1/babynames?gender=${gender}`, {
      headers: {'X-Api-Key': process.env.REACT_APP_API_KEY}
    })
      .then((names) => {
        setNames(names.data)
      })
  }, [gender])

  return (
    <div className="App">
      <h1>Baby {gender} Names!</h1>
      {
        names.map((name) => {
          return (
            <div>{name}</div>
          )
        })
      }

      {gender === 'Neutral' ? <button className="gender-button" onClick={() => {setGender('Boy')}}>See Boy Names!</button> : <button className="gender-button" onClick={() => {setGender('Neutral')}}>See Neutral Names!</button>}
    </div>
  );
}

export default App;
