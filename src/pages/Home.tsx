import { useState } from 'react'
import '../css/Home.css'

function Home(){
    return(
        <div className='container-grounds'>
            <div className='background'>
                <div id='about-button'>
                    <h5>
                        ABOUT
                    </h5>
                </div>
                <div id='right-side'>
                    <div id='projects-button'>
                        PROJECTS
                    </div>
                    <div id='contact-button'>
                        CONTACT
                    </div>
                </div>
            </div>
            <div className='foreground'>
                <div className='circle'>
                    <div id='title'>
                        <h4>Welcome</h4>
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