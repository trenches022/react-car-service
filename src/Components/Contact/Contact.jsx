import { useState } from 'react';
import './Contact.css';

const Contact = () => {

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};

    if (!form.name.value) {
      newErrors.name = 'To pole nie może być puste.'
    }
    if (!form.phone.value) {
      newErrors.phone = 'To pole nie może być puste.'
    }
    if (!form.email.value) {
      newErrors.email = 'To pole nie może być puste.'
    }
    if (!form.message.value) {
      newErrors.message = 'To pole nie może być puste.'
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Wiadomość została wysłana!");
      form.reset();
    }
  }

  return (
    <div className="contact-container">
      <h1>NAPISZ DO NAS</h1>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div>
          <input type="text" name="name" placeholder="Imię" />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div>
          <input type="tel" name="phone" placeholder="Telefon" />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>
        <div>
          <input type="email" name="email" placeholder="E-Mail" />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div>
          <textarea name="message" placeholder="Wiadomość"></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button type="submit">WYŚLIJ</button>
      </form>
    </div>
  )
}

export default Contact;