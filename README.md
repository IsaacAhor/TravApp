# TravApp Project

## Key Features Implemented

- **Flight Price Estimator**: Calculates estimated flight cost based on origin region, destination, month, and class, including a $100 pickup fee.
- **Trip Summary**: Dynamically updates subtotal and monthly payment based on flight cost, add-ons, and number of travelers.
- **Add-on Experiences**: Selectable add-ons with descriptions and prices, updating the total cost live.
- **Payment Plan**: Choose 6, 9, or 12-month plans, with monthly payment calculated dynamically.
- **Lock My Plan**: Saves the trip plan to localStorage and shows a confirmation screen.
- **Waitlist**: After locking, user can join the waitlist with a form (or button).
- **Persistent Trip Plan**: Loads saved trip plan from localStorage on return, with option to start over.
- **How It Works Page**: 4-step process with clear visuals, including booking, customizing, choosing payment, and traveling.
- **Navigation**: Navbar links to all key pages, including the estimator.
- **Styling**: Responsive, dark theme, consistent UI components.

## Notes

- Pickup fee is included in flight estimate, not shown separately.
- All data is static and local, no backend or API.
- Subtotal formula: (Flight + Add-ons) × Travelers.
- Flight cost is passed from estimator to summary via lifted state.
- Add-ons total is passed from selector to summary via lifted state.
- Trip plan saved in localStorage on lock, cleared on start over.
- The app is designed to be extended with backend integration in the future.
