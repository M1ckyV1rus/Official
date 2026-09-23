const { useEffect, useState } = React;

const telegramLink = 'https://t.me/+c-rISy_fuY83NzNl';

const marqueeItems = [
  'Sneha from Ahmedabad just joined',
  'Pooja from Surat just joined',
  'Rekha from Indore just joined',
];

const features = [
  { icon: '🏛️', title: 'Govt Approved' },
  { icon: '💸', title: 'UPI Payout' },
  { icon: '🚚', title: 'Free Pickup' },
  { icon: '👩', title: '2,400+ Ladies' },
];

const workPlans = [
  { icon: '📗', title: '7 Days Project', pages: '150 (50 sheets, front & back)', salary: '₹13,500', tag: null },
  { icon: '📘', title: '10 Days Project', pages: '180 (90 sheets, front & back)', salary: '₹16,000', tag: 'Popular ⭐' },
  { icon: '📙', title: '15 Days Project', pages: '240 (120 sheets, front & back)', salary: '₹22,000', tag: null },
  { icon: '📕', title: '26 Days Project', pages: '380 (190 sheets, front & back)', salary: '₹28,000', tag: 'Best Value 🏆' },
];

const steps = [
  { number: '1', title: 'Join Telegram', text: 'Join our Telegram channel to get started.' },
  { number: '2', title: 'Get Projects', text: 'We post small, well-paid writing tasks.' },
  { number: '3', title: 'Write & Earn', text: 'Complete tasks and receive fast payouts.' },
];

const reviews = [
  {
    initials: 'SP',
    name: 'Sneha Patel',
    city: 'Ahmedabad',
    text: 'I took a small project first just to test it. The payment arrived on UPI right on time. Now I work regularly — the best pocket money option alongside studies 💯',
  },
  {
    initials: 'PM',
    name: 'Priya Mehta',
    city: 'Surat',
    text: 'This is the best way to earn from home. The project instructions are clear and payments are always on time. Highly recommended!',
  },
  {
    initials: 'RK',
    name: 'Rekha Kumari',
    city: 'Indore',
    text: 'I have always loved writing. Prime Book turned my hobby into an income source, and the support team is very helpful.',
  },
];

const payouts = [
  { name: 'Priya S.', amount: '₹13,500' },
  { name: 'Anjali M.', amount: '₹28,000' },
  { name: 'Sneha P.', amount: '₹17,500' },
  { name: 'Kavita N.', amount: '₹22,000' },
];

const faqItems = [
  {
    question: 'How and when do I get paid?',
    answer:
      'The first salary is paid in advance, and the rest is transferred directly to your UPI or bank account after the work is submitted.',
  },
  {
    question: 'Do I need writing skills or experience?',
    answer: 'No prior experience is required. We provide guidance and simple tasks suited to beginners.',
  },
  {
    question: 'How much time do I need to give daily?',
    answer: 'You can choose your own schedule. Most women complete their tasks in a few focused hours each day.',
  },
];

