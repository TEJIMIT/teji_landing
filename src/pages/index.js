import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <section className="section">
        <div className="image-tint">
          <div className="mission">
            <div className="mission-statement">
              <h1 className="title is-4">
                Providing  students with non-traditional learning and social justice opportunities while preparing incarcerated students for successful reentry through education and technology.
              </h1>
            </div>
          </div>

          <div className="main-content">
            <div className="box jumbo-card">
              <p>Our website is currently under construction.  Please come back in the near future.  Subscribe to be updated when we launch our website.</p>
              <form
                id="email-form"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="columns is-tablet">
                  <div className="column is-two-third">
                    <div className="field">
                        <input className="input is-medium" name="email" type="email" placeholder="Enter your email address" />
                    </div>
                  </div>
                  <div className="column is-one-third">
                    <div className="field">
                      <div className="field">
                        <button
                          className="button is-success is-medium is-fullwidth"
                          type="submit"
                          >
                            Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
