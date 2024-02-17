import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Box bg="#e1eeeb" p={4} rounded="md">
      <header>
        <h1>Nishant Chaudhary</h1>
        <p>Web Developer</p>
      </header>
      <section className="contact-info">
        <p>Email: nishantdahit4@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/nishant-chaudhary-441299258</p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>C/C++</li>
          <li>PowerPoint</li>
          <li>Excel</li>
          <li>Word</li>
          {/* Add more skills */}
        </ul>
      </section>
      <section className="education">
        <h2>Education</h2>
        <p>
          Bachelor of Science in Computer Science and Information Technology
        </p>
        <p>Nagarjuna College of IT, Nepal</p>
        <p>Current Semester: Third Semester</p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <article className="project-item">
          <h3>Portfolio & Blog Website</h3>
          <p>
            My first solo project was to create a website that showcases both my
            portfolio and my blogs. I wanted a space where I could share
            information about my skills and projects while also expressing my
            thoughts through blogs. For this project, I used HTML, CSS, React, Chakra UI.
          </p>
          <p>
            <strong>Main Features:</strong>
            <ul>
              <li>
                Portfolio Section: Display details about my skills, projects,
                and education.
              </li>
              <li>
                Blog Section: Share my thoughts, experiences, and insights
                through blog posts.
              </li>
            </ul>
          </p>
          <p>
            <strong>Technologies Used:</strong> React.js, Chakra UI, Node.js
          </p>
          <p>
            <strong>What I Learned:</strong> This project helped me learn how to
            structure a website, manage content, and integrate different
            features seamlessly.
          </p>
          {/* <p>
            <strong>Repository:</strong> [Link to your project's code, if
            available]
          </p> */}
        </article>
      </section>
      <section className="blog">
        <h2>Blog</h2>
        <p>
          <strong>Blog:</strong>
          <Link to="/Blogs"> Read my blogs here.</Link>
        </p>
      </section>
      <section className="contact-info">
        <p>Email: nishantdahit4@gmail.com</p>
        <p>Phone: +977 9867085978</p>
        <p></p>
        <p>
          Facebook:{" "}
          <Link to="https://www.facebook.com/nishant.dahit.75">
            <FaFacebook />
          </Link>
        </p>
        <p>
          GitHub:{" "}
          <Link to="https://github.com/NiahantChaudhary">
            <FaGithub />
          </Link>
        </p>
      </section>
    </Box>
  );
};

export default Portfolio;
