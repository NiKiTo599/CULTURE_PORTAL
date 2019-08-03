import React from "react";

import { I18n } from "react-i18next";
import { withI18next } from "gatsby-plugin-i18next";

import Layout from "../components/layout";
import Title from "./componentsForAuthorPage/title";
import Timeline from "./componentsForAuthorPage/timeline";
import MapComponent from "./componentsForAuthorPage/MapComponent";
import Gallery from "./componentsForAuthorPage/gallery";
import AuthorWork from "./componentsForAuthorPage/authorWork";

const athorPage = ({ data }) => {
  console.log(data);
  const infoOfAuthor = data.allFile.edges[0].node.childDataJson;
  console.log(infoOfAuthor);
  return (
    <I18n>
      {t => (
        <Layout>
          <Title {...infoOfAuthor} />
          <Timeline {...infoOfAuthor} />
          <AuthorWork {...infoOfAuthor} />
          <Gallery {...infoOfAuthor} />
          <MapComponent places={infoOfAuthor.places_for_map} />
        </Layout>
      )}
    </I18n>
  );
};
export default withI18next()(athorPage);

export const postQuery = graphql`
  query($lng: String!, $originalPath: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
    allFile(filter: { childDataJson: { path: { eq: $originalPath } } }) {
      edges {
        node {
          childDataJson {
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
            places_for_map {
              name
              width
              length
            }
          }
        }
      }
    }
  }
`;
