import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <section className="contact">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/mallory-howard-202359145" target="_blank" aria-label="Mallory Howard on LinkedIn">
            <i className="bi bi-linkedin icon"></i>
          </a>
          <a href="mailto:mallory.howard13@gmail.com" target="_blank" aria-label="Email Mallory Howard">
            <i className="bi bi-envelope icon"></i>
          </a>
          <a href="https://www.instagram.com/the_childs_adventures/" target="_blank" aria-label="Mallory Howard on Instagram">
            <i className="bi bi-instagram icon"></i>
          </a>
          <a href="https://github.com/Meowlory3579" target="_blank" aria-label="Mallory Howard on GitHub">
            <i className="bi bi-github icon"></i>
          </a>
        </div>
      </section>
      <p className="made-by">Made by Mallory <i className="fa-solid fa-mountain"></i></p>
    </footer>
  );
}
