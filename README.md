# 🏍️ Ninja 500 — Interactive Motorcycle Showcase

### Designed in Figma · Built with HTML, CSS & JavaScript

A motorcycle UI concept by **[AshmitaNotFound](https://github.com/AshmitaNotFound)**.

> Unofficial student design concept. Not affiliated with or endorsed by Kawasaki.

## ✨ About the Project

I created this project in Figma to practice product presentation, typography, color, and visual hierarchy.

With assistance from OpenAI Codex, I turned the design into an interactive website featuring animated motorcycle transitions and a slide-in details panel, while retaining my original font families, color themes, and supplied bike images.

## 🎬 Animations & Interactions

### Motorcycle Color Selection

Choose between **Green, Silver, and Black**.

- The current bike dips slightly before accelerating out of view.
- Tilt and motion blur help create a sense of movement.
- The selected bike enters from the left, decelerates, and settles into position.
- Rapid clicks queue the latest color choice until the current transition finishes.

The movement uses the **JavaScript Web Animations API**. It simulates driving with flat PNG images; the wheels are not animated independently.

### Explore More

Click **Explore More** to open an animated details panel containing:

- The selected motorcycle image and color.
- The price shown in the original design.
- Engine, styling, and riding-position information.

Close the panel using **×**, **Back to the Bike**, or the **Escape key**.

### Accessibility

- Keyboard-accessible color controls.
- Visible focus indicators.
- Selected-color states.
- Support for the device’s reduced-motion preference.

## 🎨 Design Elements

| Element | Details |
| --- | --- |
| Typography | Teko for headings and labels; Tektur for pricing |
| Color themes | Green, charcoal, and silver |
| Images | Supplied transparent motorcycle PNGs |
| Layout | Large motorcycle imagery alongside product information |
| Controls | Color selector and Explore More button |
| Responsive styling | Layout adjustments for smaller screens |

## 🛠️ Tools & Technologies

| Tool | Purpose |
| --- | --- |
| Figma | Original interface design and asset exports |
| HTML | Page structure and details dialog |
| CSS | Layout, typography, responsiveness, and panel transitions |
| JavaScript | Color selection and motorcycle animation |
| OpenAI Codex | AI-assisted coding and animation implementation |
| GitHub | Source-code storage |
| GitHub Pages | Optional static website hosting |

**No framework, installation, build step, or API key is required.**

## 🚀 Run Locally

1. Download and extract the project.
2. Open `index.html` in a modern browser.
3. Keep the `assets` folder beside the HTML, CSS, and JavaScript files.
4. Select a motorcycle color and try **Explore More**.

## 📁 Project Structure

```text
├── index.html
├── style.css
├── app.js
├── assets/
├── README.md
├── LICENSE
└── THIRD_PARTY_NOTICES.md
```

## 👩‍💻 My Contribution

- **Original Figma design and visual direction:** AshmitaNotFound.
- **Website code and animation:** developed with assistance from OpenAI Codex.
- **Motorcycle imagery and Kawasaki branding:** third-party assets, not claimed as my original artwork.

This project explores how movement, interaction, and responsive styling can bring a static design to life.

## 📌 Project Scope

This is a portfolio prototype, **not an official Kawasaki website or an online store**.

Shop, utility icons, and social icons are visual elements only. Prices and specifications come from the supplied design and are not verified current sales information.

## 📜 Rights & Credits

**Copyright © 2026 AshmitaNotFound. All rights reserved.**

No permission is granted to copy, modify, distribute, sell, or reuse original project contributions without prior written permission, except as permitted by applicable law or binding platform terms. See [LICENSE](LICENSE).

Third-party images, Kawasaki/Ninja branding, and fonts remain subject to their respective owners’ rights and licenses. Teko and Tektur retain their included SIL Open Font Licenses.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for asset information. Image permissions must be confirmed before public redistribution.

This notice does not revoke permissions validly granted for copies previously distributed under another license.
