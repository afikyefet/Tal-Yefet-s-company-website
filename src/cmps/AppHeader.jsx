import React from 'react'
import { Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <header className="app-header">
            <div className="header-container">
                <div className="header-title">
                    <Link to="/" className="header-link">
                        <span>טל יפת - ייעוץ משאבי אנוש</span>
                    </Link>
                </div>

                <nav className="header-nav">
                    <Link to="/" className="nav-link">בית</Link>
                    <Link to="/services" className="nav-link">שירותים</Link>
                    <Link to="/about" className="nav-link">אודות</Link>
                    <Link to="/contact" className="nav-link">צור קשר</Link>
                    <Link to="/admin" className="nav-link admin-link">ניהול</Link>
                </nav>

                <div className="header-actions">
                    <Link to="/contact" className="header-cta">ייעוץ חינם</Link>
                </div>
            </div>
        </header>
    )
}
