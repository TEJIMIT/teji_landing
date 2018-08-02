import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class Success extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="main-content">
          <div className="box jumbo-card submit-success">
            <h1 className="title is-4">Thank You</h1>
            <p>Your email address has been recorded.  We will alert you when our website is complete.</p>
            <br />
            <Link to="/">← Back to Home Page</Link>
          </div>
        </div>
      </section>
      )
  }
}
