import '../css/Home.css'
import '../css/Text.css'
import '../css/Links.css'
import { Outlet, Link } from 'react-router';

function Home(){
    return(
        <div className='container-grounds'>
            <div className='background'>
                <div id='about-button'>
                    <Link to='/About' className='big-text'>
                        ABOUT
                    </Link>
                </div>
                <div id='right-side'>
                    <div id='projects-button'>
                        <Link to='/Projects' className="medium-text right-text">
                            PROJECTS
                        </Link>
                    </div>
                    <div id='contact-button'>
                        <Link to='/Contact' className="medium-text right-text">
                            CONTACT
                        </Link>
                    </div>
                </div>
                <Outlet />
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