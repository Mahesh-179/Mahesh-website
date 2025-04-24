<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mahesh Portfolio</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      background-color: #120a8f; /* Deep Royal Blue */
      color: white;
    }
    nav {
      position: sticky;
      top: 0;
      background-color: #0e086b;
      display: flex;
      justify-content: center;
      padding: 1rem;
      z-index: 1000;
    }
    nav ul {
      list-style: none;
      display: flex;
      gap: 1.5rem;
    }
    nav li {
      cursor: pointer;
    }
    nav li:hover {
      color: #00c3ff;
    }
    section {
      padding: 60px 20px;
      text-align: center;
    }
    h1, h2 {
      margin-bottom: 20px;
    }
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      padding-top: 20px;
    }
    .project-card {
      background-color: #1a0dab;
      padding: 1rem;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }
    .project-card:hover {
      transform: scale(1.05);
    }
    a {
      color: #00e5ff;
      text-decoration: none;
    }
    form input, form textarea, form button {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      border-radius: 5px;
      border: none;
    }
    form button {
      background-color: #00e5ff;
      color: black;
      font-weight: bold;
      cursor: pointer;
    }
    form button:hover {
      background-color: #00bcd4;
    }
    @media (max-width: 600px) {
      nav ul {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li onclick="scrollToSection('home')">Home</li>
      <li onclick="scrollToSection('about')">About</li>
      <li onclick="scrollToSection('projects')">Projects</li>
      <li onclick="scrollToSection('contact')">Contact</li>
    </ul>
  </nav>

  <section id="home">
    <h1>Welcome to My Portfolio</h1>
    <p>Hi, I'm Mahesh — an aspiring backend developer.</p>
  </section>

  <section id="about">
    <h2>About Me</h2>
    <p>I’m currently learning Python and Django. I'm passionate about building web applications and improving my coding skills every day.</p>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div class="projects">
      <div class="project-card">
        <h3>ATM Banking System</h3>
        <p>Basic banking app with transaction features in Python.</p>
        <a href="https://github.com/Mahesh-179/simple-atm-banking-system-python" target="_blank">View on GitHub</a>
      </div>
      <div class="project-card">
        <h3>Cafe Management System</h3>
        <p>System to manage cafe orders and billing with QR code.</p>
        <a href="https://github.com/Mahesh-179/Cafe-Management-System" target="_blank">View on GitHub</a>
      </div>
    </div>
  </section>

  <section id="contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <script>
    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
  </script>
</body>
</html>
