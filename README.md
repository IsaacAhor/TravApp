# TravApp

A travel planning platform for trips to Ghana and Nigeria, featuring AI-powered itineraries, local partner directory, and curated guides.

---

## Touchdown (Curated Guides)

### `/pricing` (Touchdown)
- Hero section with:
  - Title: **Touchdown**
  - Subheading: *Your Trip Guide to Ghana & Nigeria*
  - Intro paragraph about curated guides, tips, events, and culture.
- 3 clickable content cards linking to articles:
  - 🎉 **Detty December: Top 5 Banging Events in Accra**
  - 💰 **How to Budget a Trip from the US to Ghana**
  - 🌍 **Ghana vs. Nigeria: Which Should You Visit First?**
- Each card routes to a placeholder "Coming Soon" page with a back button.
- CTA button: **Estimate My Trip** linking to `/tripestimate`.
- Fully responsive and styled consistently.

---

## Homepage

- Hero section introducing TravApp.
- **Join Waitlist** form:
  - Integrated with Netlify Forms (`data-netlify="true"`, `form-name="travapp-waitlist"`).
  - Submits without redirecting.
  - Displays inline success message: *"🎉 You're on the waitlist! We’ll keep you posted."*
  - Success message auto-dismisses after 3 seconds.
- Trip Estimator preview with origin, destination, travelers, and CTA.
- Features overview and FAQs.

---

## Partner Features

### `/partners/join`
- Hero section inviting local providers to partner.
- Benefits section.
- "Apply to Partner" form with:
  - Business Name
  - Category
  - Description
  - Location
  - Price Range
  - Contact Email
- Client-side validation.
- Integrated with Netlify Forms.
- Success message on submission.
- Footer note about manual review.

### Navigation & Homepage
- "Partner With Us" link in navbar.
- CTA on homepage linking to `/partners/join`.

### `/partners/directory`
- Title and subtitle introducing partners.
- "Become a Partner" button.
- Filter controls: Category, Location, Price Range.
- Responsive grid of partner cards.
- Partner details modal with deep linking support.

---

## Development

- Built with **Next.js** and **React**.
- Styled using **Tailwind CSS**.
- Forms integrated with **Netlify Forms**.
- Placeholder content for upcoming articles.
- Mobile responsive design.

---

## Setup

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## License

MIT
