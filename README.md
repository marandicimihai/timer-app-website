# Minimal Timer website

This project is the website for [Minimal Timer](https://github.com/marandicimihai/timer-app), a free macOS menu-bar app for doing one thing at a time. The website’s purpose is to explain the app, help people download and install it, and give them a way to share feedback.

## The app

- Start a named activity and see its elapsed time from the menu bar. Finish it to record the session.
- Hold Option–T to open the activity wheel and start a recent activity or finish the running timer.
- Run configurable Pomodoro focus and break timers with optional completion notifications.
- Review completed activities and daily totals, and set weekly time goals for individual activities.
- Manage activities by assigning colors, archiving them, or deleting them with their history.
- Activity history stays on the Mac. The app is free and requires no account or subscription.

The app’s README lists macOS 14 or later and support for both Apple Silicon and Intel. It describes a DMG install that puts **Minimal Timer.app** in **Applications**. The app appears in the menu bar after launch. The upstream README also documents a macOS first-launch approval step for its ad-hoc-signed build. Check the published release before using that guidance on the site.

## Upstream references

- [App source and product README](https://github.com/marandicimihai/timer-app)
- [Latest release and release notes](https://github.com/marandicimihai/timer-app/releases/latest)
- [Download for Mac](https://github.com/marandicimihai/timer-app/releases/latest/download/MinimalTimer.dmg)
- [Feedback and install trouble](https://github.com/marandicimihai/timer-app/issues/new?template=feedback.yml)

The upstream `Design/` directory contains the Minimal Timer logo mark and lockup. The app source and README can also be read from the sibling `../timer-app` checkout when available.

## Local preview

From the website directory, run `npm ci` and then `npm run dev`. Open [Home](http://127.0.0.1:4173/) or [Installation help](http://127.0.0.1:4173/install/).

The site uses the Next.js App Router. Run `npm run build` to export both pages and their assets to `out/` for static hosting. Set `SITE_URL` to the public origin when building for deployment so social images resolve there.

## Product images

The activity wheel screenshots are 6× offscreen renders of the native SwiftUI wheel from [v1.10.0](https://github.com/marandicimihai/timer-app/releases/tag/v1.10.0), with sample activities and separate start and stop states. The other homepage app images are 3× offscreen renders of the native SwiftUI views at tag [v1.9.5](https://github.com/marandicimihai/timer-app/tree/v1.9.5), using sample activities from an in-memory store. The installed app’s activity history and settings are separate from the captures.

## Before publishing
- Replace the walkthrough illustration with a native `video` element using `controls`, `playsinline`, `preload="none"`, a local poster, and an MP4 source. Keep the written steps beside it and label the hero link **Watch the app** once the video is available.
- Recheck the current release, download the DMG, and validate the installation flow from a fresh Mac session. Record the DMG asset's GitHub download count at launch. Use the feedback form to learn whether people tried the app and returned.
