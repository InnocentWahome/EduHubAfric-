import React from "react"
// import Logo from "../../assets/images/logo5.png"

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <nav
      className="navbar is-spaced navbar-menu is-active is-fixed-top has-text-centered has-background-light pt-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item logo-font has-text-primary" href="/">
          EduHubAfric
        </a>
        <div
          href="#"
          onClick={() => {
            setIsActive(!isActive)
          }}
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <a href="/" className="navbar-item">
            <button className="button is-rounded is-primary is-outlined">
              Market
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
