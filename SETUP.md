# gamepilot.games — Domain & Hosting Setup

This is the practical, no-backend setup for `gamepilot.games`. Total recurring cost: ~£10–15/yr (domain renewal). Everything else is free.

---

## 1. DNS — Cloudflare (free)

1. Sign up at https://dash.cloudflare.com (free plan).
2. Add site `gamepilot.games`.
3. At your registrar (where you bought the domain), change the nameservers to the two Cloudflare gives you.
4. Wait for DNS to propagate (usually minutes, up to 24h).

Once Cloudflare shows the domain as **Active**, you control DNS from their dashboard.

---

## 2. Hosting the landing page

You have two zero-cost options. Pick one.

### Option A — Keep Vercel (current setup)
The site already auto-deploys from this repo to Vercel. To use the custom domain:

1. In Vercel project → **Settings → Domains** → add `gamepilot.games` and `www.gamepilot.games`.
2. Vercel will show DNS records to add.
3. In Cloudflare DNS, add those records. **Important:** set them to **DNS only** (grey cloud, not orange) — Vercel handles its own SSL.

### Option B — Cloudflare Pages (alternative, also free)
1. Cloudflare dashboard → **Pages → Create a project → Connect to Git**.
2. Pick this repo. Framework preset: **Next.js**. Build command: `npm run build`. Output: `.next`.
3. Pages → **Custom domains** → add `gamepilot.games`. DNS records auto-configure.

Either way: the share/landing URL becomes `https://gamepilot.games`.

---

## 3. Email forwarding — `hello@gamepilot.games`

Cloudflare provides this free, no mailbox needed.

1. Cloudflare dashboard → **Email → Email Routing**.
2. Click **Get started**. It will add the required MX + TXT records automatically.
3. Add a custom address: `hello@gamepilot.games` → forward to your real inbox.
4. Verify the destination inbox (Cloudflare emails it a confirmation link).

Done. `hello@gamepilot.games` now lands in your real mail. Use it on:
- The site footer / contact link
- The GamePilot app's **Settings → About** screen
- README badges
- Patreon / itch.io profiles

---

## 4. Electron auto-update manifest

The app polls a static JSON file. No backend required.

- **Manifest URL:** `https://gamepilot.games/updates/latest.json`
- **Source file in this repo:** `public/updates/latest.json`

When you cut a new release:
1. Bump `version`, update `releaseDate`, `notes`, and the `downloads.win-x64.url` (and `sha256` if you ship signed installers).
2. Commit & push. Vercel/Pages redeploys instantly.
3. Every running install picks up the new version on its next launch.

### Minimal Electron wiring (app side)
```js
// in main process, on app ready
const { app, dialog, shell } = require('electron');
const https = require('https');

function checkForUpdates() {
  https.get('https://gamepilot.games/updates/latest.json', (res) => {
    let body = '';
    res.on('data', (c) => (body += c));
    res.on('end', () => {
      try {
        const manifest = JSON.parse(body);
        if (manifest.version !== app.getVersion()) {
          dialog.showMessageBox({
            type: 'info',
            title: 'Update available',
            message: `${manifest.name} is out.`,
            detail: manifest.notes,
            buttons: ['Download', 'Later'],
          }).then(({ response }) => {
            if (response === 0) shell.openExternal(manifest.downloads['win-x64'].url);
          });
        }
      } catch (_) { /* ignore */ }
    });
  }).on('error', () => { /* offline; ignore */ });
}
```

For full auto-download/install (silent updates), use `electron-updater` with a generic provider pointing at the same URL pattern. The static JSON approach above is the simplest possible version and requires no server.

---

## 5. Branding anchor

Once the domain is live:
- Share card footer (`YearInReviewShareCard.js`) → change the tagline footer to `gamepilot.games`.
- GitHub repo → **About → Website** → set to `https://gamepilot.games`.
- itch.io project pages → add the link in the project's **More info** section.

---

## What NOT to add

Resist the urge. Each of these breaks the local-first promise and adds recurring cost:

- ❌ User accounts / login
- ❌ Cloud sync of stats/saves
- ❌ Telemetry or analytics endpoints
- ❌ Online leaderboards
- ❌ Anything backed by a database

The differentiator is the absence of all of the above. Keep it that way.
