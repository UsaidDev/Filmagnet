import React, { useEffect, useState } from 'react'
import './Posters.css'
import axios from '../../Constants/Axios'
import { ImageUrl, API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function Posters(props) {
    const [movies, SetMovies] = useState([]);
    const [UrlId, SetUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            SetMovies(response.data.results)
            console.log(response.data)
        }).catch((err) => {
            console.log("Error");
        })
    }, [props.url]);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    const handleMovies = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res => {
            console.log(res.data)
            if (res.data.results.length !== 0) {
                SetUrlId(res.data.results[0])
            } else {
                console.log('Array empty')
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <div className="posters">
                <div className={props.Small ? 'Small_Image' : 'Posters_Logos'}>
                    {movies.map((obj) =>
                        <img src={`${ImageUrl}${obj.backdrop_path}`} alt="Posters_Logos" onClick={() => handleMovies(obj.id)} />
                    )}
                </div>
                {UrlId && <YouTube opts={opts} videoId={UrlId.key} className='video_player'/>}
            </div>
        </div>
    )
}
export default Posters;