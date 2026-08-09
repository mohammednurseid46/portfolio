import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-container">
        <h2 className="section-title">Let's Work Together</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Currently open to new opportunities and interesting projects. Feel free to reach out!
        </p>
        
        <div className="contact-links">
          <a href="mailto:mohammednurseid46@gmail.com" className="contact-link">Email</a>
          <a href="https://www.linkedin.com/in/mohammednur-seid-97873a3aa" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com/mohammednurseid46" target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
          <a href="tel:+251945733006" className="contact-link">+251 945 733 006</a>
        </div>
        
        <form className="contact-form glass" style={{ padding: '2.5rem', borderRadius: '1.5rem', marginTop: '2rem' }}>
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
