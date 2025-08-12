import React from 'react'
import { Link } from 'react-router-dom'

export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="brand-icon">🎯</div>
              <h3>טל יפת - ייעוץ משאבי אנוש</h3>
            </div>
            <p>
              מומחה לייעוץ משאבי אנוש ואופטימיזציה של זמנים בחברות גדולות.
              עוזר לארגונים לשפר יעילות, לחסוך זמן ולבנות מערכות ניהול מתקדמות.
            </p>
            <div className="footer-achievements">
              <div className="achievement">
                <span className="achievement-icon">🏆</span>
                <span>מומחה מוביל בישראל</span>
              </div>
              <div className="achievement">
                <span className="achievement-icon">⭐</span>
                <span>דירוג 5 כוכבים</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span className="social-icon">🔗</span>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <span className="social-icon">📧</span>
              </a>
              <a href="#" className="social-link" aria-label="Phone">
                <span className="social-icon">📱</span>
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                <span className="social-icon">💬</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>
              <span className="section-icon">⚙️</span>
              השירותים שלנו
            </h3>
            <ul className="footer-links">
              <li>
                <Link to="/services">
                  <span className="link-icon">⏰</span>
                  אופטימיזציה של זמנים
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <span className="link-icon">👥</span>
                  בקרת נוכחות מתקדמת
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <span className="link-icon">🏢</span>
                  ייעוץ ארגוני
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <span className="link-icon">🎓</span>
                  הכשרת צוותים
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>
              <span className="section-icon">📚</span>
              תוכן מקצועי
            </h3>
            <ul className="footer-links">
              <li>
                <Link to="/blog">
                  <span className="link-icon">📝</span>
                  בלוג מקצועי
                </Link>
              </li>
              <li>
                <Link to="/videos">
                  <span className="link-icon">🎥</span>
                  סרטוני הדרכה
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span className="link-icon">👨‍💼</span>
                  אודות
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span className="link-icon">📞</span>
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>
              <span className="section-icon">📞</span>
              פרטי קשר
            </h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span className="contact-text">tal@example.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span className="contact-text">050-0000000</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span className="contact-text">ימים א'-ה' 9:00-18:00</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">תל אביב, ישראל</span>
              </div>
            </div>

            <div className="footer-cta">
              <Link to="/contact" className="footer-cta-button">
                <span className="cta-icon">💬</span>
                <span>ייעוץ חינם</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <span className="copyright-icon">©</span>
              © 2024 טל יפת - ייעוץ משאבי אנוש. כל הזכויות שמורות.
            </div>
            <div className="footer-bottom-links">
              <Link to="/privacy">
                <span className="link-icon">🔒</span>
                מדיניות פרטיות
              </Link>
              <Link to="/terms">
                <span className="link-icon">📋</span>
                תנאי שימוש
              </Link>
              <Link to="/sitemap">
                <span className="link-icon">🗺️</span>
                מפת האתר
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
