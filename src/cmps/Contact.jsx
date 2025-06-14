export function Contact() {
    return (
        <section className="contact-container">
            <div className="contact-content">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <a href="mailto:afik.yefet@gmail.com" target="_blank" className="contact-button">
                    Email Me
                </a>
                <a href="https://www.linkedin.com/in/afik-yefet/" className="contact-button" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
            <div className="contact-image">
                <img src="https://res.cloudinary.com/dqj1x8k2h/image/upload/v1738859300/portfolio/contact-image.png" alt="Contact" />
            </div>
        </section>
    );
}