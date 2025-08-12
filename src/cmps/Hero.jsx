import React from 'react'
import { Link } from 'react-router-dom'

export function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">
                    אופטימיזציה של זמנים בחברות גדולות
                </h1>
                <p className="hero-subtitle">
                    מומחה לייעוץ משאבי אנוש ובקרת נוכחות. 
                    עוזר לארגונים לשפר יעילות, לחסוך זמן ולבנות מערכות ניהול מתקדמות.
                </p>
                <div className="hero-actions">
                    <Link to="/contact" className="hero-button primary">
                        צור קשר לייעוץ ראשוני
                    </Link>
                    <Link to="/services" className="hero-button secondary">
                        ראה את השירותים
                    </Link>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">שנות ניסיון</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">חברות שטופלו</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">30%</span>
                        <span className="stat-label">שיפור יעילות ממוצע</span>
                    </div>
                </div>
            </div>
        </section>
    )
}



















