import React, { useEffect, useState } from 'react'
import './Banner.css'
import Movie_2 from '../../Image/Movies_list/Movie-2.png'
import Movie_3 from '../../Image/Movies_list/Movie-3.png'
import Movie_4 from '../../Image/Movies_list/Movie-4.png'
import axios from '../../Constants/Axios'
import { API_KEY, ImageUrl } from '../../Constants/Constants'
import Posters from '../Posters/Posters'
import { comedy } from '../Url/Url'
import Navbar from '../Navbar/Navbar'

function Banner(props) {
  const [movie, SetMovie] = useState([]);
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      SetMovie(response.data.results[15]);
    }).catch((err) => {
      alert(err)
    })
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ backgroundImage: `url(${movie ? ImageUrl + movie.backdrop_path : ""})` }} className="banner">
        <div className="banner-items">
          <h2>Filmagnet</h2>
          <h3>Unlimited <span>Entertainment,</span><br />
            Movies, TVs shows, & More.
          </h3>
          <button>Play Now</button>
        </div>
      </div>
      <div className="Movies-list">
        <div className="Movies-heading">
          <h5>ONLINE STREAMING</h5>
          <h4>Upcoming Movies</h4>
        </div>
        <div className="card-container">
          <div className="card">
            <img src={Movie_2} alt="Card-2" />
            <div className="card-content">
              <h4>Veerappan</h4>
              <p>2023</p>
              <span>HD</span>
            </div>
          </div>
          <div className="card">
            <img src={Movie_3} alt="Card-3" />
            <div className="card-content">
              <h4>M.S.Dhoni - The untoldStory</h4>
              <p>2023</p>
              <span>HD</span>
            </div>
          </div>
          <div className="card">
            <img src={Movie_4} alt="Card-4" />
            <div className="card-content">
              <h4>Liger</h4>
              <p>2023</p>
              <span>HD</span>
            </div>
          </div>
        </div>
        <h2 className='title'>{props.title}</h2>
        <p className='shot_title'>{props.shot_title}</p>
        <Posters url={comedy} title_cmd={"Filmagnet Comedy"} />
      </div>
    </>
  )
}
export default Banner;