import React from 'react'
import { Link } from 'react-router-dom'

export function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-icon">★</span>
                    <span>מומחה מוביל בישראל</span>
                </div>

                <h1 className="hero-title">
                    אופטימיזציה של זמנים בחברות גדולות
                </h1>

                <p className="hero-subtitle">
                    מומחה לייעוץ משאבי אנוש ובקרת נוכחות.
                    עוזר לארגונים לשפר יעילות, לחסוך זמן ולבנות מערכות ניהול מתקדמות.
                </p>

                <div className="hero-features">
                    <div className="feature-item">
                        <span className="feature-icon">⚡</span>
                        <span>יעילות מוכחת</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">💡</span>
                        <span>ידע מקצועי</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">🤝</span>
                        <span>ליווי אישי</span>
                    </div>
                </div>

                <div className="hero-actions">
                    <Link to="/contact" className="hero-button primary">
                        <span className="button-icon">📞</span>
                        צור קשר לייעוץ ראשוני
                    </Link>
                    <Link to="/services" className="hero-button secondary">
                        <span className="button-icon">🔍</span>
                        ראה את השירותים
                    </Link>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-icon">📈</div>
                        <span className="stat-number">15+</span>
                        <span className="stat-label">שנות ניסיון</span>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon">🏢</div>
                        <span className="stat-number">50+</span>
                        <span className="stat-label">חברות שטופלו</span>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon">⚡</div>
                        <span className="stat-number">30%</span>
                        <span className="stat-label">שיפור ממוצע ביעילות</span>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon">🔄</div>
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">תמיכה וליווי</span>
                    </div>
                </div>

                <div className="hero-trust">
                    <p className="trust-text">מעל 500 לקוחות מרוצים ברחבי הארץ</p>
                    <div className="trust-logos">
                        <div className="trust-logo">🏆</div>
                        <div className="trust-logo">⭐</div>
                        <div className="trust-logo">🎯</div>
                    </div>
                </div>
            </div>
        </section>
    )
}



















