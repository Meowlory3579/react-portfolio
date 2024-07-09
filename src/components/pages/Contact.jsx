import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    // Validate fields on change
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({ ...errors, email: emailRegex.test(value) ? '' : 'Invalid email address' });
    } else {
      setErrors({ ...errors, [name]: value.trim() ? '' : `${name} is required` });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: value.trim() ? '' : `${name} is required` });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for any errors
    const formErrors = {};
    if (!formState.name.trim()) formErrors.name = 'Name is required';
    if (!formState.email.trim()) formErrors.email = 'Email is required';
    if (!formState.message.trim()) formErrors.message = 'Message is required';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Send email via EmailJS
    emailjs.sendForm('service_n3yyoks', 'template_2yp53o7', e.target, 'f-d7La2tupxQUDjvd')
      .then((result) => {
        console.log(result.text);
        setSuccessMessage('Your message has been sent successfully!');
        setFormState({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setErrors({ ...errors, submit: 'Failed to send message, please try again.' });
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
        {successMessage && <span className="success">{successMessage}</span>}
        {errors.submit && <span className="error">{errors.submit}</span>}
      </form>
    </div>
  );
}
