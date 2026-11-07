export const downloadUrl =
  'https://github.com/marandicimihai/timer-app/releases/latest/download/MinimalTimer.dmg'

export default function SiteHeader({ install = false }) {
  const home = install ? '/' : ''

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="wrap nav" aria-label="Main">
        <a className="brand" href="/">
          <img src="/assets/app-icon.webp" width={34} height={34} alt="" />
          Minimal Timer
        </a>
        <div className="nav-links">
          <a href={home + '#how-it-works'}>How it works</a>
          <a href={home + '#questions'}>Questions</a>
          <a href="/install/" aria-current={install ? 'page' : undefined}>Installation help</a>
          <a href="https://github.com/marandicimihai/timer-app">GitHub</a>
        </div>
        <a className="button small" href={downloadUrl}>
          Download for Mac <span aria-hidden="true">↓</span>
        </a>
      </nav>
    </header>
  )
}
