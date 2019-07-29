import React from "react"

import YoutubeComponent from "./componentsForAuthorPage/YoutubeComponent"

const athorPage = ({ data }) => {
  const infoOfAuthor = data.javascriptFrontmatter.frontmatter
  return (
    <div>
      <h1>Hello, {infoOfAuthor.name}</h1>
      <YoutubeComponent videoId={infoOfAuthor.video_id} />
    </div>
  )
}
export default athorPage
export const postQuery = graphql`
  query($path: String!) {
    javascriptFrontmatter(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        name
        date
        img
        video_id
        place_of_birth
        description
        timeline {
          date
          text
        }
        works {
          subject
          names
        }
        gallery {
          img
          description
        }
      }
    }
  }
`
