import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Project from "../components/Project"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <div className="projects-page">
        <Projects projects={projects} title="all projects" />
      </div>
    </Layout>
  )
}

export const quert = graphql`
  {
    allStrapiProjects {
      nodes {
        strapiId
        title
        description
        url
        github
        stack {
          stack
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
