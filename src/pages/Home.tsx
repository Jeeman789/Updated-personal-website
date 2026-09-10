import { useState } from 'react'
import '../css/Home.css'
import '../css/Text.css'

function Home(){
    return(
        <div className='container-grounds'>
            <div className='background'>
                <div id='about-button'>
                    <h5 className='big-text'>
                        ABOUT
                    </h5>
                </div>
                <div id='right-side'>
                    <div id='projects-button'>
                        <h4 className="medium-text right-text">
                            PROJECTS
                        </h4>
                    </div>
                    <div id='contact-button'>
                        <h4 className="medium-text right-text">
                            CONTACT
                        </h4>
                    </div>
                </div>
            </div>
            <div className='foreground'>
                <div className='circle'>
                    <div id='title'>
                        <h4 className='medium-text'>Welcome</h4>
                        <p>
                            Hello! This is the website of Gavin Lacy
                        </p>
                        <p id='second-sentence'>
                            Take a look around and feel free to contact me!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home