import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6 text-gradient inline-block font-bold">Let's Work Together</h2>
        <p className="text-[var(--text-secondary)] mb-8 text-lg">
          Currently open to new opportunities and interesting projects. Feel free to reach out!
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12">
          <a href="mailto:mohammednurseid46@gmail.com" className="font-semibold text-lg transition-colors duration-300 hover:text-[var(--accent-primary)] no-underline">Email</a>
          <a href="https://www.linkedin.com/in/mohammednur-seid-97873a3aa" target="_blank" rel="noreferrer" className="font-semibold text-lg transition-colors duration-300 hover:text-[var(--accent-primary)] no-underline">LinkedIn</a>
          <a href="https://github.com/mohammednurseid46" target="_blank" rel="noreferrer" className="font-semibold text-lg transition-colors duration-300 hover:text-[var(--accent-primary)] no-underline">GitHub</a>
          <a href="tel:+251945733006" className="font-semibold text-lg transition-colors duration-300 hover:text-[var(--accent-primary)] no-underline">+251 945 733 006</a>
        </div>
        
        <form className="glass p-8 sm:p-10 rounded-3xl mt-8 flex flex-col gap-4 text-left">
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="Name" required className="flex-1 w-full p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] font-sans text-base transition-colors duration-300 focus:outline-none focus:border-[var(--accent-primary)]" />
            <input type="email" placeholder="Email" required className="flex-1 w-full p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] font-sans text-base transition-colors duration-300 focus:outline-none focus:border-[var(--accent-primary)]" />
          </div>
          <textarea placeholder="Message" rows="5" required className="w-full p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] font-sans text-base transition-colors duration-300 focus:outline-none focus:border-[var(--accent-primary)] resize-y"></textarea>
          <button type="submit" className="btn-primary mt-4 w-full text-lg py-4">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
