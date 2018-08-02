import React from 'react'


export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="section">

        <div className="mission is-hidden-desktop">
          <div className="mission-statement">
            <h1 className="title is-size-6-mobile is-size-5-tablet ">
              Providing  students with non-traditional learning and social justice opportunities while preparing incarcerated students for successful reentry through education and technology.
            </h1>
          </div>
        </div>

        <div className="main-content">
          <div className="box jumbo-card">
            <p>Our website is under construction.  Please come back in the near future.  Subscribe to our mailing list to be notified when we launch our website.</p>
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
                      <input className="input" name="email" type="email" placeholder="Enter your email address" />
                  </div>
                </div>
                <div className="column is-one-quarter-desktop is-one-third-tablet">
                  <div className="field">
                    <div className="field">
                      <button
                        className="button is-success is-fullwidth"
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
