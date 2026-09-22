import '../css/Contact.css'
import '../css/Other_Pages.css'
import '../css/Text.css'
import { Outlet, Link } from 'react-router';
import { useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL ?? 'https://updated-personal-website-9w6v.onrender.com';

function Contact(){
    const [status, setStatus] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus('');
        setIsSending(true);

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        try {
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            const responseText = await response.text();
            let result: { message?: string } = {};

            if (responseText.trim()) {
                try {
                    result = JSON.parse(responseText) as { message?: string };
                } catch {
                    throw new Error(`The server returned an invalid response (${response.status}).`);
                }
            }

            if (!response.ok) {
                throw new Error(result.message ?? `Request failed (${response.status}).`);
            }

            setStatus(result.message ?? 'Message sent successfully.');
            form.reset();
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
                        <label htmlFor="name">Email</label>
                        <input id="name" type="text" name='email' required />
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