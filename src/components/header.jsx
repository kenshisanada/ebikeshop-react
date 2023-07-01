import React from 'react'
import bikebackground from '../assets/img/bikebackground.png'

export const Header = ({slogan}) => {
  return (
    <div className='header'>
        <div className="container header">
            <div className="image-container">
                <img className="header-img" src={bikebackground} alt="bikebackground" style={{opacity: 0.6 }} />
            </div>
            <div className="slogan-container">
                <h1 className="header-slogan">{slogan}</h1>
            </div>
        </div>
    </div>
  )
}
