import React from 'react'
import './Banner.css'

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
      </div>
    </>
  )
}
export default Banner;