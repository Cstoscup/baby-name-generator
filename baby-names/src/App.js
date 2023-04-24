import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [gender, setGender] = useState('boy')
  const [names, setNames] = useState([])

  useEffect(() => {
    axios.get(`https://api.api-ninjas.com/v1/babynames?gender=${gender}`, {
      headers: {'X-Api-Key': process.env.REACT_APP_API_KEY}
    })
      .then((names) => {
        setNames(names.data)
      })
  }, [gender])

  return (
    <div className="App">
      <h1>Baby Names!</h1>
      {
        names.map((name) => {
          return (
            <div>{name}</div>
          )
        })
      }
      <div className='gender-buttons'>
        <button onClick={() => {setGender('boy')}}>Boy</button>
        <button onClick={() => {setGender('neutral')}}>Neutral</button>
      </div>

    </div>
  );
}

export default App;
