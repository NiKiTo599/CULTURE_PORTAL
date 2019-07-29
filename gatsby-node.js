const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const athorPage = path.resolve('src/components/athorPage.js');

  return graphql(`{
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              error
              path
            }
          }
        }
      }
    }`)
    .then((res) => {
      if (res.errors) {
        return Promise.reject(res.errors);
      }
      const hash = {};
      res.data.allJavascriptFrontmatter.edges.forEach(({ node }) => {
        if (!hash[node.frontmatter.path]) {
          hash[node.frontmatter.path] = true;
          createPage({
            path: node.frontmatter.path,
            component: athorPage,
          });
        }
      });
    });
};