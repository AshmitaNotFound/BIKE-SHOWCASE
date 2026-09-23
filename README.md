# Ninja 500 — Interactive UI Concept

A beginner portfolio project based on an original Figma motorcycle showcase. Built with HTML, CSS, and JavaScript, with the original bike images and Teko/Tektur typography.

**Unofficial student UI concept. Not affiliated with or endorsed by Kawasaki.**

## Features

- Green, silver, and black motorcycle selection.
- Acceleration, motion blur, braking, and settling transitions.
- Animated Explore More panel with the selected bike and supplied specifications.
- Close the panel with its buttons or Escape.
- Responsive layout and reduced-motion support.
- Locally bundled images and fonts; no build step or API keys.

## Open locally

Open `index.html` in a browser. Keep the `assets` folder beside it.

## Upload to GitHub

1. Extract the ZIP on your computer.
2. Create a repository on GitHub, for example `ninja-bike-showcase`.
3. Choose **uploading an existing file**, or **Add file → Upload files**.
4. Drag the extracted files and `assets` folder into the upload area. Upload the contents, not the ZIP or an extra enclosing folder. `index.html` must be at the repository root.
5. Commit the files.

## Publish with GitHub Pages

After confirming you have the necessary rights to publish the included images:

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**, then **Save**.
4. Wait for GitHub to display your website link on the Pages settings screen.

No custom Actions workflow is required. GitHub handles deployment when the branch is updated.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files

```text
index.html           Page structure and details panel
style.css            Styling, responsive layout, and panel motion
app.js               Color selection and bike driving animation
assets/              Original images, local fonts, and font licenses
THIRD_PARTY_NOTICES.md Asset ownership and attribution notes
```

## Credits and scope

Original Figma concept and supplied assets: the project creator. Website implementation and animation: AI-assisted with OpenAI Codex.

The bike artwork is a flat image: the motion simulates driving with translation, tilt, and blur; wheels are not separately rigged or animated.

Shop, utility icons, and social icons are visual elements only. This is a design prototype, not an online store. Prices and features are copied from the supplied design and are not current sales information.

## License

The original website source code (`index.html`, `style.css`, and `app.js`) and project documentation are licensed under the (LICENSE). This permits reuse, modification, and redistribution of the code, including commercial use, subject to the license terms.

The MIT license does **not** cover motorcycle images, reference screenshots, Kawasaki/Ninja names or logos, or bundled fonts. Fonts retain their included SIL Open Font Licenses. Other third-party assets remain subject to their owners' rights; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

The image license/source has not been verified. A portfolio label or disclaimer does not grant permission to publish third-party imagery. Check the asset notices before making the repository public.
