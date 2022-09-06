import React from "react"
import { Navbar, Footer } from "../components"

const pageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container pt-6 mt-5">
            <p className="footer has-text-centered">EduHubAfric @2022, Admin</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default pageLayout
