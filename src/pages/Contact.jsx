import React, { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="contact-page">
        <div className="success-message">
          <div className="success-icon">✅</div>
          <h1>תודה על פנייתכם!</h1>
          <p>
            קיבלנו את ההודעה שלכם ונחזור אליכם בהקדם האפשרי. 
            בדרך כלל אנו מגיבים תוך 24 שעות.
          </p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="new-message-button"
          >
            שלח הודעה נוספת
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>צור קשר</h1>
        <p>מוכנים לשפר את היעילות של הארגון שלכם? צרו איתי קשר לשיחת ייעוץ ראשונית</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>פרטי קשר</h2>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">📧</div>
              <div className="method-details">
                <h3>אימייל</h3>
                <p>tal@example.com</p>
                <p>מגיבים תוך 24 שעות</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">📱</div>
              <div className="method-details">
                <h3>טלפון</h3>
                <p>050-0000000</p>
                <p>ימים א'-ה' 9:00-18:00</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">💼</div>
              <div className="method-details">
                <h3>LinkedIn</h3>
                <p>טל יפת - ייעוץ משאבי אנוש</p>
                <p>עקבו אחריי לעדכונים מקצועיים</p>
              </div>
            </div>
          </div>

          <div className="consultation-info">
            <h3>שיחת ייעוץ ראשונית</h3>
            <p>
              אציע לכם שיחת ייעוץ ראשונית ללא עלות בה נבין את הצרכים שלכם, 
              נזהה אתגרים ונציע פתרונות ראשוניים לשיפור היעילות.
            </p>
            <ul>
              <li>שיחה ללא התחייבות</li>
              <li>ניתוח ראשוני של הצרכים</li>
              <li>הצעת פתרונות מותאמים</li>
              <li>הערכת עלויות ראשונית</li>
            </ul>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>שלחו הודעה</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">שם מלא *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">אימייל *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">שם החברה</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">שירות מבוקש</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">בחר שירות</option>
                <option value="time-optimization">אופטימיזציה של זמנים</option>
                <option value="attendance-control">בקרת נוכחות</option>
                <option value="organizational-consulting">ייעוץ ארגוני</option>
                <option value="team-training">הכשרת צוותים</option>
                <option value="other">אחר</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">הודעה *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                required
                className="form-textarea"
                placeholder="תארו את הצרכים שלכם, האתגרים שאתם מתמודדים איתם, או כל שאלה שיש לכם..."
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'שולח...' : 'שלח הודעה'}
            </button>
          </form>
        </div>
      </div>

      <div className="faq-section">
        <h2>שאלות נפוצות</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>כמה זמן לוקח לראות תוצאות?</h3>
            <p>
              תוצאות ראשוניות נראות תוך 2-4 שבועות מיישום השינויים. 
              תוצאות מלאות מתקבלות תוך 2-3 חודשים.
            </p>
          </div>
          
          <div className="faq-item">
            <h3>האם השירותים מתאימים לכל גודל חברה?</h3>
            <p>
              השירותים שלנו מותאמים לחברות בגדלים שונים, 
              מחברות קטנות ועד תאגידים גדולים.
            </p>
          </div>
          
          <div className="faq-item">
            <h3>האם אתם מספקים תמיכה מתמשכת?</h3>
            <p>
              כן, אנו מספקים תמיכה והדרכה מתמשכת לאורך כל התהליך 
              ואחרי השלמת הפרויקט.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
