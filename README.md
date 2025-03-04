Job Listing App

This is a simple Job Listing App built with React, TypeScript, and CSS. The app displays a list of jobs and ensures a responsive layout for different screen sizes.

📌 Features

Display job listings dynamically

Responsive grid layout for job cards

Hover effects for better user experience

Styled using index.css (global styles) and JobList.css (component-specific styles)

🚀 Installation & Setup

Clone the repository:

git clone https://github.com/steno1/typescriptReact.git

Navigate into the project folder:

cd typescriptReact

Install dependencies:

npm install

Run the development server:

npm run dev

📁 Project Structure

/typescriptReact
│── src/
│   ├── components/
│   │   ├── JobCard.tsx
│   │   ├── JobList.tsx
│   ├── data/
│   │   ├── jobs.ts
│   ├── styles/
│   │   ├── index.css  (Global styles)
│   │   ├── JobList.css  (Job listing styles)
│   ├── App.tsx
│   ├── main.tsx
│── public/
│── package.json
│── vite.config.ts
│── README.md

🖼 Styling

index.css: Defines global styles like font, background color, and page structure.

JobList.css: Handles job list-specific styles, including grid layout and responsiveness.

📌 Responsive Design

Uses CSS Grid for job listings.

Includes media queries for mobile responsiveness:


📜 License

This project is open-source and free to use.