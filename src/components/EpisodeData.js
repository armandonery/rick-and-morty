import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EpiCard from './EpiCard'

export default function Epilist () {    {/* function that returns episodes */}
  const [epis, setEpis] = useState([])

  {/* retrieving api's data */}
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode')
      .then(res => {
        console.log(res)
        setEpis(res.data.results)
      })
      .catch(err => {
        window.alert(err.message)
      })
  }, [])

  return (
    <div>

      <div>
        {/* gets data from EpiCard component */}
        {epis.map(epi => {
          return <EpiCard key={epi.id} epi={epi} />
        })}

      </div>

    </div>

  )
}
