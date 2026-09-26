<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,30:0f3d0f,60:1f8f3f,85:7CFF00,100:d4ff4d&height=230&section=header&text=NINJA%20500&fontSize=68&fontColor=ffffff&fontAlignY=35&desc=AN%20INTERACTIVE%20MOTORCYCLE%20SHOWCASE&descAlignY=58&descSize=18&descColor=FFB800&animation=fadeIn" width="100%" alt="Ninja 500 header banner">

<img src="https://readme-typing-svg.demolab.com/?font=Teko&size=22&pause=1200&color=FFB800&center=true&vCenter=true&width=560&lines=Designed+in+Figma;Built+with+HTML%2C+CSS+%26+JavaScript;Brought+to+life+with+motion" alt="Typing SVG">

<br>

<a href="https://ashmitanotfound.github.io/BIKE-SHOWCASE/">
  <img src="https://img.shields.io/badge/🌐%20VIEW%20LIVE%20WEBSITE-111111?style=for-the-badge&labelColor=111111&color=7CFF00" alt="View Live Website">
</a>

<br><br>

<img src="ninja-banner.png" alt="Ninja 500 Interactive Motorcycle Showcase" width="100%">

<br>

*A visual product experience built around speed, color, motion, and interaction.*

</div>

<br>

## Table of Contents

