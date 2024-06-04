import React from 'react'
import './Details.css'
import { useEffect } from 'react'
import axios from '../../Constants/Axios'
import { API_KEY } from '../../Constants/Constants'
function Detail(props) {
    const ItemsId=props.Dtl_id
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${ItemsId}?api_key=${API_KEY}`).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log('Error')
        })
    }, [ItemsId])
    return (
        <div>
            <div className="Detail_Page">
               <h2>Hello World</h2>
            </div>
        </div>
    )
}
export default Detail;