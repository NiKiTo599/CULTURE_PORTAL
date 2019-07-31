import React from "react"

import Layout from "../components/layout";
import Title from './componentsForAuthorPage/title'
import Timeline from './componentsForAuthorPage/timeline'
import YoutubeComponent from "./componentsForAuthorPage/YoutubeComponent";
import MapComponent from './componentsForAuthorPage/MapComponent';

const athorPage = ({ data }) => {
  console.log(data)
  const infoOfAuthor = data.javascriptFrontmatter.frontmatter;
  return (
      <Layout>
        <Title { ...infoOfAuthor }/>
        <Timeline { ...infoOfAuthor } />
        <YoutubeComponent videoId={infoOfAuthor.video_id} />
        <MapComponent places={infoOfAuthor.places_for_map}/>
      </Layout>
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
        places_for_map {
          name
          width
          length
        }
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
