import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a server or an email service; keeping this for now
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Let's Connect</h2>
      <p> Welcome to my contact page! Whether you're embarking on a new business venture or aiming to elevate your established digital presence, I'm your partner in success. Let's collaborate to design a compelling online identity that not only captivates but also makes a lasting impact. I am enthusiastic about offering you a personalized consultation, and my commitment lies in empowering businesses to thrive in the digital realm. Looking forward to the opportunity to bring your vision to life and achieve online excellence together! </p>
      <br />
      <label>
        Name: 
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <br />
      <label>
        Mobile Phone:
        <input type="phone" value={email} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <br />
      <br />
      <label>
        Description of your app or website:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
      <br />
      <br />
    </form>
  );
};

export default Contact
