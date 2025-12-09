import { useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    // Smooth scroll functionality
    const links = document.querySelectorAll("nav ul li a")
    
    const handleClick = (e) => {
      e.preventDefault()
      const targetId = e.currentTarget.getAttribute("href").substring(1)
      const targetSection = document.getElementById(targetId)
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth"
        })
      }
    }

    links.forEach(link => {
      link.addEventListener("click", handleClick)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", handleClick)
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>Hilda Posada | AI & Data Science</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <div className="container">
          <h1>Hilda Posada</h1>
          <p>A Research Scientist transitioning into AI & Data Science</p>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="about" className="container">
        <h2>About Me</h2>
        <p>Hello, I'm Hilda. A Research Scientist moving into AI and Data Science with skills in chemistry, data analysis, and machine learning.</p>
      </section>

      <section id="projects" className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/img/project1.jpg" alt="Project 1" />
            <h3>Image Classifier</h3>
            <p>Built a deep learning model for image classification using ResNet and VGG.</p>
            <a href="https://github.com/hildaposada/project1" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <img src="/img/project2.jpg" alt="Project 2" />
            <h3>News Categorization</h3>
            <p>Developed an NLP model for real-time news classification.</p>
            <a href="https://github.com/hildaposada/project2" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </section>

      <section id="skills" className="container">
        <h2>Skills & Tools</h2>
        <ul>
          <li>Python, SQL</li>
          <li>PyTorch, TensorFlow, Scikit-learn</li>
          <li>Matplotlib, Seaborn, Looker Studio</li>
          <li>Streamlit, Vercel</li>
        </ul>
      </section>

      <section id="contact" className="container">
        <h2>Contact Me</h2>
        <p>Let's connect on <a href="https://www.linkedin.com/in/hildaposada/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>

      <footer>
        <p>© 2025 Hilda Posada. Built with ❤️ and Next.js.</p>
      </footer>
    </>
  )
}
