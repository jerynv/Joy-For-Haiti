import './About.css'

function About() {
  return (
    <div className="about">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-background">
          <img
            src="/images/community-group-2.jpg"
            alt="Joy for Haiti community"
            className="page-hero-image"
          />
        </div>
        <div className="container">
          <h1>Our Mission</h1>
          <p className="page-hero-subtitle">Building futures, one life at a time</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <div className="mission-vision-image">
                <img
                  src="/images/teen-with-meal.jpg"
                  alt="Teen receiving support"
                />
              </div>
              <div className="mission-vision-content">
                <h2>Our Mission</h2>
                <p>
                  Joy for Haiti exists to provide a Christ centered home, primarily for those still completing high school. Most of this population are teen orphans dismissed prematurely. This family community will provide all essential needs to develop each unique individual's spiritual, physical, and emotional needs.
                </p>
              </div>
            </div>
            <div className="mission-vision-card">
              <div className="mission-vision-image">
                <img
                  src="/images/food-distribution.jpg"
                  alt="Food distribution in Haiti"
                />
              </div>
              <div className="mission-vision-content">
                <h2>Our Vision</h2>
                <p>
                  Buy a large piece of land and start with 3 small dorms. One for staff, one for boys, and one for girls. As God blesses and provides, growing Joy for Haiti into a campus setting with a church, school, medical clinic, and restaurant. This vision would enable our graduates to fulfill their dreams with a successful future and break the cycle of poverty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values section bg-off-white">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L14.09 8.26L20.5 9.27L15.5 14.14L16.82 21.02L12 17.77L7.18 21.02L8.5 14.14L3.5 9.27L9.91 8.26L12 2Z"/>
                  <line x1="12" y1="8" x2="12" y2="14"/>
                  <line x1="9" y1="11" x2="15" y2="11"/>
                </svg>
              </div>
              <h3>Christ<br/>Centered</h3>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3>Joy<br/>Filled</h3>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                  <path d="M12 16l-2-2 2-2 2 2-2 2z"/>
                </svg>
              </div>
              <h3>Dream<br/>Fulfilling</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <div className="story-text">
                <p>
                  <strong>My name is Kodi Vicari</strong>, and I am a wife to my husband Andy, mother of 4 kiddos and 3 dogs, and I love serving and taking care of others and giving God ALL the glory!
                </p>
                <p>
                  As you can see, we are a diverse family. Dawson (17) and Braylee (15) are our biological children and Jeryn (13) and LeNia (12) are adopted from Haiti. Andy and I were called with a clear plan from God 12-ish years ago to adopt his 2 children.
                </p>
                <p>
                  Never realizing that we would ever adopt, we didn't have a single resource planned. God not only worked out each and every detail. While in Haiti so many years ago and each time I have traveled since, God has whispered to me that we would be forever connected to this poor yet beautiful country.
                </p>
                <p>
                  Now I'm not a patient person and God would be the first to know this. So impatiently and prayerfully waiting he finally revealed HIS plan. There is a grave need for a transition home especially for the teen population which I have come to realize is the "forgotten" population.
                </p>
                <p>
                  You see, these teens have been dismissed prematurely from orphanages and there is no one willing or able to care for them and they still need to complete high school. Is it ironic that 3 out of 4 of my children are teens right now. I think not. What I do think is that I could never imagine Dawson, Braylee, or Jeryn on the streets in a very dangerous country trying to survive with no one and only having dreams of finishing high school.
                </p>
                <p>
                  That's when I shared my plan for Joy for Haiti with my "Haitian family" and together we are fundraising to provide this transition home where everyone here can "Live in Joy". Isn't Joy a beautiful word? "A feeling of great pleasure and happiness." I LOVE that definition and I definitely believe true joy can only come from God.
                </p>
                <p className="story-signature">
                  — Kodi Vicari<br/>
                  <span>Founder</span>
                </p>
              </div>
            </div>
            <div className="story-images">
              <div className="story-image-grid">
                <div className="story-image">
                  <img src="/images/family-portrait.jpg" alt="The Vicari Family" />
                </div>
                <div className="story-image">
                  <img src="/images/adoption-day.jpg" alt="Adoption day - Andy and Kodi with Jeryn and LeNia" />
                </div>
                <div className="story-image">
                  <img src="/images/volunteers-with-baby.jpg" alt="Kodi and Braylee volunteering in Haiti" />
                </div>
                <div className="story-image">
                  <img src="/images/kodi-in-haiti.jpg" alt="Kodi with Haitian partner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
