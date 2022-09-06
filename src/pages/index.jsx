import * as React from "react"

// import icons
import ngos from "../assets/icons/main/ngo.svg"

//import layout
import PageLayout from "../layouts/PageLayout"

// import page components
import LandingPage from "../components/pages/landing-page"
import ProgramsPage from "../components/pages/programs"
import AboutPage from "../components/pages/about"

const IndexPage = () => {
  return (
    <PageLayout>
      {/* Landing Page Start */}
      <LandingPage />
      {/* Landing Page End */}

      {/* About Page Start */}
      <AboutPage />
      {/* About Page End */}

      {/* Programs Page Start */}
      <ProgramsPage />
      {/* Programs Page End */}
    </PageLayout>
  )
}
export default IndexPage
