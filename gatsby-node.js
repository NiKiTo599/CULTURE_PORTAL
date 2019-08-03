const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const authorPage = path.resolve('src/components/authorPage.js');

  return graphql(`query IndexQuery {
    allFile(filter: {extension: {eq: "json"}}) {
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