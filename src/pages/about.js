import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import Seo from "../components/SEO"
// ...GatsbyImageSharpFluid
const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const {
    title,
    description,
    strapiId,
    stacks,
    image: {
      childImageSharp: { fluid },
    },
  } = nodes[0]

  console.log(stacks)

  return (
    <Layout>
      <Seo title="About" description="about me" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} alt="aboutImage" className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{description}</p>
            <div className="about-stack">
              {stacks.map((stack, index) => {
                return <span key={index}>{stack.stack} </span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        strapiId
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stacks {
          stack
        }
      }
    }
  }
`

export default About
