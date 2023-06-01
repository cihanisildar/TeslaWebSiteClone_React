import React from 'react'
import video from '../../assets/video2.mp4'
import './video.css'

function Video() {
  return (
    <div className='video-container'>
        <video autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>
    </div>
  )
}

export default Video