import React from 'react'
import { Link } from 'react-router-dom'

export function Services() {
  const services = [
    {
      id: 1,
      title: 'אופטימיזציה של זמנים',
      icon: '⏰',
      description: 'שיפור יעילות העבודה וחיסכון בזמן יקר בארגון שלך',
      features: [
        'ניתוח תהליכי עבודה קיימים',
        'זיהוי נקודות בזבוז זמן',
        'פיתוח אסטרטגיות לשיפור יעילות',
        'יישום שיטות עבודה מתקדמות',
        'מדידת תוצאות ושיפור מתמיד'
      ],
      duration: '4-8 שבועות',
      price: 'מחיר מותאם אישית'
    },
    {
      id: 2,
      title: 'בקרת נוכחות מתקדמת',
      icon: '👥',
      description: 'מערכות מתקדמות לניהול נוכחות עובדים',
      features: [
        'הערכת מערכות קיימות',
        'בחירת טכנולוגיה מתאימה',
        'יישום מערכות בקרת נוכחות',
        'הכשרת צוותים לשימוש',
        'תחזוקה ותמיכה מתמשכת'
      ],
      duration: '6-10 שבועות',
      price: 'מחיר מותאם אישית'
    },
    {
      id: 3,
      title: 'ייעוץ ארגוני',
      icon: '🏢',
      description: 'בניית מבנים ארגוניים יעילים ותהליכי עבודה מתקדמים',
      features: [
        'ניתוח מבנה ארגוני קיים',
        'זיהוי צרכים ושיפורים',
        'עיצוב מבנה ארגוני חדש',
        'פיתוח מדיניות עבודה',
        'ליווי בתהליך השינוי'
      ],
      duration: '8-12 שבועות',
      price: 'מחיר מותאם אישית'
    },
    {
      id: 4,
      title: 'הכשרת צוותים',
      icon: '📚',
      description: 'הדרכות וסדנאות מקצועיות לצוותי HR ומנהלים',
      features: [
        'הדרכות על שיטות עבודה מתקדמות',
        'סדנאות ניהול זמן',
        'הכשרה על מערכות בקרת נוכחות',
        'פיתוח כישורי ניהול',
        'ליווי והדרכה מתמשכת'
      ],
      duration: '1-3 ימים',
      price: 'מחיר מותאם אישית'
    }
  ]

  return (
    <div className="services-page">
      <div className="page-header">
        <h1>השירותים שלנו</h1>
        <p>
          פתרונות מקצועיים לאופטימיזציה של זמנים, בקרת נוכחות וייעוץ ארגוני 
          המותאמים לצרכים הספציפיים של הארגון שלך
        </p>
      </div>

      <div className="services-intro">
        <h2>למה לבחור בשירותים שלנו?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🎯</div>
            <h3>מומחיות מקצועית</h3>
            <p>ניסיון של שנים בתחום משאבי אנוש ואופטימיזציה ארגונית</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">⚡</div>
            <h3>תוצאות מהירות</h3>
            <p>שיפור נראה לעין תוך שבועות ספורים מיישום השינויים</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">💡</div>
            <h3>פתרונות מותאמים אישית</h3>
            <p>כל פתרון מותאם לצרכים הספציפיים של הארגון שלך</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🤝</div>
            <h3>ליווי מתמשך</h3>
            <p>תמיכה והדרכה לאורך כל התהליך ואחריו</p>
          </div>
        </div>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-header">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
            </div>
            
            <p className="service-description">{service.description}</p>
            
            <div className="service-features">
              <h4>מה כלול בשירות:</h4>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="service-details">
              <div className="detail-item">
                <span className="detail-label">משך הפרויקט:</span>
                <span className="detail-value">{service.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">מחיר:</span>
                <span className="detail-value">{service.price}</span>
              </div>
            </div>
            
            <div className="service-actions">
              <Link to="/contact" className="service-button primary">
                בקש הצעת מחיר
              </Link>
              <button className="service-button secondary">
                פרטים נוספים
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="process-section">
        <h2>איך זה עובד?</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>פגישת ייעוץ ראשונית</h3>
            <p>
              פגישה ללא עלות בה נבין את הצרכים שלכם, 
              נזהה אתגרים ונציע פתרונות ראשוניים.
            </p>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>ניתוח מעמיק</h3>
            <p>
              ניתוח מקיף של התהליכים הקיימים, 
              זיהוי נקודות לשיפור ותכנון פתרונות מותאמים.
            </p>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>יישום וליווי</h3>
            <p>
              יישום הפתרונות שנבחרו עם ליווי מתמשך 
              והדרכה לצוותים שלכם.
            </p>
          </div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>מדידה ושיפור</h3>
            <p>
              מדידת תוצאות, זיהוי הזדמנויות נוספות 
              ושיפור מתמיד של התהליכים.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>מוכנים להתחיל?</h2>
        <p>
          צרו איתי קשר לשיחת ייעוץ ראשונית ללא עלות, 
          ונבנה יחד תוכנית לשיפור היעילות של הארגון שלכם.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">צור קשר עכשיו</Link>
          <Link to="/about" className="cta-button secondary">למד עוד עליי</Link>
        </div>
      </section>
    </div>
  )
}
