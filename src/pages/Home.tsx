import '../css/Home.css'
import '../css/Text.css'
import '../css/Links.css'
import { Outlet, Link } from 'react-router';

function Home(){
    return(
        <div className='container-grounds'>
            <div className='background'>
                <Link to='/About' id='about-link'>
                    <div id='about-button'>
                        <h5 className='big-text'>
                            ABOUT
                        </h5>
                    </div>
                </Link>
                <div id='right-side'>
                    <Link to='/Projects' id='projects-link'>
                        <div id='projects-button'>
                            <h4 className="medium-text right-text">
                                PROJECTS
                            </h4>
                        </div>
                    </Link>
                    <Link to='/Contact' id='contact-link'>
                        <div id='contact-button'>
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