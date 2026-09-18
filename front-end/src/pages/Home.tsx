import '../css/Text.css'
import '../css/Home.css'
import '../css/Links.css'
import carfax1 from '../assets/Carfax team.png'
import { Outlet, Link } from 'react-router';
import { useState } from 'react';

function Home(){
    // const [imageState, setImageState] = useState(carfax1);

    // const changeImage = () => {
        
    // }

    return(
        <div className='container-grounds'>
            <div className='background'>
                <Link to='/About' id='about-link'>
                    <div id='about-button' className='button'>
                        <h5 className='big-text'>
                            ABOUT
                        </h5>
                    </div>
                </Link>
                <div id='right-side'>
                    <Link to='/Projects' id='projects-link'>
                        <div id='projects-button' className='button'>
                            <h4 className="medium-text right-text">
                                PROJECTS
                            </h4>
                        </div>
                    </Link>
                    <Link to='/Contact' id='contact-link'>
                        <div id='contact-button' className='button'>
                            <h4 className="medium-text right-text">
                                CONTACT
                            </h4>
                        </div>
                    </Link>
                </div>
            </div>
            <Outlet />
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