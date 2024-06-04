import React, { useState } from 'react'
import './Details.css'
import { useEffect } from 'react'
import axios from '../../Constants/Axios'
import { API_KEY, ImageUrl } from '../../Constants/Constants'
function Detail(props) {

    const [idMovie, SetidMovie] = useState([])
    const ItemsId = props.Dtl_id
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${ItemsId}?api_key=${API_KEY}`).then((res) => {
            SetidMovie([res.data])
            console.log(res.data)
        }).catch((err) => {
            console.log('Error')
        })
    }, [ItemsId])
    return (
        <div>
            <div className="Detail_Page">
                {
                    idMovie.map((obj) => {
                        return (<>
                        <h2>{obj.title}</h2>
                        <p></p>
                        <img src={`${ImageUrl}${obj.backdrop_path}`} alt="" />
                        </>)
                    })
                }
            </div>
        </div>
    )
}
export default Detail;