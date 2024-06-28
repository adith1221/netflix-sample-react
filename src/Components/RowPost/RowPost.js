import React, { useEffect, useState } from 'react';
import './RowPost.css';
import {imageUrl } from '../../Constants/constants';
import axios from 'axios';

function RowPost(props) {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>
          <img  className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl}${obj.backdrop_path}`} alt="poster" />
        )}
      </div>
    </div>
  );
}

export default RowPost;
