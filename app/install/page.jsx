import SiteHeader, { downloadUrl } from '../site-header'

const title = 'Install Minimal Timer on your Mac'

export const metadata = {
  title,
  description: 'Download Minimal Timer, install it in Applications, and start tracking your first activity from the Mac menu bar.',
  openGraph: {
    type: 'website',
    title,
    description: 'Download the app and start your first timer. Includes help with first-launch approval.',
    images: ['/assets/share.png'],
  },
}

export default function InstallPage() {
  return (
    <>
      <SiteHeader install />
      <main id="main" className="wrap install">
        <div className="install-intro">
          <img src="/assets/app-icon.webp" width="76" height="76" alt="" />
          <h1>Install Minimal Timer<span className="accent">.</span></h1>
          <p className="lead">For macOS 14 or later, on Apple Silicon and Intel Macs.</p>
          <a className="button" href={downloadUrl}>Download for Mac <span aria-hidden="true">↓</span></a>
        </div>
        <section>
          <h2>From download to first activity</h2>
          <ol className="steps">
            <li><div><strong>Open the disk image</strong><p>Open <strong>MinimalTimer.dmg</strong> from Downloads.</p></div></li>
            <li><div><strong>Move the app to Applications</strong><p>Drag <strong>Minimal Timer.app</strong> onto the Applications shortcut in the disk image.</p></div></li>
            <li><div><strong>Open Minimal Timer</strong><p>Launch the app from Applications, then eject the disk image. If macOS blocks it, follow the steps below.</p></div></li>
            <li><div><strong>Start an activity</strong><p>Click the timer icon in your menu bar. Enter a name and click <strong>Start</strong>. When you’re done, click <strong>Finish Activity</strong> to save the session. The app has no Dock icon.</p></div></li>
          </ol>
        </section>
        <section className="install-help">
          <h2>If macOS blocks the first launch</h2>
          <p>The current release is ad-hoc signed and hasn’t been notarized by Apple. Continue only if you downloaded Minimal Timer from its official GitHub release and trust it.</p>
          <ol className="approval-steps">
            <li>Try opening <strong>Minimal Timer</strong> from Applications, then dismiss the warning.</li>
            <li>Open <strong>System Settings → Privacy &amp; Security</strong>.</li>
            <li>Under <strong>Security</strong>, choose <strong>Open Anyway</strong> for Minimal Timer, then confirm <strong>Open</strong>.</li>
            <li>Enter your Mac login password if prompted.</li>
          </ol>
          <p><a href="https://support.apple.com/102445">Read Apple’s guidance</a> or <a href="https://github.com/marandicimihai/timer-app/issues/new?template=feedback.yml">report installation trouble</a> if approval is unavailable.</p>
        </section>
      </main>
      <footer className="wrap footer-links">
        <a className="brand" href="/">Minimal Timer</a>
        <nav aria-label="Footer">
          <a href="https://github.com/marandicimihai/timer-app">GitHub source</a>
          <a href="https://github.com/marandicimihai/timer-app/releases/latest">Release notes</a>
          <a href="https://github.com/marandicimihai/timer-app/issues/new?template=feedback.yml">Feedback</a>
        </nav>
      </footer>
    </>
  )
}
