<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio of Muhammad Taha hussain — About, skills, projects, and contact." />
  <title>Muhammad Taha Hussain — Portfolio</title>
  <style>
    :root{
      --bg:#0b1020;
      --card:#121a33;
      --text:#eaf0ff;
      --muted:#b7c2e6;
      --accent:#7c5cff;
      --accent2:#2ee9a6;
      --border:rgba(255,255,255,.10);
      --shadow: 0 18px 50px rgba(0,0,0,.35);
      --radius: 18px;
      --max: 1080px;
    }

    *{ box-sizing:border-box; }
    html{ scroll-behavior:smooth; }
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
      color:var(--text);
      background:
        radial-gradient(1200px 600px at 15% 10%, rgba(124,92,255,.35), transparent 55%),
        radial-gradient(900px 500px at 85% 10%, rgba(46,233,166,.25), transparent 55%),
        radial-gradient(900px 600px at 50% 90%, rgba(124,92,255,.18), transparent 60%),
        var(--bg);
      line-height:1.55;
    }

    a{ color:inherit; text-decoration:none; }
    a:hover{ text-decoration:underline; }

    .container{ max-width: var(--max); margin: 0 auto; padding: 24px; }

    /* NAV */
    .nav{
      position: sticky;
      top:0;
      z-index:20;
      backdrop-filter: blur(10px);
      background: rgba(11,16,32,.55);
      border-bottom: 1px solid var(--border);
    }
    .nav-inner{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
      padding: 14px 24px;
      max-width: var(--max);
      margin:0 auto;
    }
    .brand{
      display:flex;
      align-items:center;
      gap:10px;
      font-weight:800;
      letter-spacing:.2px;
    }
    .logo{
      width:34px;
      height:34px;
      border-radius:12px;
      background:
        linear-gradient(135deg, rgba(124,92,255,1), rgba(46,233,166,1));
      box-shadow: 0 10px 30px rgba(124,92,255,.25);
    }
    .nav-links{ display:flex; gap:14px; flex-wrap:wrap; }
    .pill{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:10px 12px;
      border:1px solid var(--border);
      border-radius:999px;
      background: rgba(255,255,255,.04);
      transition: transform .12s ease, background .12s ease;
      font-size:14px;
      color: var(--muted);
    }
    .pill:hover{ transform: translateY(-1px); background: rgba(255,255,255,.07); text-decoration:none; }

    /* HERO */
    .hero{ padding: 56px 0 18px; }
    .grid{
      display:grid;
      grid-template-columns: 1.25fr .75fr;
      gap: 22px;
      align-items: stretch;
    }
    @media (max-width: 900px){
      .grid{ grid-template-columns: 1fr; }
    }

    .card{
      background: rgba(18,26,51,.78);
      border:1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }

    .hero-card{ padding: 26px; overflow:hidden; position:relative; }
    .kicker{
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding: 8px 12px;
      border-radius:999px;
      border:1px solid var(--border);
      background: rgba(255,255,255,.04);
      color: var(--muted);
      font-size: 13px;
    }
    .dot{
      width:10px; height:10px; border-radius:99px;
      background: var(--accent2);
      box-shadow: 0 0 0 5px rgba(46,233,166,.18);
    }

    h1{ margin: 16px 0 10px; font-size: 44px; line-height: 1.05; }
    @media (max-width: 520px){ h1{ font-size: 36px; } }

    .sub{
      color: var(--muted);
      font-size: 16px;
      max-width: 65ch;
      margin: 0 0 18px;
    }

    .btn-row{ display:flex; gap:12px; flex-wrap:wrap; margin-top: 14px; }
    .btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:10px;
      padding: 12px 14px;
      border-radius: 14px;
      border:1px solid var(--border);
      background: rgba(255,255,255,.05);
      color: var(--text);
      font-weight: 650;
      transition: transform .12s ease, background .12s ease;
    }
    .btn:hover{ transform: translateY(-1px); background: rgba(255,255,255,.08); text-decoration:none; }
    .btn.primary{
      background: linear-gradient(135deg, rgba(124,92,255,1), rgba(46,233,166,.9));
      border-color: rgba(255,255,255,.14);
      color:#071021;
      box-shadow: 0 14px 40px rgba(124,92,255,.25);
    }

    .hero-card::after{
      content:"";
      position:absolute;
      right:-120px;
      top:-120px;
      width:280px;
      height:280px;
      background: radial-gradient(circle at 30% 30%, rgba(46,233,166,.35), transparent 60%);
      filter: blur(2px);
    }

    /* SIDEBAR CARD */
    .side{ padding: 22px; }
    .avatar{
      width: 72px;
      height: 72px;
      border-radius: 22px;
      border: 1px solid var(--border);
      background: linear-gradient(135deg, rgba(255,255,255,.12), rgba(255,255,255,.02));
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:800;
      font-size: 22px;
      color: var(--muted);
      margin-bottom: 14px;
    }
    .meta{
      display:grid;
      gap:10px;
      margin-top: 12px;
    }
    .meta .row{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      padding: 10px 12px;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,.03);
      color: var(--muted);
      font-size: 14px;
    }
    .meta .row strong{ color: var(--text); font-weight: 650; }

    /* SECTION */
    section{ padding: 26px 0; }
    .section-title{
      display:flex;
      align-items:flex-end;
      justify-content:space-between;
      gap:14px;
      margin: 0 0 14px;
    }
    h2{ margin:0; font-size: 22px; }
    .hint{ color: var(--muted); font-size: 14px; }

    .cards{
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    @media (max-width: 980px){ .cards{ grid-template-columns: 1fr 1fr; } }
    @media (max-width: 620px){ .cards{ grid-template-columns: 1fr; } }

    .mini{
      padding: 16px;
      border-radius: var(--radius);
      border:1px solid var(--border);
      background: rgba(18,26,51,.68);
      box-shadow: 0 10px 26px rgba(0,0,0,.22);
    }
    .mini h3{ margin: 0 0 6px; font-size: 16px; }
    .mini p{ margin:0; color: var(--muted); font-size: 14px; }

    /* SKILLS */
    .skill-list{ display:flex; flex-wrap:wrap; gap:10px; }
    .tag{
      padding: 10px 12px;
      border-radius: 999px;
      border:1px solid var(--border);
      background: rgba(255,255,255,.03);
      color: var(--muted);
      font-size: 14px;
    }

    /* PROJECTS */
    .project{
      display:flex;
      flex-direction:column;
      gap:10px;
    }
    .project .top{
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:12px;
    }
    .badge{
      padding:6px 10px;
      border-radius: 999px;
      font-size: 12px;
      color:#071021;
      background: rgba(46,233,166,.9);
      font-weight: 800;
      white-space:nowrap;
    }
    .project ul{ margin:0; padding-left: 18px; color: var(--muted); font-size: 14px; }

    /* CONTACT */
    form{ display:grid; gap:12px; }
    input, textarea{
      width:100%;
      padding: 12px 12px;
      border-radius: 14px;
      border:1px solid var(--border);
      background: rgba(255,255,255,.03);
      color: var(--text);
      font-size: 14px;
      outline: none;
    }
    textarea{ min-height: 120px; resize: vertical; }
    .small{ color: var(--muted); font-size: 13px; }

    footer{ padding: 22px 0 44px; color: var(--muted); font-size: 13px; }
    .divider{ height:1px; background: var(--border); margin: 18px 0; }

    /* ACCESSIBILITY */
    .sr-only{
      position:absolute;
      width:1px;
      height:1px;
      padding:0;
      margin:-1px;
      overflow:hidden;
      clip:rect(0,0,0,0);
      white-space:nowrap;
      border:0;
    }
  </style>
</head>
<body>
  <!-- NAV -->
  <header class="nav" aria-label="Site navigation">
    <div class="nav-inner">
      <a class="brand" href="#top" aria-label="Go to top">
        <span class="logo" aria-hidden="true"></span>
        <span>Muhammad Taha Hussain</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a class="pill" href="#about">About</a>
        <a class="pill" href="#skills">Skills</a>
        <a class="pill" href="#projects">Projects</a>
        <a class="pill" href="#experience">Experience</a>
        <a class="pill" href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="top" class="container">
    <!-- HERO -->
    <div class="hero">
      <div class="grid">
        <div class="card hero-card">
          <div class="kicker"><span class="dot" aria-hidden="true"></span> Open to opportunities • Available for freelance</div>
          <h1>Hi, I’m <span style="color: var(--accent2)">Muhammad Taha Hussain</span>.
            <br />I build clean, modern digital experiences.</h1>
          <p class="sub">
            I’m a <strong>Student</strong> who loves turning ideas into real products.
            I focus on <strong>web development</strong>, <strong>UI design</strong>, and <strong>problem solving</strong>.
          </p>
          <div class="btn-row">
            <a class="btn primary" href="#projects">View Projects</a>
            <a class="btn" href="#contact">Contact Me</a>
            <a class="btn" href="./resume.pdf" title="Add your resume file in the same folder">Download Resume</a>
          </div>
          
        </div>

        <aside class="card side" aria-label="Profile summary">
          <div> <img src="images/Taha.jpeg" alt="A beautiful view"></div>
          <div>
            <h2 style="margin:0 0 6px;">Profile</h2>
            <p class="small" style="margin:0;">
          Frontend developer who builds fast, accessible websites
            </p>
          </div>
          <div class="meta" aria-label="Quick facts">
            <div class="row"><span>Location</span><strong>Riga Latvia</strong></div>
            <div class="row"><span>Role</span><strong>Web Developer</strong></div>
            <div class="row"><span>Email</span><strong>Rgrace01691@gmail.com</strong></div>
            <div class="row"><span>GitHub</span><strong>@yourhandle</strong></div>
          </div>
        </aside>
      </div>
    </div>

    <!-- ABOUT -->
    <section id="about">
      <div class="section-title">
        <h2>About Me</h2>
        <div class="hint"></div>
      </div>
      <div class="card" style="padding:18px;">
        <p style="margin:0; color:var(--muted);">
         I am an Information Systems student with a growing specialization in web design. I am focused on developing modern, responsive, and user-centered websites by combining technical knowledge with design principles. I am continuously expanding my skills in web technologies and best practices to build effective and reliable digital solutions.
          <br /><br />
        </p>
      </div>

      <div style="height:14px"></div>

      <div class="cards" aria-label="Highlights">
        <div class="mini">
          <h3>What I’m doing</h3>
          <p>Studying at <strong> Isma</strong></p>
        </div>
        <div class="mini">
          <h3>What I’m good at</h3>
          <p>Building UI, solving problems, teamwork, communication</p>
        </div>
        <div class="mini">
          <h3>What I’m learning</h3>
          <p>React, Node.js, DSA, UI/UX, Cloud ,API , Paython</p>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills">
      <div class="section-title">
        <h2>Skills</h2>
        <div class="hint">Tools & technologies</div>
      </div>
      <div class="card" style="padding:18px;">
        <div class="skill-list" aria-label="Skill tags">
          <span class="tag">HTML</span>
          <span class="tag">CSS</span>
          <span class="tag">JavaScript</span>
          <span class="tag">React</span>
          <span class="tag">Node.js</span>
          <span class="tag">Git & GitHub</span>
          <span class="tag">Responsive Design</span>
          <span class="tag">Figma</span>
          <span class="tag">Problem Solving</span>
        </div>
        <p class="small" style="margin:14px 0 0;"></p>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects">
      <div class="section-title">
        <h2>Projects</h2>
        <div class="hint">Your best work (2–4 projects is perfect)</div>
      </div>

      <div class="cards">
        <article class="mini project">
          <div class="top">
            <div>
              <h3>Project One</h3>
              <p>Short description: what it is and why it matters.</p>
            </div>
            <span class="badge">Featured</span>
          </div>
          <ul>
            <li>Built with: HTML, CSS, JavaScript</li>
            <li>String, Array & Function Operations</li>
            <li>Basic Fuction using Javescript</li>
          </ul>
          <div class="btn-row">
           <a class="btn" href="project-one.html" target="_blank">Live Demo</a>
            <a class="btn" href="project-two.html" target="_blank">Source Code</a
          </div>
        </article>

        <article class="mini project">
          <div class="top">
            <div>
              <h3>Project Two</h3>
              <p>Short description: a problem you solved.</p>
            </div>
            <span class="badge" style="background: rgba(124,92,255,.95); color:#071021;">App</span>
          </div>
          <ul>
            <li>Built with: React / API / Firebase (edit)</li>
            <li>Key feature: search, filters, CRUD (edit)</li>
            <li>Result: users can do X faster (edit)</li>
          </ul>
          <div class="btn-row">
            <a class="btn" href="project-three.html" target="_blank">Live Demo</a>
            <a class="btn" href="project-three.html" target="_blank">Source Code</a>
          </div>
        </article>

        <article class="mini project">
          <div class="top">
            <div>
              <h3>Project Three</h3>
              <p>Short description: something creative or fun.</p>
            </div>
            <span class="badge" style="background: rgba(255,255,255,.85); color:#071021;">Web</span>
          </div>
          <ul>
            <li>Built with: (edit)</li>
            <li>Key feature: (edit)</li>
            <li>Result: (edit)</li>
          </ul>
          <div class="btn-row">
            <a class="btn" href="#">Live Demo</a>
            <a class="btn" href="#">Source Code</a>
          </div>
        </article>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience">
      <div class="section-title">
        <h2>Experience & Education</h2>
        <div class="hint">Timeline-style highlights</div>
      </div>

      <div class="cards">
        <div class="mini">
          <h3>Education</h3>
          <p><strong>BS Information sYstem</strong> — ISMA</p>
          <p class="small">2025 - 2029</p>
        </div>
        <div class="mini">
          <h3>Student</h3>
          <p><strong></strong>Looking for opportunities</p>
          <p class="small">I am an Information Systems student learning web design, with a focus on creating user-friendly and visually appealing websites..</p>
        </div>
        <div class="mini">
          <h3>Certifications</h3>
          <p>Postman APi</p>
          <p class="small"></p>
          <div class="row"><span>Certification link</span><strong><a href="https://badges.parchment.com/public/assertions/lSZaPzYKRXCDnqA3ZqlVaw?identity__email=taha.butt842%40gmail.com"> https://badges.parchment.com/public/assertions/lSZaPzYKRXCDnqA3ZqlVaw?identity__email=taha.butt842%40gmail.com"</a></strong></div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact">
      <div class="section-title">
        <h2>Contact</h2>
        <div class="hint">Let people reach you easily</div>
      </div>

      <div class="grid" style="grid-template-columns: 1fr 1fr;">
        <div class="card" style="padding:18px;">
          <h3 style="margin-top:0">Send a message</h3>
          <p class="small" style="margin-top:0"></p>
          <form id="contactForm">
            <label class="sr-only" for="name">Name</label>
            <input id="name" name="name" placeholder="Your Name" required />

            <label class="sr-only" for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Your email" required />

            <label class="sr-only" for="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message..." required></textarea>

            <button class="btn primary" type="submit">Send</button>
            <p class="small" id="formHint" style="margin:0"></p>
          </form>
        </div>

        <div class="card" style="padding:18px;">
          <h3 style="margin-top:0">Links</h3>
          <p class="small">Add your real links here.</p>
          <div class="meta">
            <div class="row"><span>LinkedIn</span><strong><a href="https://www.linkedin.com/in/taha-hussain-75130223a">https://www.linkedin.com/in/taha-hussain-75130223a/</a></strong></div>
            <div class="row"><span>GitHub</span><strong><a href="#">github.com/yourhandle</a></strong></div>
            <div class="row"><span>Portfolio Email</span><strong><a href="Rgrace01691@gmail.com">Rgrace01691@gmail.com</a></strong></div>
          </div>
          <div class="divider"></div>
          <p class="small">
            Tip: If you want a real working form with messages saved, you can connect this to Formspree, Netlify Forms,
            or a simple backend (Node/Express).
          </p>
        </div>
      </div>
    </section>

    <footer>
      <div class="divider"></div>
      <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap;">
        <span>© <span id="year"></span> Muhammad Taha Hussain. All rights reserved.</span>
        <a class="pill" href="#top" style="font-size:13px;">Back to top ↑</a>
      </div>
    </footer>
  </main>

  <script>
    // Update year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Contact form: opens user's email client (no backend)
    const form = document.getElementById('contactForm');
    const hint = document.getElementById('formHint');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Change this to your real email address:
      const to = 'you@email.com';

      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

      hint.textContent = 'Opening your email app…';
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      // optional: clear
      form.reset();
      setTimeout(() => (hint.textContent = ''), 2500);
    });
  </script>
</body>
</html>
