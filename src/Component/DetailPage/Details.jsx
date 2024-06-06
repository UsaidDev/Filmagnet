import React, { useState, useEffect } from 'react';
import './Details.css';
import axios from '../../Constants/Axios';
import { API_KEY, ImageUrl } from '../../Constants/Constants';
function Detail(props) {
    const [idMovie, setIdMovie] = useState([]);
    const itemsId = props.Dtl_id;
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${itemsId}?api_key=${API_KEY}`)
            .then((res) => {
                setIdMovie([res.data]);
                console.log(res.data);
            })
            .catch((err) => {
                console.log('Error');
            });
    }, [itemsId]);
    return (
        <>
                {
                    idMovie.map((movie) => {
                        return (
                            <>
                            <section >
                                <img src={`${ImageUrl}${movie.backdrop_path}`} alt="" />
                                <article id='ctn'>
                                <h1 className='movie_name'>{movie.title}</h1>
                                    <p className='movie_para'>{movie.overview}</p>
                                    <h3 className='movie_release_data'>Release Date: {movie.release_date}</h3>
                                </article>
                                </section>
                            </>
                        )
                    })
                }
        </>
    );
}

export default Detail;