# Smart College Website Portal

Department of Artificial Intelligence and Data Science  
D. Y. Patil College of Engineering, Akurdi, Pune - 411044  
Subject: Web Technology 1 (AD124PE507.1) | Class: T.Y. (AI&DS)  
CCE-5: Unit V Mini Project Presentation & GitHub Submission (PR5)

---

## 1. Problem Identification (Evaluation Step 1 - 2 Marks)

### What the Portal is For
Traditional multi-page academic websites reload the entire HTML page on every navigation click. This causes slow response times, screen flickering, unnecessary data usage, and loss of user interface state. The Smart College Website Portal solves this by providing a lightweight Single Page Application (SPA) where the header, navigation, and footer remain persistent while views load dynamically inside the content area without any full page reload.

### Target Users
- Prospective students seeking department info, curriculum, and admissions enquiry.
- Enrolled college students checking departmental courses, notices, and exam schedules.
- Faculty members reviewing departmental details and course allocations.
- Academic evaluators assessing SPA concepts, routing, dynamic JSON fetching, and client-side validation.

### List of Pages and Features
1. Home: Overview of D. Y. Patil College of Engineering, key highlights, and portal shortcuts.
2. Departments: List of engineering departments (COMP, IT, AI&DS, MECH, CIVIL) with intake, HODs, and laboratories.
3. Courses: Engineering curriculum with interactive department filter dropdown.
4. Faculty: Faculty member cards with expandable details (show/hide qualification, specialization, email).
5. Notices: College announcements with category filter buttons (Academic, Exam, Placement, Event).
6. Student Enquiry: Interactive enquiry form with client-side regex validation and LocalStorage storage.

---

## 2. Web Application Design (Evaluation Step 2 - 2 Marks)

### Page Components (as per PR5 Specification)
- Header: Displays college name, university affiliation, and class information.
- Navigation: Persistent navigation bar with links (Home, Departments, Courses, Faculty, Notices, Student Enquiry) and mobile toggle menu.
- Content Area (`<main id="app">`): Dynamic container where views are rendered via JavaScript based on current route.
- Footer: Persistent footer with institution address, academic year, and course details.

### Responsive Layout
The portal is styled using clean CSS (Flexbox and CSS Grid) and is responsive across desktop, tablet, and mobile screens:
- Desktop: Full horizontal navigation bar and multi-column card grids.
- Mobile / Resized Window (<768px): The navigation collapses into a hamburger toggle button (`☰ Menu`), and cards arrange into a single responsive column.

---

## 3. Implementation using HTML / CSS / JS (Evaluation Step 3 - 2 Marks)

- Single Page Application (SPA): Navigation occurs dynamically without full page reloads.
- Client-Side Routing: Hash-based routing using `window.location.hash` and the `hashchange` event listener (`#home`, `#departments`, `#courses`, `#faculty`, `#notices`, `#enquiry`).
- Dynamic Data Loading: Asynchronous data fetching from `data.json` using JavaScript `fetch()` and `async/await`.
- Dynamic DOM Manipulation: Interactive department filtering for courses, category filtering for notices, and expandable faculty profile cards (`toggleFaculty()`).
- Client-Side Form Validation: Form fields are validated with regex before saving to `localStorage`:
  - Full Name: Non-empty validation.
  - Email: Regular expression validation (`/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`).
  - Phone Number: 10-digit mobile number validation (`/^[6-9]\d{9}$/`).
  - Department: Mandatory dropdown selection.
  - Message: Non-empty query description.
- LocalStorage Management: Enquiries are saved into `localStorage`, displayed in a list, and can be deleted individually or cleared.

---

## 4. Tech Stack and Repository Structure (Evaluation Step 4 - 2 Marks)

### Technologies Used
- HTML5 (Semantic Structure)
- CSS3 (Flexbox, CSS Grid, Responsive Design)
- JavaScript (ES6+, Fetch API, Hash Routing, DOM Manipulation, LocalStorage)
- JSON (Data Source)

### Repository File Structure
```text
WT_CCE5_RollNo_SmartCollegePortal/
├── index.html       # Single shell page (Header, Nav, Content Area, Footer)
├── style.css        # Clean responsive styling across all devices
├── app.js           # Core SPA engine (Routing, Fetch, Rendering, Validation)
├── data.json        # Structured JSON data (Departments, Courses, Faculty, Notices)
├── screenshots/     # Project UI screenshots
│   ├── home.png
│   ├── departments.png
│   ├── courses.png
│   ├── faculty.png
│   ├── notices.png
│   └── enquiry.png
└── README.md        # Comprehensive documentation for evaluation
```

---

## 5. How to Run Locally with VS Code Live Server

1. Install Visual Studio Code and the Live Server extension.
2. Open the project folder in VS Code (`File > Open Folder...`).
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The project will open in your browser at `http://127.0.0.1:5500/index.html`.
5. Click on the navigation links to verify that views change without a full page reload. Resize the browser window to verify responsive design.

---

## 6. Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Departments Page
![Departments Page](screenshots/departments.png)

### Courses Page (with Department Filter)
![Courses Page](screenshots/courses.png)

### Faculty Page (with Toggle Details)
![Faculty Page](screenshots/faculty.png)

### Notices Board (with Category Filter)
![Notices Board](screenshots/notices.png)

### Student Enquiry Form (Validation & LocalStorage)
![Student Enquiry](screenshots/enquiry.png)

---

## 7. Presentation & Viva Preparation (Evaluation Step 5 - 2 Marks)

### Project Question: Explain how SPA navigation works without page reload
In traditional websites, clicking `<a href="page.html">` makes the browser request a new page from the server, causing a reload. In this SPA, navigation links use anchor hashes like `<a href="#courses">`. When clicked, the browser updates `window.location.hash`. Our JavaScript listens to the `hashchange` event with:
```javascript
window.addEventListener('hashchange', router);
```
The `router()` function reads `window.location.hash`, extracts the route name (`courses`), and updates the innerHTML of `<main id="app">` using `renderCourses()`. Because only the content container changes in the DOM, the page never reloads.

### Unit V Theory Question: What is the Fetch API and how is it used with async/await?
The Fetch API is a modern native JavaScript interface for making asynchronous HTTP requests to load resources over the network. In our project:
```javascript
async function loadData() {
    const response = await fetch('data.json');
    collegeData = await response.json();
}
```
`fetch('data.json')` returns a Promise that resolves to the Response object. The `await` keyword pauses execution until the promise resolves, and `response.json()` parses the JSON text into a usable JavaScript object stored in `collegeData`.
