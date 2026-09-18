import '../css/Projects.css'
import '../css/Text.css'
import '../css/Other_Pages.css'
import { Outlet, Link } from 'react-router';
import Card from '../components/Card'
import godot from '../assets/entry-images/godot.png'
import aws from '../assets/entry-images/aws.png'
import flask from '../assets/entry-images/flask.png'
import scummvm from '../assets/entry-images/scummvm.png'
import unity from '../assets/entry-images/unity.png'

function Projects(){
    return(
        <div className='projects-back'>
            <div className='top-bar projects'>
                <h5 className='big-text'>PROJECTS</h5>
                <div className='empty-space-topbar'></div>
                <Link to='/'>
                <h3 className='small-text'>Back</h3>
                </Link>
            </div>
            <Outlet/>
            <div className='empty-space'></div>
            <div className='content projects'>
                <Card image={godot} text="- Made a 2D platformer taking place in space with zero gravity mechanics
                - Learned how to compose the architecture of a game
                - Programmed in Godot’s python like GDScript language"/>
                <Card image={aws} text="Certified in a high-level understanding of the AWS cloud platform including its core services, basic security, and billing"/>
                <Card image={flask} text="- Developed a test website to explore software quality assurance principles
                - Implemented full-stack features using HTML, CSS, Python, and SQL
                - Tested various elements of website using testing frameworks like PyTest and Selenium
                - Documented all test cases, producing reports allowing for analysis of quality assurance"/>
                <Card image={scummvm} text="- Analyzed the architecture of ScummVM, a virtual machine that can run point and click games
                - Worked in a group to determine the various faults and advantages of the way the files were structured
                - Strived to enhance the architecture of the system by suggesting points of improvement"/>
                <Card image={unity} text="- Created a 2D action/role playing game in collaboration with a partner within the Unity engine
                - Gained experience in Unity’s animation and game state management
                - Programmed various game mechanics in C#"/>
            </div>
        </div>
    )
}

export default Projects