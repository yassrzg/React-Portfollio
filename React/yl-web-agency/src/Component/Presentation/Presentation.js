import React from 'react'
import Profil from '../../Thumbs/yas.jpg'
import './presentation.css'

export default function Presentation() {
  return (
    <div>
      <div>
        <h1>Dev Full Stack</h1>
      </div>
      <div id='Presentation'>
        <div id='Photo'>
          <img src={Profil} id="Profil"/>
        </div>
        <div id='biographie'>
          <p>"My name is Yassine, and I am passionate about creating things on the web. I enjoy building new projects and learning about new languages of programming and new development methods. This is the main reason why I decided to make my passion my future job. I am an ambitious person and I want to work internationally."
            </p>
        </div>
          
      </div>
    </div>
  )
}

