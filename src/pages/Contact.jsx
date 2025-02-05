import ContactForm from '../components/ContactForm';
import './styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
