const campaigns = [
  {
    title: "Create the next crypto meme",
    project: "Example Protocol",
    prize: "$2,500",
    entries: 42,
    deadline: "3d 12h",
    tag: "MEMES"
  },
  {
    title: "Make Web3 understandable",
    project: "Open Network",
    prize: "$1,000",
    entries: 18,
    deadline: "5d 08h",
    tag: "CONTENT"
  },
  {
    title: "Community campaign",
    project: "New Protocol",
    prize: "$750",
    entries: 27,
    deadline: "2d 04h",
    tag: "CREATIVE"
  }
];
export default function Home() {
  return (
    <main className="site">
      <nav className="navbar">
        <a href="/" className="logo">
          LERIVO
        </a>
        <div className="nav-links">
          <a href="#campaigns">Campaigns</a>
          <a href="#how-it-works">How it works</a>
        </div>
        <button className="nav-button" type="button">
          Create campaign
        </button>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            THE CREATOR CAMPAIGN PLATFORM
          </div>
          <h1>
            Where projects
            <br />
            <span>meet creators.</span>
          </h1>
          <p>
            LERIVO connects Web3 projects with creators through
            campaigns, contests and rewards.
          </p>
          <div className="hero-actions">
            <a href="#campaigns" className="primary-button">
              Explore campaigns
              <span>→</span>
            </a>
            <a href="#how-it-works" className="secondary-button">
              How it works
            </a>
          </div>
        </div>
      </section>
      <section id="campaigns" className="campaign-section">
        <div className="section-header">
          <div>
            <div className="section-label">LIVE NOW</div>
            <h2>Active campaigns</h2>
          </div>
          <span className="campaign-count">
            {campaigns.length} campaigns
          </span>
        </div>
        <div className="campaign-grid">
          {campaigns.map((campaign) => (
            <a
              href="#campaigns"
              className="campaign-card"
              key={campaign.title}
            >
              <div className="card-top">
                <span className="campaign-tag">{campaign.tag}</span>
                <span className="deadline">
                  {campaign.deadline} left
                </span>
              </div>
              <div className="card-main">
                <div className="project-name">
                  {campaign.project}
                </div>
                <h3>{campaign.title}</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <span className="data-label">PRIZE POOL</span>
                  <strong>{campaign.prize}</strong>
                </div>
                <div>
                  <span className="data-label">ENTRIES</span>
                  <strong>{campaign.entries}</strong>
                </div>
                <span className="arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section id="how-it-works" className="process-section">
        <div className="section-label">HOW IT WORKS</div>
        <div className="process-intro">
          <h2>
            One place for
            <br />
            <span>projects & creators.</span>
          </h2>
          <p>
            Projects launch campaigns. Creators make content.
            The best work gets rewarded.
          </p>
        </div>
        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Campaign</h3>
            <p>
              A project creates a campaign with a brief,
              rules, deadline and reward.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Create</h3>
            <p>
              Creators choose a campaign and submit their
              original work.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Reward</h3>
            <p>
              The project reviews submissions and rewards
              selected creators.
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="logo">LERIVO</div>
        <span>Campaigns for creators.</span>
      </footer>
    </main>
  );
}