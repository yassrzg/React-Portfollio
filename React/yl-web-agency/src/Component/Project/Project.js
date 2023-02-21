import React from 'react'
import TodoList from '../../Thumbs/TODOLIST.png'
import VideoMontage from '../../Thumbs/projet2.jpg'
import mcDo from '../../Thumbs/projet3.png'
import HP from '../../Thumbs/projet5.png'
import GOT from '../../Thumbs/projet6.jpg'
import Netflix from '../../Thumbs/netflix.jpg'
import './Project.css'

export default function Project() {
  return (
    <div>
        <div className="fw-bold project-title text-center mx-auto ">
            <h2 id="project-title2">MY PROJECTS</h2>
        </div>

        <div id='Project-card'>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={TodoList} className="img-card"/>
                    </div>
                    <div className="flip-card-back">
                        <h1>Project: Todo List</h1>
                        <p>Html/Css3/BootStrap/React</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={VideoMontage} className="img-card"/>
                    </div>
                    <div className="flip-card-back">
                        <h1>Project: Video Montage</h1>
                        <p>Html/Css3/BootStrap</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={mcDo} className="img-card"/>
                    </div>
                    <div className="flip-card-back">
                        <h1>Project: Mc Donald's</h1>
                        <p>Html/Css3/BootStrap</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={HP} className="img-card"/>
                    </div>
                    <div className="flip-card-back">
                        <h1>Project: Harry Potter</h1>
                        <p>Html/Css3/BootStrap</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>
        

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={GOT} className="img-card"/>
                    </div>
                    <div className="flip-card-back">
                        <h1>Project: Game Of Thrones</h1>
                        <p>Html/Css3/BootStrap</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={Netflix} className="img-card"/>
                    </div>
                    <div className="flip-card-back">
                        <h1>Project: Netflix</h1>
                        <p>Html/Css3/BootStrap</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={Netflix} className="img-card"/>
                    </div>
                    <div className="flip-card-back">
                        <h1>Project: Netflix</h1>
                        <p>Html/Css3/BootStrap</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={Netflix} className="img-card"/>
                    </div>
                    <div className="flip-card-back">
                        <h1>Project: Netflix</h1>
                        <p>Html/Css3/BootStrap</p>
                        <button>See More</button>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}
