import '../css/Contact.css'
import '../css/Other_Pages.css'
import '../css/Text.css'
import { Outlet, Link } from 'react-router';
import { useState } from 'react';

function Contact(){
    const [status, setStatus] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('');
        setIsSending(true);

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const message = formData.get('message');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, message }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

            setStatus(result.message);
            event.currentTarget.reset();
        } catch (error) {
            setStatus(error instanceof Error ? error.message : 'Unable to send message.');
        } finally {
            setIsSending(false);
        }
    };

    return(
        <div className='contact-back'>
            <div className='top-bar contact'>
                <h5 className='big-text'>CONTACT</h5>
                <div className='empty-space-topbar'></div>
                <Link to='/'>
                <h3 className='small-text'>Back</h3>
                </Link>
            </div>
            <Outlet/>
            <div className='empty-space'></div>
            <div className='content-o contact'>
                <form id='contact-form' onSubmit={handleSubmit}>
                    <h3 className='small-text'>Send a Message!</h3>
                    <fieldset id='fields'>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name='name' required />
                        <label htmlFor="message">Message</label>
                        <textarea id='message' name='message' rows={4} cols={50} required></textarea>
                    </fieldset>
                    <button id='send-button' type='submit' disabled={isSending}>
                        {isSending ? 'SENDING...' : 'SEND'}
                    </button>
                    {status && <p role="status">{status}</p>}
                </form>
            </div>
        </div>
    )
}

export default Contact