function App() {
  const [currentReview, setCurrentReview] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const blockedShortcuts = new Set(['c', 'u', 's', 'a', 'p']);
    const blockContextMenu = (event) => event.preventDefault();
    const blockDrag = (event) => event.preventDefault();
    const blockShortcuts = (event) => {
      const key = event.key.toLowerCase();
      const modifier = event.ctrlKey || event.metaKey;

      if (
        (modifier && blockedShortcuts.has(key)) ||
        event.key === 'F12' ||
        (modifier && event.shiftKey && ['i', 'j', 'c'].includes(key))
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('dragstart', blockDrag);
    document.addEventListener('selectstart', blockDrag);
    document.addEventListener('keydown', blockShortcuts);

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('dragstart', blockDrag);
      document.removeEventListener('selectstart', blockDrag);
      document.removeEventListener('keydown', blockShortcuts);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentReview((index) => (index + 1) % reviews.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const trackTelegramClick = (event) => {
      if (!event.isTrusted || localStorage.getItem('telegramTracked') === 'true') {
        return;
      }

      localStorage.setItem('telegramTracked', 'true');
      const eventId = `tg_${Date.now()}`;

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Subscribe', {}, { eventID: eventId });
      }
    };

    const buttons = document.querySelectorAll('.telegram-cta');
    buttons.forEach((button) => button.addEventListener('click', trackTelegramClick));

    return () => {
      buttons.forEach((button) => button.removeEventListener('click', trackTelegramClick));
    };
  }, []);

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img src="images/prime-logo.jpg" alt="Prime Book Publication logo" className="brand-logo" />
          <span className="brand-name">Prime Book Publication</span>
        </div>
        <a id="telegramBtn" href={telegramLink} target="_blank" rel="noreferrer" className="telegram-pill telegram-cta">
          ✈ Join Telegram
        </a>
      </header>

      <div className="promo-strip">
        <div className="banner-main">
          <span>👩</span>
          <span>ONLY FOR FEMALES | HOUSEWIVES | GIRLS</span>
        </div>
        <div className="banner-warning">⚠️ Male candidates please do not apply</div>

        <div className="marquee-box">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-item">
                <span className="blink-dot" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="seat-note">
          <span>🕒 Only</span>
          <strong>27 seats left today</strong>
          <span>— join fast</span>
        </div>
      </div>

      <section className="hero-card">
        <img
          src="images/books-collage-ClBVX7zc.jpg"
          alt="Collection of published book covers by Prime Book Publication"
          className="hero-image"
        />

        <div className="hero-copy">
          <div className="brand-row">
            <span className="brand-mark">Prime Book Publication</span>
            <span className="approved-badge">✓ Government Approved</span>
          </div>
          <h1>Earn From Home</h1>
          <p className="pay-rate">₹25,000 – ₹40,000</p>
          <p className="sub-rate">per project · for females only</p>
          <a href={telegramLink} target="_blank" rel="noreferrer" className="primary-btn telegram-cta">
            👩 Join Females Telegram Group
          </a>
          <p className="note-line">Note: For women only. Male candidates please do not apply.</p>
        </div>
      </section>

      <section className="feature-grid">
        {features.map((feature) => (
          <div className="feature-item" key={feature.title}>
            <span className="feature-icon">{feature.icon}</span>
            <span>{feature.title}</span>
          </div>
        ))}
      </section>

      <section className="mini-grid">
        <div className="mini-item">
          <span className="mini-icon">🎯</span>
          <span>Short & Easy Projects</span>
        </div>
        <div className="mini-item">
          <span className="mini-icon">💰</span>
          <span>Quick Payments</span>
        </div>
        <div className="mini-item">
          <span className="mini-icon">📦</span>
          <span>Parcel Pickup Service</span>
        </div>
      </section>

      <section className="plans">
        <h2>📚 Our Best – Work Plans</h2>
        <div className="plan-grid">
          {workPlans.map((plan) => (
            <a
              className={`plan-card plan-link telegram-cta ${plan.tag ? 'highlight' : ''}`}
              href={telegramLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Join Telegram for the ${plan.title}`}
              key={plan.title}
            >
              {plan.tag && <span className="plan-tag">{plan.tag}</span>}
              <div className="plan-header">
                <span className="plan-icon">{plan.icon}</span>
                <h3>{plan.title}</h3>
              </div>
              <p>✏️ Pages: {plan.pages}</p>
              <p>💰 Salary: <strong>{plan.salary}</strong></p>
            </a>
          ))}
        </div>
        <div className="plan-notes">
          <p>💡 Salary Process: 1st salary received in advance, remaining after work at our place.</p>
          <p>📦 Disclaimer: All material provided by us. Delivery & pickup service available.</p>
        </div>
      </section>

      <section className="steps">
        <h2>How It Works</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-copy">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews">
        <div className="section-head">
          <h2>💬 Writer Reviews</h2>
          <p>Real feedback from our community</p>
        </div>

        <div className="review-list review-carousel">
          <div className="review-track" style={{ transform: `translateX(-${currentReview * 100}%)` }}>
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-header">
                <div className="avatar">{review.initials}</div>
                <div>
                  <div className="review-name-row">
                    <strong>{review.name}</strong>
                    <span className="check">✓</span>
                  </div>
                  <p>{review.city}</p>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <p>{review.text}</p>
            </article>
          ))}
          </div>
        </div>

        <div className="review-dots" aria-label="Review navigation">
          {reviews.map((review, index) => (
            <button
              type="button"
              aria-label={`Go to review ${index + 1}`}
              className={currentReview === index ? 'active' : ''}
              onClick={() => setCurrentReview(index)}
              key={review.name}
            />
          ))}
        </div>
      </section>

      <section className="payouts">
        <div className="section-head payouts-head">
          <div className="currency-wrap">
            <span className="currency">₹</span>
            <h2>Recent Payouts</h2>
          </div>
          <p>Real writers, real UPI transfers</p>
        </div>

        <div className="payout-list">
          {payouts.map((entry) => (
            <div className="payout-row" key={entry.name}>
              <div className="payer-badge">{entry.name.charAt(0)}</div>
              <div className="payer-meta">
                <p>{entry.name}</p>
                <span>Paid via UPI</span>
              </div>
              <strong>{entry.amount}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="faq">
        <div className="section-head faq-head">
          <h2>❓ Your Questions</h2>
          <p>Clear all your doubts before joining</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={item.question}>
              <button type="button" className="faq-question" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                {item.question}
                <span>▼</span>
              </button>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-block">
        <h2>Ready to Start?</h2>
        <a href={telegramLink} target="_blank" rel="noreferrer" className="primary-btn large telegram-cta">
          🚀 Join Free Telegram Group
        </a>
      </section>

      <footer className="page-footer">© 2025 Vishv Book Publication</footer>

      <div className="sticky-cta">
        <p>Only 27 seats left today</p>
        <a href={telegramLink} target="_blank" rel="noreferrer" className="telegram-cta">
          ✈ Join Now Telegram Group
        </a>
      </div>
    </main>
  );
}

window.PrimeBookApp = App;

if (window.ReactDOM && document.getElementById('root') && !window.__VITE_REACT_ENTRY__) {
  window.ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
