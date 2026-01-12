# Learning Analytics Dashboard

A responsive Learning Analytics Dashboard built with React (JSX) and Recharts. The dashboard visualizes learner enrollment, assessment completion, performance metrics, and district-wise statistics. It includes light and dark themes and is designed to be easy to extend with additional data and visualizations.

Features
- Interactive charts and visualizations (Recharts) for learner performance, enrollment, and assessments
- District-wise ranking and comparison views
- Light and Dark theme support
- Responsive layout for desktop and tablet screens
- Simple data-driven design using JSON files in `public/data/`

Tech stack
- React (JSX)
- Recharts
- Vite / Create React App (project scaffold - follow repo configuration)
- HTML, CSS (index.css)

Repository structure

src/
├── components/      # React components used across the dashboard
├── api/             # Data fetching and data helpers
├── theme/           # Theme definitions (light/dark)
├── App.jsx          # Main app component and routes
├── main.jsx         # App bootstrap
└── index.css        # Global styles

public/
└── data/            # JSON or sample CSV data used by charts

Quick start

Prerequisites
- Node.js (>=14) and npm or yarn

Install and run locally
1. Clone the repository

   git clone https://github.com/Ranjithkumar-270604/Dashboard.git
   cd Dashboard

2. Install dependencies

   npm install

3. Start the dev server

   npm run dev

4. Open the app in your browser (usually at `http://localhost:5173` or the port Vite/CRA reports)

Build for production

   npm run build

Modify or add data
- Replace or add JSON files in `public/data/` to change the datasets the charts use.
- If you add fields, update the corresponding components or data adapters in `src/api/`.

Styling and theme
- Theme variables are stored in `src/theme/`. Toggle light/dark mode by updating the theme provider or adding a control in the UI.

Contributing
- Feel free to open issues or submit pull requests with improvements, bug fixes, or new visualizations.
- Follow standard GitHub flow: branch from `main`, open a descriptive PR`, and reference any related issues.

License
- Add a LICENSE file to the repository. If you want a permissive license, consider MIT.

Contact
- For questions or help, open an issue in this repository.

Notes
- This README provides a concise overview. If you want, I can expand sections (examples, screenshots, code snippets, API details) or create a CONTRIBUTING.md and a LICENSE file.
