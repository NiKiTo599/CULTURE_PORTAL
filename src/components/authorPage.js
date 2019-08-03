import React from "react"

import YoutubeComponent from "./componentsForAuthorPage/YoutubeComponent";
import MapComponent from './componentsForAuthorPage/MapComponent';

const athorPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Hello, {data.allFile.edges[0].node.childDataJson.name}</h1>
    </div>
  )
}
export default athorPage
export const postQuery = graphql`
  query($path: String!) {
    allFile(filter: {childDataJson: {path: {eq: $path}}}) {
      edges {
        node {
          childDataJson {
            path
            name
          }
        }
      }
    }
  }
`