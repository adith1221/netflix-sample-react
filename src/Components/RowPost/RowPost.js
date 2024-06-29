import React, { useEffect, useState } from 'react';
import './RowPost.css';
import YouTube from 'react-youtube';
import {imageUrl } from '../../Constants/constants';
import axios from 'axios';
import { API_KEY } from '../../Constants/constants';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState([]);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        console.log(response.data);
        const shuffledMovies = shuffleArray(response.data.results);
        setMovies(shuffledMovies);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, [props.url]);

  const shuffleArray = (array) => {
    let shuffledArray = array;
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const opts = {
    height: '400px',
    width: '80%',
    playerVars: {
      autoplay: 0,
    }};


    const click =(id)=>{
      console.log(id)

      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
        if(response.data.results.length !==0){
          setUrlId(response.data.results[0])
          setShowVideo(true)
        }else{
          setUrlId({key: 'IU44wOgM168'})
          setShowVideo(true);
        }
      })
      .catch(error=>{
        setUrlId({key: '2YWONenid6A'})
        setShowVideo(true);
      })
    }
  return (
    <div className='row'>
      <h2>{props.title}</h2>

      <div className="posters">
        {movies.map((obj) =>
          <img  onClick={()=>
            click(obj.id)
          } className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl}${obj.backdrop_path}`} alt="poster" />
        )}
        
      </div>{
      showVideo &&(
      <div className="vidoplayer"> 
          <YouTube opts={opts}videoId={urlId.key} />
          <button className='button' onClick={() => setShowVideo(false)}>close</button>
      </div>
      )}
    </div>
  );
}

export default RowPost;
