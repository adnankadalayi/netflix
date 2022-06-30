import React from 'react';
import './RowPost.css'
import {useEffect, useState} from 'react';
import axios from '../axios';
import { API_KEY, imageUrl} from '../../Constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovies(response.data.results);
    }).catch(err =>{
      alert('Error: ' + err.message)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Empty Array');
      }
    })
  }
  return (
    <div className='row'>
        <h1 style={{paddingTop: '8px'}}>{props.title}</h1>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
          
        </div>
        {urlId && <Youtube opts={opts} videoId= {urlId.key}/>}
    </div>
  )
}

export default RowPost