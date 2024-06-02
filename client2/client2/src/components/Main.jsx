import React from 'react'
import Player from './Player'
// import './styles.css';

const Main = () => {
  return (
    <section>
      <Player />

      <div className='database'>
        <h1> PlayList</h1>

        <div className="search-input-wrapper">
          <input type="text" placeholder="Search.." name="query" />
          <img src='./src/assets/search.svg' className="search-icon" alt="search icon"/>
        </div>

        <div className='database-contents'>
          <img src='./src/assets/zoom.svg' alt="zoom"/>
          <p>Big Buck Bunny</p>
        </div>
        <div className='database-contents'>
          <img src='./src/assets/zoom.svg' alt="zoom"/>
          <p>Big Buck Bunny</p>
        </div>
        <div className='database-contents'>
          <img src='./src/assets/zoom.svg' alt="zoom"/>
          <p>Big Buck Bunny</p>
        </div>
        <div className='database-contents'>
          <img src='./src/assets/zoom.svg' alt="zoom"/>
          <p>Big Buck Bunny</p>
        </div>
        <div className='database-contents'>
          <img src='./src/assets/zoom.svg' alt="zoom"/>
          <p>Big Buck Bunny</p>
        </div>
      </div>
    </section>
  )
}

export default Main
