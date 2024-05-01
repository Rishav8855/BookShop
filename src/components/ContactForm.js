// ContactForm.js
import React, { useState } from 'react';
import '../styles.css'; // Import your CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageError, setMessageError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateMessage(formData.message)) {
      // Implement your logic to handle form submission here
      console.log(formData);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setMessageError('');
      setSubmitted(true);
    } else {
      setMessageError('Message must contain 10 to 20 words.');
    }
  };

  const validateMessage = (message) => {
    const wordCount = message.trim().split(/\s+/).length;
    return wordCount >= 10 && wordCount <= 20;
  };

  return (
    <div className="ContactForm">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="ContactForm-form">
          <div className="ContactForm-input">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="ContactForm-input">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="ContactForm-input">
            <label htmlFor="message">Message (10-20 words):</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
            {messageError && <p className="ContactForm-error">{messageError}</p>}
          </div>
          <button type="submit" className="ContactForm-submit">Submit</button>
        </form>
      ) : (
        <p className="ContactForm-success">Thank you for writing!</p>
      )}
    </div>
  );
};

export default ContactForm;
