import { useState } from 'react';
import './contactForm/contactForm.css';

const ContactForm = () => {
  const initialFormState = {
    name: '',
    email: '',
    message: '',
    password: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for the field being typed in
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      sessionStorage.setItem('contactFormData', JSON.stringify(formData));
      alert('Form submitted successfully!');
      setFormData(initialFormState);
      setErrors({}); // Clear all errors on successful submission
    } else {
      setErrors(newErrors);
    }
  };

  const togglePassword = () => setShowPassword(prev => !prev);

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="form-input"
        />
        {errors.name && <p className="error-message-contact">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="form-input"
        />
        {errors.email && <p className="error-message-contact">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Password</label>
        <div className="password-input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="password-toggle"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.password && <p className="error-message-contact">{errors.password}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="form-textarea"
        />
        {errors.message && <p className="error-message-contact">{errors.message}</p>}
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
