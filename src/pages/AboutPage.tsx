export default function AboutPage() {
  return (
    <div className="page-content">
      <section className="content-section">
        <h1 className="page-title">About ThemeApp</h1>
        <div className="content-body">
          <p className="content-paragraph">
            ThemeApp is a demonstration of advanced React theming capabilities. Built with modern web technologies, it
            showcases how different themes can completely transform the user experience.
          </p>

          <h2 className="content-subtitle">Our Themes</h2>
          <div className="theme-descriptions">
            <div className="theme-description">
              <h3 className="theme-name">Minimalist Theme</h3>
              <p className="theme-details">
                Clean, simple design with plenty of white space and subtle typography. Perfect for users who prefer a
                distraction-free interface.
              </p>
            </div>

            <div className="theme-description">
              <h3 className="theme-name">Dark Sidebar Theme</h3>
              <p className="theme-details">
                Professional dark mode with a convenient sidebar navigation. Ideal for extended use and reduced eye
                strain.
              </p>
            </div>

            <div className="theme-description">
              <h3 className="theme-name">Colorful Cards Theme</h3>
              <p className="theme-details">
                Vibrant and playful design with card-based layouts and fun typography. Great for creative and engaging
                user experiences.
              </p>
            </div>
          </div>

          <h2 className="content-subtitle">Technology Stack</h2>
          <ul className="tech-list">
            <li>React 18 with TypeScript</li>
            <li>React Router for navigation</li>
            <li>Context API for state management</li>
            <li>CSS3 for styling</li>
            <li>Fake Store API integration</li>
            <li>Local Storage for persistence</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
