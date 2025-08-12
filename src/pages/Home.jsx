import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadPosts, loadVideos } from '../store/actions/content.action'

export function Home() {
    const dispatch = useDispatch()
    const contentState = useSelector(state => state.content)
    const posts = contentState?.posts || []
    const videos = contentState?.videos || []

    console.log('Home: Content state:', contentState)
    console.log('Home: Posts:', posts)
    console.log('Home: Videos:', videos)

    useEffect(() => {
        console.log('Home: Dispatching loadPosts and loadVideos')
        dispatch(loadPosts())
        dispatch(loadVideos())
    }, [dispatch])

    const featuredPosts = (posts || [])
        .filter(post => post && post.status === 'published')
        .slice(0, 3)

    const featuredVideos = (videos || [])
        .filter(video => video && video.status === 'published')
        .slice(0, 2)

    console.log('Home: Featured posts:', featuredPosts)
    console.log('Home: Featured videos:', featuredVideos)

    return (
        <div className="home-container">
            {/* Services Preview Section */}
            <section className="services-preview">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">
                            <span className="badge-icon">⚡</span>
                            <span>השירותים שלנו</span>
                        </div>
                        <h2>איך אנחנו עוזרים לחברות לצמוח</h2>
                        <p>
                            אנחנו מתמחים באופטימיזציה של זמנים ובקרת נוכחות מתקדמת.
                            השירותים שלנו עוזרים לארגונים לשפר יעילות ולחסוך זמן יקר.
                        </p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">⏰</div>
                            <h3>אופטימיזציה של זמנים</h3>
                            <p>
                                ניתוח מעמיק של תהליכי העבודה שלכם וזיהוי נקודות לשיפור.
                                אנחנו עוזרים לכם לחסוך זמן יקר ולהגביר את היעילות.
                            </p>
                            <Link to="/services" className="service-link">
                                <span className="link-icon">→</span>
                                למידע נוסף
                            </Link>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">👥</div>
                            <h3>בקרת נוכחות מתקדמת</h3>
                            <p>
                                מערכות בקרת נוכחות חכמות שמתאימות לצרכים שלכם.
                                מעקב מדויק, דוחות מפורטים וניהול יעיל של כוח האדם.
                            </p>
                            <Link to="/services" className="service-link">
                                <span className="link-icon">→</span>
                                למידע נוסף
                            </Link>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">🏢</div>
                            <h3>ייעוץ ארגוני</h3>
                            <p>
                                ייעוץ מקצועי לשיפור המבנה הארגוני שלכם.
                                אנחנו עוזרים לכם לבנות מערכות ניהול מתקדמות ויעילות.
                            </p>
                            <Link to="/services" className="service-link">
                                <span className="link-icon">→</span>
                                למידע נוסף
                            </Link>
                        </div>
                    </div>

                    <div className="services-cta">
                        <Link to="/services" className="cta-button">
                            <span className="button-icon">🔍</span>
                            <span>ראה את כל השירותים</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Content Section */}
            <section className="featured-content">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">
                            <span className="badge-icon">📚</span>
                            <span>תוכן מקצועי</span>
                        </div>
                        <h2>תוכן מקצועי שיעזור לכם להצליח</h2>
                        <p>
                            מאמרים מקצועיים, סרטוני הדרכה וטיפים שיעזרו לכם לשפר את הארגון שלכם.
                            הישארו מעודכנים עם התוכן החדש שלנו.
                        </p>
                    </div>

                    <div className="featured-posts">
                        <h3>
                            <span className="section-icon">📝</span>
                            מאמרים מומלצים
                        </h3>
                        <div className="posts-grid">
                            {featuredPosts.length > 0 ? (
                                featuredPosts.map(post => (
                                    <article key={post.id} className="post-card">
                                        <div className="post-meta">
                                            <span className="post-date">📅 {new Date(post.createdAt).toLocaleDateString('he-IL')}</span>
                                            <span className="post-category">🏷️ {post.category || 'כללי'}</span>
                                        </div>
                                        <h4>{post.title}</h4>
                                        <p>{post.excerpt || post.content.substring(0, 150)}...</p>
                                        <Link to={`/blog/${post.id}`} className="read-more">
                                            <span className="link-icon">→</span>
                                            <span>קרא עוד</span>
                                        </Link>
                                    </article>
                                ))
                            ) : (
                                <div className="no-content">
                                    <div className="no-content-icon">📝</div>
                                    <h4>אין פוסטים עדיין</h4>
                                    <p>בקרוב יופיעו כאן מאמרים מקצועיים מעניינים</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="featured-videos">
                        <h3>
                            <span className="section-icon">🎥</span>
                            סרטוני הדרכה
                        </h3>
                        <div className="videos-grid">
                            {featuredVideos.length > 0 ? (
                                featuredVideos.map(video => (
                                    <article key={video.id} className="video-card">
                                        <div className="video-thumbnail">
                                            {video.thumbnail ? (
                                                <img src={video.thumbnail} alt={video.title} />
                                            ) : (
                                                <div className="no-thumbnail">🎥</div>
                                            )}
                                        </div>
                                        <div className="video-meta">
                                            <span className="video-duration">⏱️ {video.duration || '5 דקות'}</span>
                                            <span className="video-category">🏷️ {video.category || 'כללי'}</span>
                                        </div>
                                        <h4>{video.title}</h4>
                                        <p>{video.description || 'סרטון הדרכה מקצועי'}</p>
                                        <Link to={`/videos/${video.id}`} className="read-more">
                                            <span className="link-icon">→</span>
                                            <span>צפה בסרטון</span>
                                        </Link>
                                    </article>
                                ))
                            ) : (
                                <div className="no-content">
                                    <div className="no-content-icon">🎥</div>
                                    <h4>אין סרטונים עדיין</h4>
                                    <p>בקרוב יופיעו כאן סרטוני הדרכה מקצועיים</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="content-cta">
                        <Link to="/blog" className="view-all-link">
                            <span className="link-icon">📚</span>
                            <span>ראה את כל התוכן</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">
                            <span className="badge-icon">🏆</span>
                            <span>למה לבחור בנו</span>
                        </div>
                        <h2>הסיבות שבגללן לקוחות בוחרים בנו</h2>
                        <p>
                            אנחנו מתמחים בייעוץ משאבי אנוש ובקרת נוכחות.
                            הניסיון שלנו והגישה האישית שלנו עושים את ההבדל.
                        </p>
                    </div>

                    <div className="reasons-grid">
                        <div className="reason-card">
                            <div className="reason-icon">🎯</div>
                            <h3>מומחיות מוכחת</h3>
                            <p>
                                מעל 15 שנות ניסיון בתחום משאבי האנוש ובקרת הנוכחות.
                                אנחנו מכירים את האתגרים שלכם ויודעים איך לפתור אותם.
                            </p>
                        </div>

                        <div className="reason-card">
                            <div className="reason-icon">🤝</div>
                            <h3>ליווי אישי</h3>
                            <p>
                                אנחנו לא רק נותנים ייעוץ, אנחנו מלווים אתכם לאורך כל הדרך.
                                תמיכה מתמשכת וליווי מקצועי עד להצלחה.
                            </p>
                        </div>

                        <div className="reason-card">
                            <div className="reason-icon">📊</div>
                            <h3>תוצאות מדידות</h3>
                            <p>
                                כל הפתרונות שלנו מבוססים על נתונים ומדדים מדויקים.
                                אנחנו עוזרים לכם לראות את התוצאות בשטח.
                            </p>
                        </div>

                        <div className="reason-card">
                            <div className="reason-icon">🚀</div>
                            <h3>חדשנות מתמדת</h3>
                            <p>
                                אנחנו תמיד מעודכנים בטכנולוגיות החדשות ביותר.
                                הפתרונות שלנו מתקדמים ויעילים.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>מוכנים לשפר את הארגון שלכם?</h2>
                        <p>
                            בואו נדבר על איך אנחנו יכולים לעזור לכם לשפר את היעילות,
                            לחסוך זמן ולבנות מערכות ניהול מתקדמות.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="cta-button primary">
                                <span className="button-icon">💬</span>
                                <span>ייעוץ חינם</span>
                            </Link>
                            <Link to="/services" className="cta-button secondary">
                                <span className="button-icon">🔍</span>
                                <span>ראה שירותים</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}