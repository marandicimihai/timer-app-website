import SiteHeader, { downloadUrl } from './site-header'
import ScrollReveal from './scroll-reveal'

const title = 'Minimal Timer — Time tracking for your Mac'

export const metadata = {
  title,
  description: 'Track everyday activities from your Mac menu bar, review daily totals, and work toward weekly goals. Free, with no account required.',
  openGraph: {
    type: 'website',
    title,
    description: 'See where your time goes with a free timer that lives in your Mac menu bar.',
    images: ['/assets/share.png'],
  },
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero" data-enter="">
          <div className="wrap split hero-inner">
            <div>
              <p className="eyebrow"><span className="dot"></span> A timer in your menu bar</p>
              <h1>Time tracking<br className="desktop-break" /> for your Mac<span className="accent">.</span></h1>
              <p className="lead">See where your time goes. Track everyday activities from your menu bar, review your daily totals, and work toward weekly goals.</p>
              <div className="actions">
                <a className="button" href={downloadUrl}>Download for Mac <span aria-hidden="true">↓</span></a>
                <a className="secondary" href="#how-it-works">See how it works <span aria-hidden="true">↘</span></a>
              </div>
              <p className="facts">Free · No account required<br />macOS 14+ · Apple Silicon and Intel</p>
              <p className="note">macOS may ask for first-launch approval. <a href="/install/">Installation help</a></p>
            </div>
            <a className="hero-art screenshot-link" href="/assets/app/timer-active.png">
              <img src="/assets/app/timer-active.png" width="990" height="1527" fetchPriority="high" alt="The Minimal Timer popover tracking Writing, with recent activity totals and weekly goals." />
            </a>
          </div>
        </section>
        <section id="how-it-works" className="section workflow">
          <div className="wrap split">
            <div>
              <h2 data-reveal="">Your next activity starts here.</h2>
              <p className="lead" data-reveal="">Start a timer from your menu bar and get back to what you were doing.</p>
              <ol className="steps">
                <li data-reveal=""><div><strong>Name your activity</strong><p>Type “Writing” in the menu bar popover.</p></div></li>
                <li data-reveal=""><div><strong>Start the timer</strong><p>See how long you’ve been working at a glance.</p></div></li>
                <li data-reveal=""><div><strong>Finish and review</strong><p>Save the session and find it under History.</p></div></li>
              </ol>
            </div>
            <div className="workflow-art" data-reveal="" data-media="walkthrough" aria-hidden="true">
              <svg viewBox="0 0 360 260" fill="none" focusable="false">
                <circle cx="180" cy="130" r="100" stroke="currentColor" strokeOpacity=".12" />
                <circle cx="180" cy="130" r="80" stroke="currentColor" strokeOpacity=".18" strokeWidth="2" strokeDasharray="1 7" />
                <path d="M180 50a80 80 0 0 1 80 80" stroke="#ff7048" strokeWidth="5" strokeLinecap="round" />
                <path className="clock-hand" d="M180 90v40l28 22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="180" cy="130" r="6" fill="currentColor" />
              </svg>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="section-intro" data-reveal="">
              <h2>See where your time went.</h2>
              <p className="lead">Look back at completed sessions and see how your time adds up across days.</p>
            </div>
            <div className="feature-grid activity-review">
              <article>
                <h3 data-reveal="">Daily totals</h3>
                <p data-reveal="">Open History to see the activities you finished and how long you spent on each.</p>
                <a className="app-screen screenshot-link" data-reveal="" href="/assets/app/history.png">
                  <img src="/assets/app/history.png" width="2340" height="1710" loading="lazy" decoding="async" alt="History showing completed Writing, Design, and Reading sessions grouped by day." />
                </a>
              </article>
              <article>
                <h3 data-reveal="">Activity trends</h3>
                <p data-reveal="">Compare days in Statistics and see which activities took up the most time.</p>
                <a className="app-screen screenshot-link" data-reveal="" href="/assets/app/statistics.png">
                  <img src="/assets/app/statistics.png" width="2340" height="1710" loading="lazy" decoding="async" alt="Statistics showing daily time spent on Writing over seven days." />
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="section soft">
          <div className="wrap">
            <div className="section-intro" data-reveal="">
              <p className="eyebrow">Goals and organization</p>
              <h2>Make time for what matters.</h2>
            </div>
            <div className="feature-grid">
              <article className="feature">
                <h3 data-reveal="">Weekly goals</h3>
                <p data-reveal="">Pick an activity, set a target in hours, and check your progress from the menu bar.</p>
                <a className="app-screen screenshot-link" data-reveal="" href="/assets/app/goals.png">
                  <img src="/assets/app/goals.png" width="1710" height="660" loading="lazy" decoding="async" alt="Weekly targets set for Design and Writing." />
                </a>
              </article>
              <article className="feature">
                <h3 data-reveal="">Keep your activity list tidy</h3>
                <p data-reveal="">Give activities their own colors and archive ones you no longer track while keeping their history.</p>
                <a className="app-screen screenshot-link" data-reveal="" href="/assets/app/activities.png">
                  <img src="/assets/app/activities.png" width="1800" height="990" loading="lazy" decoding="async" alt="Manage activities with color, archive, and delete controls for each activity." />
                </a>
              </article>
            </div>
          </div>
        </section>
        <section id="questions" className="section">
          <div className="wrap split questions">
            <h2 data-reveal="">Questions</h2>
            <div className="faq">
              <details data-reveal=""><summary>Is Minimal Timer free?</summary><p>Yes. It’s free to download and use, and there’s no account or subscription.</p></details>
              <details data-reveal=""><summary>Where is my activity history stored?</summary><p>Your activity history is stored locally on your Mac.</p></details>
              <details data-reveal=""><summary>Does it track time automatically?</summary><p>You decide what to track. Start an activity when you begin and finish it to save the session.</p></details>
              <details data-reveal=""><summary>Why might macOS ask me to approve the app?</summary><p>The current release is ad-hoc signed and hasn’t been notarized by Apple. If macOS blocks the first launch, follow the <a href="/install/">installation guide</a>.</p></details>
            </div>
          </div>
        </section>
      </main>
      <footer className="closing">
        <div className="wrap">
          <div className="close-content">
            <img data-reveal="" src="/assets/app-icon.webp" width="78" height="78" alt="" loading="lazy" />
            <h2 data-reveal="">Track your next activity.</h2>
            <p data-reveal="">Free · No account required</p>
            <a data-reveal="" className="button" href={downloadUrl}>Download for Mac <span aria-hidden="true">↓</span></a>
            <p className="facts" data-reveal="">macOS 14+ · Apple Silicon and Intel</p>
          </div>
          <div className="footer-links">
            <a className="brand" href="/">Minimal Timer</a>
            <nav aria-label="Footer">
              <a href="/install/">Installation help</a>
              <a href="https://github.com/marandicimihai/timer-app">GitHub source</a>
              <a href="https://github.com/marandicimihai/timer-app/releases/latest">Release notes</a>
              <a href="https://github.com/marandicimihai/timer-app/issues/new?template=feedback.yml">Feedback</a>
            </nav>
          </div>
        </div>
      </footer>
      <ScrollReveal />
    </>
  )
}
