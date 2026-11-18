let collegeData = null;

async function loadData() {
    try {
        const response = await fetch('data.json');
        collegeData = await response.json();
    } catch (error) {
        collegeData = {
            college: {
                name: "D. Y. Patil College of Engineering, Akurdi",
                subtitle: "Approved by AICTE & Affiliated to SPPU",
                about: "Established in 1984, DYPCOE offers quality technical education across undergraduate and postgraduate engineering disciplines.",
                highlights: [
                    "NAAC 'A' Grade Accredited",
                    "Over 40 Years of Excellence",
                    "Strong Placement Ties with Leading MNCs"
                ]
            },
            departments: [
                { id: "comp", name: "Computer Engineering", code: "COMP", hod: "Dr. Ajit Kadam", intake: 180, description: "Focuses on programming, algorithms, web technologies, and cloud computing.", labs: "High Performance Computing Lab, Cloud Lab" },
                { id: "it", name: "Information Technology", code: "IT", hod: "Mrs. Suvarna Nimal", intake: 120, description: "Focuses on networking, database systems, cybersecurity, and enterprise applications.", labs: "Network Security Lab, Database Lab" },
                { id: "aids", name: "Artificial Intelligence & Data Science", code: "AI&DS", hod: "Dr. Vinod Kapse", intake: 120, description: "Specializes in machine learning, deep learning, NLP, and big data analytics.", labs: "Deep Learning Studio, AI Innovation Hub" },
                { id: "mech", name: "Mechanical Engineering", code: "MECH", hod: "Dr. Prashant Pawar", intake: 120, description: "Focuses on machine design, CAD/CAM, robotics, and thermal engineering.", labs: "Robotics Lab, CAD/CAM Center" }
            ],
            courses: [
                { code: "CS-401", title: "Web Technology", dept: "Computer Engineering", semester: "Sem V", credits: 4, description: "Covers HTML5, CSS3, client-side routing, ES6 JavaScript, and JSON data integration." },
                { code: "CS-302", title: "Data Structures & Algorithms", dept: "Computer Engineering", semester: "Sem III", credits: 4, description: "Linear and non-linear data structures, trees, graphs, and sorting algorithms." },
                { code: "IT-303", title: "Database Management Systems", dept: "Information Technology", semester: "Sem V", credits: 4, description: "Relational database modeling, SQL queries, normalization, and transaction handling." },
                { code: "AI-301", title: "Machine Learning Foundations", dept: "Artificial Intelligence & Data Science", semester: "Sem V", credits: 4, description: "Supervised and unsupervised learning, regression, decision trees, and model evaluation." }
            ],
            faculty: [
                { id: "f1", name: "Dr. Ajit Kadam", dept: "Computer Engineering", designation: "Professor & HOD", qualification: "Ph.D. in Computer Engineering", experience: "16 Years", email: "ajit.kadam@dypcoeakurdi.ac.in", specialization: "Cloud & Distributed Systems" },
                { id: "f2", name: "Mrs. Suvarna Nimal", dept: "Information Technology", designation: "Associate Professor & HOD", qualification: "M.Tech in IT", experience: "12 Years", email: "suvarna.nimal@dypcoeakurdi.ac.in", specialization: "Network Security, Databases" },
                { id: "f3", name: "Dr. Vinod Kapse", dept: "Artificial Intelligence & Data Science", designation: "Professor & HOD", qualification: "Ph.D. in AI", experience: "14 Years", email: "vinod.kapse@dypcoeakurdi.ac.in", specialization: "Deep Learning, Computer Vision" }
            ],
            notices: [
                { id: "n1", title: "Unit V - CCE-5 Evaluation Schedule", category: "Academic", date: "18 Nov 2026", details: "Continuous evaluation for Web Technology 1 mini project is conducted in the lab." },
                { id: "n2", title: "SPPU End Semester Exam Form Submission", category: "Exam", date: "15 Nov 2026", details: "Fill out the online university exam form and submit the printout." },
                { id: "n3", title: "Campus Placement Drive", category: "Placement", date: "12 Nov 2026", details: "Registration is open for final year recruitment rounds." }
            ]
        };
    }
}

