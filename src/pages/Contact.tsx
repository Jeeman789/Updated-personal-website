import '../css/Contact.css'
import '../css/Other_Pages.css'
import '../css/Text.css'

function Contact(){
    return(
        <div className='contact-back'>
            <div className='top-bar contact'>
                <h5 className='big-text'>CONTACT</h5>
                <div className='empty-space-topbar'></div>
                <h3 className='small-text'>Back</h3>
            </div>
            <div className='empty-space'></div>
            <div className='content-o contact'>
                <form id='contact-form' action='/send-email' method='POST'>
                    <h3 className='small-text'>Send an Email!</h3>
                    <fieldset id='fields'>
                        <label htmlFor="name">Name</label>
                        <input type="name" name='name'></input>
                        <label htmlFor="body">Message</label>
                        <textarea id='body' name='body' rows={4} cols={50}></textarea>
                    </fieldset>
                    <button id='send-button' type='submit'>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Contact