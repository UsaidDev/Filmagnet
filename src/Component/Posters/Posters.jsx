import React, { useEffect, useState } from 'react'
import './Posters.css'
import axios from '../../Constants/Axios'
import { API_KEY, ImageUrl } from '../../Constants/Constants'
function Posters() {
    const [movies, SetMovies] = useState([]);

    useEffect(() => {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
            console.log(response.data);
            SetMovies(response.data.results)
        }).catch((err) => {
            console.log("Error");
        })
    }, []);

    return (
        <div>
            <div className="posters">
                {movies.map((obj) =>
                    <img src={`${ImageUrl}${obj.backdrop_path}`} alt="" className='Poster_Image' />
                )}
            </div>
        </div>
    )
}

export default Posters;