function router() {
    const hash = window.location.hash.slice(1) || 'home';
    const app = document.getElementById('app');

    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + hash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const navLinksContainer = document.getElementById('navLinks');
    if (navLinksContainer && navLinksContainer.classList.contains('open')) {
        navLinksContainer.classList.remove('open');
    }

    if (!collegeData) return;

    if (hash === 'home') {
        renderHome(app);
    } else if (hash === 'departments') {
        renderDepartments(app);
    } else if (hash === 'courses') {
        renderCourses(app);
    } else if (hash === 'faculty') {
        renderFaculty(app);
    } else if (hash === 'notices') {
        renderNotices(app);
    } else if (hash === 'enquiry') {
        renderEnquiry(app);
    } else {
        renderHome(app);
    }
}

function renderHome(container) {
    const info = collegeData.college;
    const highlightsHtml = info.highlights.map(h => `<li>${h}</li>`).join('');

    container.innerHTML = `
        <div class="home-banner">
            <h2>Welcome to ${info.name}</h2>
            <p>${info.about}</p>
            <ul class="highlights-list">
                ${highlightsHtml}
            </ul>
        </div>

        <h2 class="page-title">Quick Portal Highlights</h2>
        <div class="card-grid">
            <div class="card">
                <span class="card-tag">Academics</span>
                <h3>Departments</h3>
                <p>Offering undergraduate and postgraduate engineering programs with modern laboratories.</p>
                <a href="#departments">View Departments &rarr;</a>
            </div>
            <div class="card">
                <span class="card-tag">Curriculum</span>
                <h3>Courses</h3>
                <p>Curriculum structured as per Savitribai Phule Pune University credit grading system.</p>
                <a href="#courses">Explore Courses &rarr;</a>
            </div>
            <div class="card">
                <span class="card-tag">Faculty</span>
                <h3>Faculty Directory</h3>
                <p>Highly qualified and experienced professors guiding research and practical innovations.</p>
                <a href="#faculty">Meet Faculty &rarr;</a>
            </div>
            <div class="card">
                <span class="card-tag">Announcements</span>
                <h3>Notice Board</h3>
                <p>Stay updated with university examination circulars, events, and placement drives.</p>
                <a href="#notices">Read Notices &rarr;</a>
            </div>
        </div>
    `;
}

function renderDepartments(container) {
    const cards = collegeData.departments.map(d => `
        <div class="card">
            <span class="card-tag">${d.code}</span>
            <h3>${d.name}</h3>
            <p>${d.description}</p>
            <p><strong>HOD:</strong> ${d.hod}</p>
            <p><strong>Approved Intake:</strong> ${d.intake} seats</p>
            <p><strong>Key Labs:</strong> ${d.labs}</p>
        </div>
    `).join('');

    container.innerHTML = `
        <h2 class="page-title">Engineering Departments</h2>
        <p class="page-subtitle">Undergraduate and research departments at DYPCOE Akurdi</p>
        <div class="card-grid">
            ${cards}
        </div>
    `;
}

function renderCourses(container, selectedDept = 'All') {
    const depts = ['All', ...new Set(collegeData.courses.map(c => c.dept))];
    const optionsHtml = depts.map(d => `<option value="${d}" ${d === selectedDept ? 'selected' : ''}>${d}</option>`).join('');

    const filtered = selectedDept === 'All'
        ? collegeData.courses
        : collegeData.courses.filter(c => c.dept === selectedDept);

    const cards = filtered.map(c => `
        <div class="card">
            <span class="card-tag">${c.code} | ${c.semester}</span>
            <h3>${c.title}</h3>
            <p>${c.description}</p>
            <p><strong>Department:</strong> ${c.dept}</p>
            <p><strong>Credits:</strong> ${c.credits}</p>
        </div>
    `).join('');

    container.innerHTML = `
        <h2 class="page-title">Courses & Curriculum</h2>
        <p class="page-subtitle">Browse academic courses and syllabus offerings</p>
        <div class="filter-bar">
            <label for="deptFilter">Filter by Department:</label>
            <select id="deptFilter" onchange="filterCourses(this.value)">
                ${optionsHtml}
            </select>
        </div>
        <div class="card-grid">
            ${cards}
        </div>
    `;
}

