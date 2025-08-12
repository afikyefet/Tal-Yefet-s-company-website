import React from 'react'

export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>טל יפת - ייעוץ משאבי אנוש</h3>
          <p>מומחה לאופטימיזציה של זמנים בחברות גדולות</p>
        </div>
        <div className="footer-section">
          <h4>שירותים</h4>
          <ul>
            <li>ייעוץ ארגוני</li>
            <li>אופטימיזציה של זמנים</li>
            <li>הכשרת צוותים</li>
            <li>בקרת נוכחות</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>צור קשר</h4>
          <p>טלפון: 050-0000000</p>
          <p>אימייל: tal@example.com</p>
        </div>
        <div className="footer-section">
          <h4>עקבו אחרינו</h4>
          <div className="social-links">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 טל יפת. כל הזכויות שמורות.</p>
      </div>
    </footer>
  )
}
