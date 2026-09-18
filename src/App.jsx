const TELEGRAM_LINK =
  'https://telegram.me/+FAADlpwi5hFjOTQx';

const PROFILE_IMAGE = '/logo.jpg';
const PROFILE_PLACEHOLDER = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="#0066ff"/>
    <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-size="28" fill="#ffffff" font-family="Arial, sans-serif" font-weight="700">
      HS
    </text>
  </svg>
`);

function handleProfileImageError(event) {
  event.currentTarget.src = PROFILE_PLACEHOLDER;
}

function trackTelegramClick() {
  if (
    typeof window !== 'undefined' &&
    typeof window.fbq === 'function'
  ) {
    const eventId = `tg_sub_${Date.now()}`;

    window.fbq(
      'track',
      'Subscribe',
      {},
      {
        eventID: eventId,
      }
    );
  }
}

function TelegramButton() {
  return (
    <a
      className="btn"
      href={TELEGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackTelegramClick}
    >
      Join Free Telegram Channel
    </a>
  );
}

const stats = [
  {
    number: '50K+',
    label: 'Community',
  },
  {
    number: '5+',
    label: 'Years of Content',
  },
  {
    number: 'Daily',
    label: 'Market Updates',
  },
];

const features = [
  {
    icon: '[01]',
    text: 'Daily Nifty and BankNifty Market Analysis',
  },
  {
    icon: '[02]',
    text: 'Educational Stock Market Content',
  },
  {
    icon: '[03]',
    text: 'Market Learning Community',
  },
];

function App() {
  return (
    <div className="container">

      {/* Online Community */}
      <div className="online">
        <span className="dot"></span>
        Traders and Learners Online
      </div>

      {/* Profile */}
      <div className="profile">
        <img
          src={PROFILE_IMAGE}
          alt="Haji Sultan"
          onError={handleProfileImageError}
        />
      </div>

      {/* Brand */}
      <h1>HAJI SULTAN</h1>

      <div className="tag">
        Stock Market Education and Analysis
      </div>

      {/* Rating / Feedback */}
      <div className="rating">
        ★★★★★
        <br />
        <small>
          Community Feedback and Learning Updates
        </small>
      </div>

      {/* Telegram CTA */}
      <TelegramButton />

      {/* Stats */}
      <div className="stats">
        {stats.map((item) => (
          <div
            className="card"
            key={item.label}
          >
            <div className="number">
              {item.number}
            </div>

            {item.label}
          </div>
        ))}
      </div>

      {/* Main Heading */}
      <div className="heading">
        Learn About{' '}
        <span>NIFTY, BANKNIFTY and SENSEX</span>

        <br />

        with regular market-focused educational content
      </div>

      <div className="sub">
        Follow market analysis, educational updates and
        learning resources in one place.
      </div>

      {/* Information */}
      <div className="alert">
        Free Educational Market Content
      </div>

      {/* Features */}
      {features.map((feature) => (
        <div
          className="feature"
          key={feature.text}
        >
          <div className="icon">
            {feature.icon}
          </div>

          <div>
            {feature.text}
          </div>
        </div>
      ))}

      {/* Second CTA */}
      <TelegramButton />

      {/* Disclaimer */}
      <div className="disclaimer">
        <strong>Educational Disclaimer:</strong>

        <br />
        <br />

        This channel provides market-related educational
        content and general information for learning
        purposes only.

        <br />
        <br />

        Nothing shared on this channel should be considered
        personalized investment advice, a guarantee of
        returns, or a recommendation to buy or sell any
        security.

        <br />
        <br />

        Financial markets involve risk, and past performance
        does not guarantee future results. Please conduct
        your own research and consult a qualified financial
        professional before making investment decisions.
      </div>

      {/* Footer */}
      <div className="ads">
        Educational content by{' '}

        <a
          href="https://telegram.me/+2brlAMzDH7EyNDVl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Evolution Digital Marketing
        </a>
      </div>

    </div>
  );
}

export default App;
