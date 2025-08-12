import React from 'react'
import { Link } from 'react-router-dom'

export function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>אודות</h1>
        <p>הכירו את טל יפת - מומחה לייעוץ משאבי אנוש ואופטימיזציה של זמנים</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="about-text">
            <h2>מי אני</h2>
            <p>
              שלום, אני טל יפת, יועץ משאבי אנוש מנוסה המתמחה באופטימיזציה של זמנים
              ובקרת נוכחות בחברות גדולות. עם ניסיון של שנים בתחום, אני מסייע לארגונים
              לשפר את יעילות העבודה, לחסוך זמן יקר ולבנות מערכות ניהול מתקדמות.
            </p>
            <p>
              אני מאמין שכל ארגון יכול להפוך ליעיל יותר באמצעות שיטות עבודה נכונות,
              טכנולוגיה מתקדמת וניהול נכון של המשאב האנושי.
            </p>
          </div>
        </section>

        <section className="expertise-section">
          <h2>תחומי מומחיות</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">⏰</div>
              <h3>אופטימיזציה של זמנים</h3>
              <p>
                פיתוח אסטרטגיות לשיפור יעילות העבודה וחיסכון בזמן יקר
                באמצעות ניתוח תהליכים ושיטות עבודה מתקדמות.
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">👥</div>
              <h3>בקרת נוכחות</h3>
              <p>
                יישום מערכות מתקדמות לבקרת נוכחות עובדים, כולל
                טכנולוגיות חדשניות וניהול חכם של זמני עבודה.
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">🏢</div>
              <h3>ייעוץ ארגוני</h3>
              <p>
                סיוע לארגונים בבניית מבנים ארגוניים יעילים,
                פיתוח מדיניות עבודה ושיפור תהליכי עבודה.
              </p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon">📚</div>
              <h3>הכשרת צוותים</h3>
              <p>
                הדרכות וסדנאות מקצועיות לצוותי HR ומנהלים
                על שיטות עבודה מתקדמות וניהול יעיל.
              </p>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <h2>ניסיון מקצועי</h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020 - היום</div>
              <div className="timeline-content">
                <h3>יועץ עצמאי למשאבי אנוש</h3>
                <p>
                  מתן ייעוץ לחברות גדולות בתחום אופטימיזציה של זמנים,
                  בקרת נוכחות וייעוץ ארגוני.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2015 - 2020</div>
              <div className="timeline-content">
                <h3>מנהל משאבי אנוש</h3>
                <p>
                  ניהול צוותי HR בחברות גדולות, פיתוח מדיניות עבודה
                  ויישום מערכות בקרת נוכחות מתקדמות.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2010 - 2015</div>
              <div className="timeline-content">
                <h3>יועץ משאבי אנוש</h3>
                <p>
                  מתן ייעוץ לארגונים בתחום ניהול משאבי אנוש,
                  אופטימיזציה של תהליכי עבודה וניהול זמנים.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications-section">
          <h2>הסמכות והכשרות</h2>
          <div className="certifications-grid">
            <div className="certification-item">
              <h4>תואר שני במנהל עסקים</h4>
              <p>התמחות בניהול משאבי אנוש</p>
            </div>
            <div className="certification-item">
              <h4>הסמכה בייעוץ ארגוני</h4>
              <p>מכון הישראלי לייעוץ ארגוני</p>
            </div>
            <div className="certification-item">
              <h4>הסמכה בניהול פרויקטים</h4>
              <p>PMP - Project Management Professional</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>מוכנים לשפר את היעילות של הארגון שלכם?</h2>
          <p>
            צרו איתי קשר לשיחת ייעוץ ראשונית ללא עלות,
            ונבנה יחד תוכנית לשיפור היעילות והחיסכון בזמן.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">צור קשר</Link>
            <Link to="/services" className="cta-button secondary">השירותים שלנו</Link>
          </div>
        </section>
      </div>
    </div>
  )
}
