import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharCard from './CharCard'

export default function Charlist () {   {/* function that returns characters */}
  const [chars, setChars] = useState([])

  {/* retrieving data from rick and morty's api */}
  useEffect(() => {   {/* calling rick and morty api with useEffect hook */}
    axios
      .get('https://rickandmortyapi.com/api/character/')    
      .then(res => {
        console.log(res)
        setChars(res.data.results)
      })
      .catch(err => {
        window.alert(err.message)
      })
  }, [])

  console.log('Characters:', chars)

  return (
    <div>

      <div>
        {/* gets data from CharCard component */}
        {chars.map(char => {
          return <CharCard key={char.id} char={char} /> 
        })}

      </div>

    </div>

  )
}
