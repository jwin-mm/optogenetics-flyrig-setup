import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace these with your actual EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';      // From EmailJS "Email Services"
    const templateID = 'YOUR_TEMPLATE_ID';    // From EmailJS "Email Templates"
    const userID = 'YOUR_USER_ID';            // From EmailJS account settings

    const templateParams = {
      email: email,    // The user's email input
      message: message // The user's message input
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
        setEmail('');    // Clear the form
        setMessage('');
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="flex justify-center items-center h-full ml-70">
      {/* Mailing div */}
      <div className="absolute top-1/4 left-250 p-4 text-white w-100">
        <h2 className="text-2xl font-bold text-white">Contact Me</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-medium">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-white">{status}</p>}
      </div>
      {/* Picture and info div */}
      <div className="absolute top-1/3 left-130 p-4 text-white flex flex-col items-center">
        <div className="w-52 h-52 rounded-full overflow-hidden mb-3">
          <img
            src="/optogenetics-flyrig-setup/images/ehoopfer.jpg"
            alt="Eric Hoopfer Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl p-2 font-semibold">Eric Hoopfer</h3>
          <p className="text-white-700 p-1">Phone: +0 000 00 0000</p>
          <p className="text-white-700 p-1">Email: ehoopfer@carleton.edu</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;