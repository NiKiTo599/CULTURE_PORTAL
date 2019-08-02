import React from "react"
import Layout from "../components/layout";
import Title from './componentsForAuthorPage/title'
import Timeline from './componentsForAuthorPage/timeline'
import Gallery from './componentsForAuthorPage/gallery'
import AuthorWork from './componentsForAuthorPage/authorWork'
import MapComponent from './componentsForAuthorPage/MapComponent';

const athorPage = ({ data }) => {
  const infoOfAuthor = data.javascriptFrontmatter.frontmatter;
  return (
      <Layout>
        <Title { ...infoOfAuthor }/>
        <Timeline { ...infoOfAuthor } />
        <AuthorWork { ...infoOfAuthor } />
        <Gallery { ...infoOfAuthor } />
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
