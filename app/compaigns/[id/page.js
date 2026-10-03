const campaigns = {
  "crypto-meme": {
    project: "Example Protocol",
    title: "Create the next crypto meme",
    tag: "MEMES",
    prize: "$2,500",
    deadline: "3d 12h",
    entries: 42,
    description:
      "Create an original meme that captures the idea, culture or community of Example Protocol.",
    requirements: [
      "Create an original meme",
      "Keep the content related to Example Protocol",
      "Post your work on X",
      "Submit the X post link and your payout wallet"
    ]
  },

  "web3-content": {
    project: "Open Network",
    title: "Make Web3 understandable",
    tag: "CONTENT",
    prize: "$1,000",
    deadline: "5d 08h",
    entries: 18,
    description:
      "Create simple, engaging content that helps people understand what Open Network is building.",
    requirements: [
      "Create original educational content",
      "Keep the explanation simple and accessible",
      "Post your work on X",
      "Submit the X post link and your payout wallet"
    ]
  },

  "community-campaign": {
    project: "New Protocol",
    title: "Community campaign",
    tag: "CREATIVE",
    prize: "$750",
    deadline: "2d 04h",
    entries: 27,
    description:
      "Create content that brings attention to New Protocol and gets the community involved.",
    requirements: [
      "Create original creative content",
      "Make the content suitable for the community",
      "Post your work on X",
      "Submit the X post link and your payout wallet"
    ]
  }
};

export default async function CampaignPage({ params }) {
  const { id } = await params;
  const campaign = campaigns[id];

  if (!campaign) {
    return (
      <main className="campaign-page">
        <div className="campaign-page-inner">
          <a href="/" className="campaign-back">
            ← Back to campaigns
          </a>

          <div className="campaign-not-found">
            <div className="section-label">CAMPAIGN</div>
            <h1>Campaign not found.</h1>
            <p>
              This campaign does not exist or is no longer available.
            </p>

            <a href="/" className="campaign-primary-button">
              Browse campaigns
              <span>→</span>
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="campaign-page">
      <div className="campaign-page-inner">
        <nav className="campaign-nav">
          <a href="/" className="campaign-logo">
            LERIVO
          </a>

          <a href="/" className="campaign-back">
            ← All campaigns
          </a>
        </nav>

        <header className="campaign-hero">
          <div className="campaign-hero-top">
            <span className="campaign-detail-tag">
              {campaign.tag}
            </span>

            <span className="campaign-detail-status">
              LIVE
            </span>
          </div>

          <div className="campaign-project">
            {campaign.project}
          </div>

          <h1>{campaign.title}</h1>

          <p className="campaign-description">
            {campaign.description}
          </p>

          <a href="#submit" className="campaign-primary-button">
            Submit entry
            <span>→</span>
          </a>
        </header>

        <section className="campaign-stats">
          <div>
            <span>PRIZE POOL</span>
            <strong>{campaign.prize}</strong>
          </div>

          <div>
            <span>ENTRIES</span>
            <strong>{campaign.entries}</strong>
          </div>

          <div>
            <span>DEADLINE</span>
            <strong>{campaign.deadline}</strong>
          </div>
        </section>

        <section className="campaign-content">
          <div className="campaign-main-column">
            <div className="campaign-section-block">
              <div className="section-label">THE BRIEF</div>

              <h2>What to create</h2>

              <p>
                Turn the campaign brief into something people
                actually want to see and share. Originality,
                relevance and execution matter.
              </p>
            </div>

            <div className="campaign-section-block">
              <div className="section-label">REQUIREMENTS</div>

              <h2>Rules</h2>

              <div className="requirements-list">
                {campaign.requirements.map((requirement, index) => (
                  <div
                    className="requirement"
                    key={requirement}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{requirement}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="submit"
              className="campaign-submit-block"
            >
              <div className="section-label">SUBMIT</div>

              <h2>Ready to enter?</h2>

              <p>
                Submit your work with the required information.
                Winners are selected by the campaign organizer.
              </p>

              <button
                className="campaign-primary-button submit-button"
                type="button"
              >
                Submit entry
                <span>→</span>
              </button>
            </div>
          </div>

          <aside className="campaign-sidebar">
            <div className="sidebar-card">
              <div className="section-label">CAMPAIGN INFO</div>

              <div className="sidebar-row">
                <span>Project</span>
                <strong>{campaign.project}</strong>
              </div>

              <div className="sidebar-row">
                <span>Category</span>
                <strong>{campaign.tag}</strong>
              </div>

              <div className="sidebar-row">
                <span>Prize</span>
                <strong>{campaign.prize}</strong>
              </div>

              <div className="sidebar-row">
                <span>Entries</span>
                <strong>{campaign.entries}</strong>
              </div>

              <div className="sidebar-row">
                <span>Time left</span>
                <strong>{campaign.deadline}</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="submissions-section">
          <div className="section-label">SUBMISSIONS</div>

          <div className="submissions-header">
            <h2>Creator entries</h2>
            <span>{campaign.entries} submitted</span>
          </div>

          <div className="submissions-empty">
            <span>01</span>

            <div>
              <h3>Submissions will appear here.</h3>
              <p>
                Creator entries will be displayed here once
                submissions are connected.
              </p>
            </div>
          </div>
        </section>

        <footer className="campaign-footer">
          <span>LERIVO</span>
          <span>Campaigns for creators.</span>
        </footer>
      </div>
    </main>
  );
}