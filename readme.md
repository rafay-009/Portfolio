# Abdul Rafay — Professional Portfolio

A minimal, responsive portfolio with a main page and eight dedicated project pages in white, black, and burgundy. Includes eight selected projects, technical skills, professional experience, contact links, and a print-friendly portfolio layout.

## Files

- `index.html` — portfolio structure and content sections.
- `styles.css` — responsive styling, mobile navigation, and print layout.
- `script.js` — category filters, expandable summaries, and contact configuration.
- `projects.js` — shared project content.
- `projects/*.html` — eight standalone project pages, readable without JavaScript.
- `scripts/build-project-pages.cjs` — regenerates project pages after content edits. Run `node scripts/build-project-pages.cjs`.

## Preview

Open `index.html` in a browser. No installation, external libraries, fonts, or build step is required. Keep the files and the `projects/` directory together. Every project card links to its full detail page.

## Structure

1. Introduction — Abdul Rafay, frontend development, backend engineering, and AI automation.
2. Selected work — all eight projects with Frontend and AI / Backend / Automation filters.
3. About and technical skills.
4. Experience — Next Bridge System (Product and Automation Engineer, full-time), Mavericks United, Fiverr, and selected website projects.
5. Contact — LinkedIn connection entry point.

## Projects

Frontend:
- Area Limo Service — https://arealimoservice.com
- Urban Elite — https://urbanelitelimo.com
- NextBridge Systems — https://nextbridgesystem.com
- Octal Sol — https://octalsol.com

AI, backend, and automation:
- AI-Powered Job Scraping & Recruitment Automation
- AI-Powered Lead Qualification & CRM Automation
- Backend API Integration & Data Synchronization
- University & Institutional Data Scraping

Each project includes a description and expandable context, approach, and portfolio highlight. Frontend projects include links to the supplied sites. Project identity artwork and workflow diagrams are illustrative, not screenshots of the original products.

## LinkedIn profile

All LinkedIn contact links point to https://www.linkedin.com/in/abdul-rafay-0814b5278/. The URL is configured in `script.js` and included directly in `index.html`.

## Save a PDF

Select **Save as PDF** in the footer, then choose your browser's PDF destination. The print layout includes all projects, regardless of the current filter, and expands every case study. Your on-screen state is restored after printing. A pre-generated PDF is not included.

## Content notes

Professional project details are based on the supplied descriptions. Frontend website summaries use public website content where available, without claiming unverified implementation technologies, results, or individual feature contributions. The updated Area Limo Service and Urban Elite Limo URLs are retained. Urban Elite content describes the transportation project rather than the previously linked co-living business.

The original README referred to additional organizations and education but did not supply roles, dates, qualifications, or supporting profile text. Those details are not invented in this portfolio.

## Validation

JavaScript syntax and dependency-free functional checks passed for all eight projects, filtering, filter accessibility states, case-study content, and section targets. Responsive and print styles are included. Browser screenshot verification could not be completed in the current environment; review the page in your browser before publication.

## Dedicated project pages

Each page includes an overview, website or technical approach, three-part project walkthrough, portfolio highlight, LinkedIn contact, and previous/next project navigation. Frontend pages also link to the live websites. The pages share `styles.css` and work when opened directly from disk or deployed to static hosting.

Validation covers every local page, asset reference, section anchor, unique page heading, and previous/next link. Browser visual verification remains unavailable in this environment.
