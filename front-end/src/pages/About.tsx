import '../css/About.css'
import '../css/Other_Pages.css'
import '../css/Text.css'
import { Outlet, Link } from 'react-router';
import Card from '../components/Card'
import carfax from '../assets/entry-images/carfax.png'
import personal from '../assets/entry-images/personal.jpg'
import queens from '../assets/entry-images/Queens logo.jpg'


function About(){
    return(
        <div className='about-back'>
            <div className='top-bar about'>
                <h5 className='big-text'>ABOUT</h5>
                <div className='empty-space-topbar'></div>
                <Link to='/'>
                <h3 className='small-text'>Back</h3>
                </Link>
            </div>
            <Outlet/>
            <div className='empty-space'></div>
            <div className='content about'>
                <Card image={personal} text="I am a fifth year computing student at Queen's University, specializing in software design. I am proficient in many different programming languages and also have experience in both web development and game design."/>
                <Card image={carfax} text="I was recently on internship for a year from spetember 2025-2026 with Carfax in London, Ontario. I was a part of the ml tools team and contributed to man different internal tools, giving me experience in full stack development, python development, and AI. I also had experience leading sprints in our development cycle, and presenting my work within our team and to other departments."/>
                <Card image={queens} text="I am currently attending Queen's Universsity for my fifth and final year. I am persuing a computing degree with a specialization in software design. I am apart of the game design club, the game development club, some recreational sports clubs, and have previously been a part of the web development club"/>
            </div>
        </div>
    )
}

export default About