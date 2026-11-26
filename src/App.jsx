import profile from './data/profile.json';
import Avatar from './components/Avatar.jsx';
import DetailList from './components/DetailList.jsx';
import ProfileLinks from './components/ProfileLinks.jsx';
import QuoteCard from './components/QuoteCard.jsx';
import BuildFooter from './components/BuildFooter.jsx';

export default function App() {
  const skills = profile.skills ?? [];

  return (
    <main className="shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">A</span>
          <span>Aayush / Portfolio</span>
        </a>
        <div className="nav-links">
          <a href="#profile">Profile</a>
          <a href="#skills">Stack</a>
        </div>
        <a className="nav-contact" href={`mailto:${profile.email}`}>
          Let&apos;s talk
          <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="status-line">
            <span className="status-dot" aria-hidden="true" />
            Open to opportunities
          </div>
          <h1>
            Building systems
            <span>that scale.</span>
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="primary-action" href={`mailto:${profile.email}`}>
              Start a conversation
              <span aria-hidden="true">↗</span>
            </a>
            <a className="text-action" href="#profile">
              Explore profile
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="portrait-card" aria-label="Profile portrait">
          <div className="portrait-grid" aria-hidden="true" />
          <Avatar src={profile.photo} name={profile.name} />
          <div className="portrait-caption">
            <span>{profile.department}</span>
            <strong>{profile.name}</strong>
          </div>
        </div>
      </section>

      <section className="profile-grid" id="profile">
        <article className="profile-main">
          <div className="section-heading">
            <span>01</span>
            <h2>Profile</h2>
          </div>

          {profile.about && <p className="about">{profile.about}</p>}

          <DetailList profile={profile} />
        </article>

        <aside className="profile-side">
          <div className="section-heading">
            <span>02</span>
            <h2>Connect</h2>
          </div>
          <ProfileLinks links={profile.links} />
        </aside>
      </section>

      {skills.length > 0 && (
        <section className="stack-section" id="skills">
          <div className="section-heading">
            <span>03</span>
            <h2>Core stack</h2>
          </div>
          <ul className="skills">
            {skills.map((skill, index) => (
              <li key={skill}>
                <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <QuoteCard quotes={profile.quotes ?? []} />
      <BuildFooter />
    </main>
  );
}
