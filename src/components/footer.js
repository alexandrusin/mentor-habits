import React from "react"
import "./Footer.scss"

const Footer = () => (
  <footer className="footer">
    <div>
      Get 1 percent better each day for one year,
      <br />
      you’ll end up thirty-seven times better.
      {/* https://sive.rs/book/AtomicHabits */}
      <br />
      <br />
    </div>
    <div>
      Built with <a href="https://contentful.com/">Contentful</a> and{" "}
      <a href="https://gatsbyjs.com">Gatsby</a>
    </div>
    <div>Copyright &copy; {new Date().getFullYear()} DV</div>
  </footer>
)

export default Footer
