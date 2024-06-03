import React, { useEffect, useState } from 'react'
import axios from '../../Constants/Axios';
import { ImageUrl, API_KEY } from '../../Constants/Constants';
import './Trending.css'
function Trending() {
  const [trending, SetTrending] = useState([]);
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
      console.log(res.data)
      SetTrending(res.data.results);
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  const handleClicked=(id)=>{
    console.log(id)
  }
  return (
    <div>
      <div className="trending">
        <h2>Trending Movies</h2>
        <p>Click & Learn more</p>

        {
          trending.map((obj) => (
            <div className='trending_Logos' key={obj.id}>
              <img src={`${ImageUrl}${obj.poster_path}`} alt="" onClick={()=>handleClicked(obj.id)} />
            </div>
          ))
        }

      </div>
    </div>
  )
}
export default Trending;