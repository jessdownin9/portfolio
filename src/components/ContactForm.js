import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [hover, setHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, subject, message };
    fetch('https://formspree.io/f/xrgvrewe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(() => alert('Your message has been sent.'))
      .catch(() => alert('There was an error sending your message.'));
  };

  return (
    <div className='contactform'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name*</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label htmlFor="email">Email*</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="subject">Subject</label>
            <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <label htmlFor="message">Message*</label>
            <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
            <button 
                type="submit" 
                className='button'
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)}
            >
                Send
                <img alt='Paper airplane icon' src={hover ? require('../images/sendHover.png') : require('../images/send.png')} />
            </button>
        </form>
    </div>
  );
};

export default ContactForm;
