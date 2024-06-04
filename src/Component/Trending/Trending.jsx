import React, { useEffect, useState } from 'react'
import axios from '../../Constants/Axios';
import { ImageUrl, API_KEY } from '../../Constants/Constants';
import './Trending.css'
import Details from '../DetailPage/Details';
function Trending() {
  const [trending, SetTrending] = useState([]);
  const [SelectId, SetSelectId] = useState(null)
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
      console.log(res.data)
      SetTrending(res.data.results);
    }).catch((err) => {
      console.log(err)
    })
  }, []);
  const handleClick = (id) => {
    SetSelectId(id)
  }
  return (
    <div>
      <div className="trending">
        <h2 className='tlt-trending'>Trending Movies</h2>
        <p className='para-trending'>Click & Learn more</p>
        {
          trending.map((obj) => (
            <div className='trending_Logos' key={obj.id}>
              <img src={`${ImageUrl}${obj.backdrop_path}`} alt="" onClick={() => handleClick(obj.id)} />
            </div>
          ))
        }
        <Details Dtl_id={SelectId} />
      </div>
    </div>
  )
}
export default Trending;