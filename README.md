## Partner Features

### `/partners/join`
- Hero section with heading and subheading inviting local providers to partner.
- Benefits section highlighting advantages (Reach More Travelers, Grow Your Business, No Upfront Cost).
- "Apply to Partner" form with fields:
  - Business Name
  - Category
  - Description
  - Location
  - Price Range
  - Contact Email
- Client-side validation for required fields and email format.
- Integrated with Netlify Forms for submission handling.
- Displays a success message upon submission.
- Footer note: "Submissions are reviewed manually. Only vetted local providers will be listed."

### Navigation & Homepage
- "Partner With Us" link added to the top navigation bar, routing to `/partners/join`.
- Call-to-action section on the homepage with a button linking to `/partners/join`.

### `/partners/directory`
- Title: "Explore Local Experiences & Services"
- Subtitle: "Discover our trusted partners — handpicked providers ready to make your trip unforgettable."
- Prominent "Become a Partner" button linking to `/partners/join`.
- Filter controls:
  - Category (dropdown)
  - Location (dropdown)
  - Price Range (dropdown)
- Responsive grid layout displaying mock partner cards with:
  - Business Name
  - Category
  - Short Description
  - Location
  - Price Range
  - "View Details" button
- Partner details modal:
  - Displays full partner info including contact email.
  - "Copy Profile Link" button copies URL with `?partner=slug` to clipboard.
  - "Close" button to dismiss modal.
- Deep linking support:
  - If URL contains `?partner=slug`, the corresponding partner modal opens automatically on page load.
