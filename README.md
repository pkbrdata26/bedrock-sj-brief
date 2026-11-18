# bedrock-sj-brief
Cybersecurity Dinner, San Jose, Nov 18, 2026. Static site (no build). Copied from dhairya-bedrock/bedrock-sf-brief.

- Edit attendees in `data.js` (one object per person; plain JS, easy to patch).
- Fields: name, title, company, industry, employees (sheet band), li, ae, src (sourced by Bedrock), whoTheyAre[], aiInitiatives, worldRightNow, painPoints[], sources[[label,url]].
- Flags: `verify` shows an amber "Verify before use" banner, `thin: true` shows "Limited public info", `status` shows a chip. Delete these once checked.
- Preview: `python3 -m http.server 8765` then open http://localhost:8765/index.html
- No photos (initials only). Home page is sorted by company in app.js.
