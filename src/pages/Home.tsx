import { useState } from 'react'
import '../css/Home.css'

function Home(){
    return(
        <div className='container-grounds'>
            <div className='background'>
                <div id='about-button'>

                </div>
                <div id='right-side'>
                    <div id='projects-button'>

                    </div>
                    <div id='contact-button'>

                    </div>
                </div>
            </div>
            <div className='foreground'>
                <div className='circle'>
                    <div className='title'>
                        <h4>Welcome</h4>
                        <p>
                            Hello! This is the website of Gavin Lacy

                            Check it out and feel free to contact me!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home