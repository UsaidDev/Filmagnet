import React from 'react'
import './Banner.css'
import Movie_1 from '../../Image/Movies_list/Movie-1.png'
import Movie_2 from '../../Image/Movies_list/Movie-2.png'
import Movie_3 from '../../Image/Movies_list/Movie-3.png'
import Movie_4 from '../../Image/Movies_list/Movie-4.png'

function Banner() {
  return (
    <>
      <div className="banner">
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
            <img src={Movie_1} alt="" />
            <div className="card-content">
              <h4>Free Guy</h4>
            </div>
          </div>

          <div className="card">
            <img src={Movie_2} alt="" />
            <div className="card-content">
              <h4>Veerappan</h4>
            </div>
          </div>

          <div className="card">
            <img src={Movie_3} alt="" />
            <div className="card-content">
              <h4>M.S.Dhoni - The untoldStory</h4>
            </div>
          </div>

          <div className="card">
            <img src={Movie_4} alt="" />
            <div className="card-content">
              <h4>Liger</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Banner;