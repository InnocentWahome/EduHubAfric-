import * as React from "react"

import ngos from "../../assets/icons/main/ngo.svg"

const LandingPage = () => {
  return (
      <section className="hero is-fullheight is-subFooter">
        <div className="mt-6 pt-6">
          <div className="container mt-6 pt-6">
            <div className="columns pb-6">
              <div className="column">
                <p className="pb-6">
                  <span className="is-size-5 has-text-weight-semibold has-text-primary">
                    Program 1 Name <br />
                    <br />
                  </span>
                  Here are the developments in the program
                  <ol>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, reprehenderit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, reprehenderit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, reprehenderit.
                    </li>
                  </ol>
                </p>
                <button className="button is-rounded is-contained is-warning">
                  Offer services
                </button>
              </div>
              <div className="column is-one-third">
                <img
                  className="image is-256x256"
                  src={ngos}
                  alt="for initiators"
                />
              </div>
            </div>
            <div className="columns pb-6">
              <div className="column is-one-third">
                <img
                  className="image is-256x256"
                  src={ngos}
                  alt="for initiators"
                />
              </div>
              <div className="column">
                <p className="pb-6">
                  <span className="is-size-5 has-text-weight-semibold has-text-primary">
                    Program 2 Name <br />
                    <br />
                  </span>
                  Here are the developments in the program
                  <ol>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, reprehenderit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, reprehenderit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, reprehenderit.
                    </li>
                  </ol>
                </p>
                <button className="button is-rounded is-contained is-warning">
                  Offer services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
export default LandingPage
