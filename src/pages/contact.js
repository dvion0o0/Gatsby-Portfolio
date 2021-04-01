import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
const contact = () => {
  return (
    <Layout>
      <Seo title="Contact" description="contact me" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/mpzkzzpj" method="POST">
            <div className="form-group">
              <input type="text" placeholder="name" className="form-control" />
              <input
                type="email"
                placeholder="email address"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
