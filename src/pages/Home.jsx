import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Hero } from "../cmps/Hero"
import { loadPosts, loadVideos } from '../store/actions/content.action'

export function Home() {
    const dispatch = useDispatch()
    const { posts, videos } = useSelector(state => state.content)

    useEffect(() => {
        dispatch(loadPosts())
        dispatch(loadVideos())
    }, [dispatch])

    const featuredPosts = posts
        .filter(post => post.status === 'published')
        .slice(0, 3)

    const featuredVideos = videos
        .filter(video => video.status === 'published')
        .slice(0, 2)

    return (
        <div className="home-container">
            <Hero />

            <section className="services-preview">
                <div className="container">
                    <h2>השירותים שלנו</h2>
                    <p>פתרונות מקצועיים לאופטימיזציה של זמנים ובקרת נוכחות</p>

                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">⏰</div>
                            <h3>אופטימיזציה של זמנים</h3>
                            <p>שיפור יעילות העבודה וחיסכון בזמן יקר בארגון שלך</p>
                            <Link to="/services" className="service-link">למד עוד →</Link>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">👥</div>
                            <h3>בקרת נוכחות</h3>
                            <p>מערכות מתקדמות לניהול נוכחות עובדים</p>
                            <Link to="/services" className="service-link">למד עוד →</Link>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">🏢</div>
                            <h3>ייעוץ ארגוני</h3>
                            <p>בניית מבנים ארגוניים יעילים ותהליכי עבודה מתקדמים</p>
                            <Link to="/services" className="service-link">למד עוד →</Link>
                        </div>
                    </div>

                    <div className="services-cta">
                        <Link to="/services" className="cta-button">ראה את כל השירותים</Link>
                    </div>
                </div>
            </section>

            <section className="featured-content">
                <div className="container">
                    <h2>תוכן מקצועי</h2>
                    <p>מאמרים וסרטונים מקצועיים על אופטימיזציה של זמנים וניהול משאבי אנוש</p>

                    {featuredPosts.length > 0 && (
                        <div className="featured-posts">
                            <h3>מאמרים מומלצים</h3>
                            <div className="posts-grid">
                                {featuredPosts.map(post => (
                                    <article key={post.id} className="post-card">
                                        <h4>{post.title}</h4>
                                        {post.excerpt && <p>{post.excerpt}</p>}
                                        <Link to={`/blog/${post.id}`} className="read-more">
                                            קרא עוד →
                                        </Link>
                                    </article>
                                ))}
                            </div>
                            <Link to="/blog" className="view-all-link">ראה את כל המאמרים</Link>
                        </div>
                    )}

                    {featuredVideos.length > 0 && (
                        <div className="featured-videos">
                            <h3>סרטונים מומלצים</h3>
                            <div className="videos-grid">
                                {featuredVideos.map(video => (
                                    <div key={video.id} className="video-card">
                                        <div className="video-thumbnail">
                                            {video.thumbnailUrl ? (
                                                <img src={video.thumbnailUrl} alt={video.title} />
                                            ) : (
                                                <div className="no-thumbnail">🎥</div>
                                            )}
                                        </div>
                                        <h4>{video.title}</h4>
                                        {video.description && <p>{video.description}</p>}
                                    </div>
                                ))}
                            </div>
                            <Link to="/videos" className="view-all-link">ראה את כל הסרטונים</Link>
                        </div>
                    )}
                </div>
            </section>

            <section className="why-choose-us">
                <div className="container">
                    <h2>למה לבחור בנו?</h2>
                    <div className="reasons-grid">
                        <div className="reason-card">
                            <div className="reason-icon">🎯</div>
                            <h3>מומחיות מקצועית</h3>
                            <p>ניסיון של שנים בתחום משאבי אנוש ואופטימיזציה ארגונית</p>
                        </div>

                        <div className="reason-card">
                            <div className="reason-icon">⚡</div>
                            <h3>תוצאות מהירות</h3>
                            <p>שיפור נראה לעין תוך שבועות ספורים מיישום השינויים</p>
                        </div>

                        <div className="reason-card">
                            <div className="reason-icon">💡</div>
                            <h3>פתרונות מותאמים אישית</h3>
                            <p>כל פתרון מותאם לצרכים הספציפיים של הארגון שלך</p>
                        </div>

                        <div className="reason-card">
                            <div className="reason-icon">🤝</div>
                            <h3>ליווי מתמשך</h3>
                            <p>תמיכה והדרכה לאורך כל התהליך ואחריו</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2>מוכנים לשפר את היעילות של הארגון שלכם?</h2>
                    <p>
                        צרו איתי קשר לשיחת ייעוץ ראשונית ללא עלות,
                        ונבנה יחד תוכנית לשיפור היעילות והחיסכון בזמן.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-button primary">צור קשר עכשיו</Link>
                        <Link to="/about" className="cta-button secondary">למד עוד עליי</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}