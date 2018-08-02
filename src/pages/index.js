import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="main-content">
          <div className="box jumbo-card">
            <p>Our website is under construction.  Please come back in the near future.  Subscribe to our mailing list be notified when we launch our website.</p>
            <form
              id="email-form"
              name="subscribe"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/success/"
            >
              <input type="hidden" name="form-name" value="subscribe" />
              <div className="columns is-tablet">
                <div className="column is-three-quarters-desktop is-two-thirds-tablet">
                  <div className="field">
                      <input className="input is-medium" name="email" type="email" placeholder="Enter your email address" />
                  </div>
                </div>
                <div className="column is-one-quarter-desktop is-one-third-tablet">
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
      </section>
    )
  }
}