- [The Concept](#-the-concept)
- [The Experience](#-the-experience)
- [Design Direction](#-design-direction)
- [From Figma to Interactive UI](#-from-figma--interactive-ui)
- [Technology](#️-technology)
- [Responsive & Accessible](#-responsive--accessible)
- [Project Structure](#-project-structure)
- [My Role](#-my-role)
- [Project Scope](#-project-scope)
- [Third-Party Assets](#️-third-party-assets)
- [License](#-license)

<br>

---

## ✦ The Concept

Most product pages treat the product as a photo. **Ninja 500 treats it as the interface.**

This project began as a Figma UI concept exploring a bold, premium way to present a motorcycle online — not as a static image sitting next to a spec sheet, but as something you *interact with directly*. Selecting a color doesn't just swap an asset; it triggers a moment. Opening the details doesn't just reveal text; it reframes the whole screen around it.

The experience is built around a simple loop:

<div align="center">

**PRESENT** → **CHOOSE** → **MOVE** → **EXPLORE**

</div>

> *Unofficial student UI concept. Not affiliated with or endorsed by Kawasaki.*

<br>

---

## ⚡ The Experience

<div align="center">

### CHOOSE. MOVE. EXPLORE.

</div>

### 01 — Select the Bike

Three visual color variants, one motorcycle:

🟢 **Green** &nbsp;·&nbsp; ⚪ **Silver** &nbsp;·&nbsp; ⚫ **Black**

Switching between them isn't a swap — it's a scene. The current bike doesn't just disappear; it accelerates off-screen before the next one arrives, so the color picker doubles as a tiny piece of choreography.

### 02 — Feel the Motion

Built on the **JavaScript Web Animations API**, the transition sequence layers together:

| Stage | What happens |
|---|---|
| Exit | Forward acceleration, slight tilt, motion blur |
| Transition | Full exit off-screen |
| Entry | Arrival from the opposite side |
| Settle | Deceleration into final position |

The intent: make a simple color switch feel like *changing the bike itself*, not just its skin.

> *The motorcycle movement is simulated using flat PNG assets. The wheels are not animated independently.*

### 03 — Explore the Details

Clicking **Explore More** dims the background and slides in a full product panel:

- Motorcycle image
- Selected color
- Price *(from the original design)*
- Engine information
- Styling information
- Riding-position information

Closeable three ways — **× Close**, **Back to the Bike**, or **ESC** — because a good panel should never trap you.

<br>

---

## 🎨 Design Direction

<div align="center">

### BOLD · DARK · SPORTY · MINIMAL

</div>

The visual language mirrors the characteristics of a performance motorcycle itself — nothing decorative, everything intentional.

| Design Element | Direction |
|---|---|
| Typography | Teko + Tektur |
| Primary Palette | Green · Charcoal · Silver |
| Visual Focus | Motorcycle |
| Layout | Product-focused composition |
| Interaction | Motion-driven |
| Design Tool | Figma |
| Overall Feel | Premium · Sporty · Cinematic |

Typography and spacing are used deliberately to keep the motorcycle as the dominant visual element — the UI supports the product, it never competes with it.

<br>

---

## 🧩 From Figma → Interactive UI

<div align="center">

**IDEA** → **FIGMA DESIGN** → **ASSET EXPORT** → **HTML / CSS** → **JAVASCRIPT INTERACTION** → **MOTION** → **FINAL EXPERIENCE**

</div>

The visual direction was fully designed in Figma before a single line of interaction code was written. The goal throughout translation was never to simply *reproduce* the design pixel-for-pixel — it was to **preserve its visual hierarchy** while giving it something Figma can't: motion and response.

<br>

---

## 🛠️ Technology

<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Figma-A259FF?style=for-the-badge&logo=figma&logoColor=white">

</div>

| Technology | Role |
|---|---|
| Figma | UI design, composition & visual direction |
| HTML | Page structure & product details |
| CSS | Styling, responsive layout & transitions |
| JavaScript | Interaction & animation sequencing |
| Web Animations API | Motorcycle movement |
| GitHub | Source-code management |
| OpenAI Codex | AI-assisted implementation |

**No framework · No build system · No API key · No external backend.**

It's intentionally lightweight — clone it, open `index.html`, and it runs. That's the whole setup.

<br>

---

## 📱 Responsive & Accessible

**Responsive**
- Mobile layout adjustments
- Flexible motorcycle positioning
- Adapted controls
- Responsive product panel

**Accessible**
- Keyboard-accessible color controls
- Visible focus states
- Clear selected-color indicators
- `Escape` key support
- Reduced-motion preference support

<br>

---

## 📂 Project Structure

```
BIKE-SHOWCASE/
│
├── index.html
├── style.css
├── app.js
│
├── ninja-banner.png
│
├── assets/
│   ├── Motorcycle images
│   ├── Reference screenshots
│   ├── Local font files
│   └── Font license notices
│
├── README.md
├── LICENSE
└── THIRD_PARTY_NOTICES.md
```

<br>

---

## 👩‍💻 My Role

### Original Design & Creative Direction — **AshmitaNotFound**

The interface and visual direction were created from scratch in Figma, with a focus on:

- Product presentation
- Typography
- Color hierarchy
- Layout composition
- Interaction concepts
- Motion direction

The website implementation was then developed from that design with AI-assisted coding support.

### AI Contribution

- The README banner was created using AI-generated artwork.
- OpenAI Codex was used to assist with the website implementation.

<br>

---

## 🏁 Project Scope

This is a **portfolio / learning prototype** — not an official Kawasaki website or online store.

**Prototype limitations:**
- Shop and utility icons are visual elements only.
- Social icons are visual elements only.
- Motorcycle movement is simulated with flat images.
- Prices and specifications reflect the supplied design and are not verified current sales information.
- The banner is illustrative AI-generated artwork, not an official product photograph.

<br>

---

## ⚠️ Third-Party Assets

Motorcycle imagery, Kawasaki/Ninja branding, reference screenshots, and included fonts may belong to their respective owners. No ownership of third-party assets is claimed.

- Teko and Tektur retain their respective SIL Open Font Licenses.
- Motorcycle images and branding remain subject to their respective rights.
- An unofficial-project disclaimer does not grant permission to redistribute third-party assets.
- Asset permissions should be confirmed before public redistribution.

See [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) for additional information.

<br>

---

## 📜 License

Copyright © 2026 AshmitaNotFound. All rights reserved.

No permission is granted to copy, modify, distribute, sell, or reuse the original project code, design, or documentation without prior written permission, except where permitted by applicable law or binding platform terms. This applies only to original contributions to the extent protected by applicable law.

See [`LICENSE`](LICENSE) for the complete notice.

<br>

---

<div align="center">

**DESIGN → INTERACTION → MOTION**

A learning project by **[AshmitaNotFound](https://github.com/AshmitaNotFound)**

<br>

<a href="https://ashmitanotfound.github.io/BIKE-SHOWCASE/">
  🌐 <strong>EXPLORE THE LIVE EXPERIENCE →</strong>
</a>

</div>
