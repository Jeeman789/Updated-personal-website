import '../css/About.css'
import '../css/Home.css'
import '../css/Text.css'
import Card from '../components/Card'
import carfax from '../assets/carfax.png'


function About(){
    return(
        <div className='about-back'>
            <div className='top-bar about'>
                <h5 className='big-text'>ABOUT</h5>
                <div className='empty-space-topbar'></div>
                <h3 className='small-text'>Back</h3>
            </div>
            <div className='empty-space'></div>
            <div className='content about'>
                <Card image={carfax} text="I am a fifth year computing student at Queen's University, specializing in software design. I am proficient in many different programming languages and also have experience in both web development
                and game design."/>
            </div>
        </div>
    )
}

export default About