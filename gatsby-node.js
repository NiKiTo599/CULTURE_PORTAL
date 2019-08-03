/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const authorPage = path.resolve('src/components/authorPage.js');

  return graphql(`query IndexQuery {
    allFile(filter: {extension: {eq: "json"} relativeDirectory: {eq: ""}}) {
      edges {
        node {
          childDataJson {
            name
            path
          }
        }
      }
    }
  }
  `)
    .then((res) => {
      if (res.errors) {
        return Promise.reject(res.errors);
      }
      const hash = {};
      res.data.allFile.edges.forEach(({ node }) => {
        if (!hash[node.childDataJson.path]) {
          hash[node.childDataJson.path] = true;
          createPage({
            path: node.childDataJson.path,
            component: authorPage,
          });
        }
      });
    });
};