function filterCourses(dept) {
    const app = document.getElementById('app');
    renderCourses(app, dept);
}

function renderFaculty(container) {
    const cards = collegeData.faculty.map(f => `
        <div class="card">
            <span class="card-tag">${f.dept}</span>
            <h3>${f.name}</h3>
            <p><strong>Designation:</strong> ${f.designation}</p>
            <p><strong>Experience:</strong> ${f.experience}</p>
            <button class="btn-toggle" onclick="toggleFaculty('${f.id}')">Show Details</button>
            <div id="${f.id}" class="faculty-toggle-box">
                <p><strong>Qualification:</strong> ${f.qualification}</p>
                <p><strong>Specialization:</strong> ${f.specialization}</p>
                <p><strong>Email:</strong> ${f.email}</p>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <h2 class="page-title">Faculty Directory</h2>
        <p class="page-subtitle">Experienced educators and mentors across departments</p>
        <div class="card-grid">
            ${cards}
        </div>
    `;
}

function toggleFaculty(id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.classList.contains('show')) {
        el.classList.remove('show');
    } else {
        el.classList.add('show');
    }
}

function renderNotices(container, selectedCategory = 'All') {
    const categories = ['All', 'Academic', 'Exam', 'Placement', 'Event'];
    const buttonsHtml = categories.map(cat => `
        <button onclick="filterNotices('${cat}')" style="background-color:${cat === selectedCategory ? '#0d3b66' : '#0077b6'}">
            ${cat}
        </button>
    `).join(' ');

    const filtered = selectedCategory === 'All'
        ? collegeData.notices
        : collegeData.notices.filter(n => n.category === selectedCategory);

    const items = filtered.map(n => `
        <div class="notice-item">
            <div class="notice-header">
                <span class="notice-category">${n.category}</span>
                <span>${n.date}</span>
            </div>
            <h3>${n.title}</h3>
            <p>${n.details}</p>
        </div>
    `).join('');

    container.innerHTML = `
        <h2 class="page-title">College Notice Board</h2>
        <p class="page-subtitle">Official notifications, examinations and student circulars</p>
        <div class="filter-bar">
            <label>Filter by Category:</label>
            ${buttonsHtml}
        </div>
        <div style="margin-top: 16px;">
            ${items.length > 0 ? items : '<p>No notices found in this category.</p>'}
        </div>
    `;
}

function filterNotices(category) {
    const app = document.getElementById('app');
    renderNotices(app, category);
}

function renderEnquiry(container) {
    const deptOptions = collegeData.departments.map(d => `<option value="${d.name}">${d.name}</option>`).join('');

    container.innerHTML = `
        <h2 class="page-title">Student Admissions Enquiry</h2>
        <p class="page-subtitle">Submit your course, admission or general query online</p>

        <div class="enquiry-layout">
            <div class="form-box">
                <div id="enquirySuccess"></div>
                <form id="enquiryForm" onsubmit="return validateEnquiry(event)">
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input type="text" id="name" placeholder="Enter student name">
                        <span id="nameErr" class="error-msg"></span>
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="text" id="email" placeholder="example@mail.com">
                        <span id="emailErr" class="error-msg"></span>
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number (10 Digits) *</label>
                        <input type="text" id="phone" placeholder="9876543210" maxlength="10">
                        <span id="phoneErr" class="error-msg"></span>
                    </div>

                    <div class="form-group">
                        <label for="dept">Department of Interest *</label>
                        <select id="dept">
                            <option value="">-- Select Department --</option>
                            ${deptOptions}
                        </select>
                        <span id="deptErr" class="error-msg"></span>
                    </div>

                    <div class="form-group">
                        <label for="message">Query / Message *</label>
                        <textarea id="message" rows="3" placeholder="Enter your query details..."></textarea>
                        <span id="messageErr" class="error-msg"></span>
                    </div>

                    <button type="submit" class="btn-submit">Submit Enquiry</button>
                </form>
            </div>

            <div class="saved-box">
                <div class="saved-header">
                    <h3>Saved Enquiries (LocalStorage)</h3>
                    <button class="btn-clear" onclick="clearEnquiries()">Clear All</button>
                </div>
                <div id="savedListContainer"></div>
            </div>
        </div>
    `;

    displaySavedEnquiries();
}

