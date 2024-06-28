import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../Constants/constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {
  
  const [movie,setMovie]=useState()
  useEffect(()=>{

    axios.get(`/trending/movie/week?api_key=${API_KEY}`).then((response)=>{
    console.log(response.data.results[0])
    setMovie(response.data.results[0])
  }
  )
  },[])


  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='Banner'>
        <div className="contents">
        <h1 className='title'>{movie ? movie.title :""}</h1>
            <div className='buttons'>
                <button className='play'>play</button>
                <button className='play'>more</button>
            </div>
        </div>
        <h1 className='description'>{movie ? movie.overview :''}</h1>
      <div className="fade">
        
      </div>
    </div>
  )
}

export default Banner