function validateEnquiry(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dept = document.getElementById('dept').value;
    const message = document.getElementById('message').value.trim();

    document.getElementById('nameErr').innerText = '';
    document.getElementById('emailErr').innerText = '';
    document.getElementById('phoneErr').innerText = '';
    document.getElementById('deptErr').innerText = '';
    document.getElementById('messageErr').innerText = '';

    let isValid = true;

    if (name === '') {
        document.getElementById('nameErr').innerText = 'Please enter your full name.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (email === '') {
        document.getElementById('emailErr').innerText = 'Please enter your email address.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailErr').innerText = 'Please enter a valid email format.';
        isValid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (phone === '') {
        document.getElementById('phoneErr').innerText = 'Please enter your phone number.';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phoneErr').innerText = 'Enter a valid 10-digit mobile number.';
        isValid = false;
    }

    if (dept === '') {
        document.getElementById('deptErr').innerText = 'Please select a department.';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageErr').innerText = 'Please enter your query message.';
        isValid = false;
    }

    if (isValid) {
        const enquiry = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone,
            dept: dept,
            message: message,
            date: new Date().toLocaleDateString()
        };

        const list = JSON.parse(localStorage.getItem('college_enquiries')) || [];
        list.unshift(enquiry);
        localStorage.setItem('college_enquiries', JSON.stringify(list));

        document.getElementById('enquirySuccess').innerHTML = `
            <div class="success-alert">
                <strong>Enquiry Submitted!</strong> Thank you ${name}, your query has been recorded.
            </div>
        `;

        document.getElementById('enquiryForm').reset();
        displaySavedEnquiries();
    }

    return false;
}

function displaySavedEnquiries() {
    const container = document.getElementById('savedListContainer');
    if (!container) return;

    const list = JSON.parse(localStorage.getItem('college_enquiries')) || [];

    if (list.length === 0) {
        container.innerHTML = '<p style="color:#64748b; font-size:13px;">No enquiries stored in LocalStorage yet.</p>';
        return;
    }

    const items = list.map((item, index) => `
        <div class="saved-item">
            <div>
                <strong>${item.name}</strong> (${item.dept})<br>
                <small>${item.email} | ${item.phone}</small><br>
                <span>${item.message}</span>
            </div>
            <button class="btn-del" onclick="deleteEnquiry(${index})" title="Delete">&times;</button>
        </div>
    `).join('');

    container.innerHTML = `<div class="saved-list">${items}</div>`;
}

function deleteEnquiry(index) {
    const list = JSON.parse(localStorage.getItem('college_enquiries')) || [];
    list.splice(index, 1);
    localStorage.setItem('college_enquiries', JSON.stringify(list));
    displaySavedEnquiries();
}

function clearEnquiries() {
    localStorage.removeItem('college_enquiries');
    displaySavedEnquiries();
}

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) {
        nav.classList.toggle('open');
    }
}

async function init() {
    await loadData();
    window.addEventListener('hashchange', router);
    router();
}

document.addEventListener('DOMContentLoaded', init);
