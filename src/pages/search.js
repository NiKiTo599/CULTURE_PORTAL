import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import Layout from '../components/layout';
import "./search.css"

class Search extends React.Component {
  constructor({ data, t }) {
    super({ data })
    this.data = data
    this.state = {
      searchTerm: "",
    }
    this.state.searchResult = []
    if (this.data.allJavascriptFrontmatter)
      this.state.allItems = this.data.allJavascriptFrontmatter.edges
    else this.state.allItems = []
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    const value = e.target.value
    let searchRes = []
    this.setState({ searchTerm: value })
    if (value !== "") {
      searchRes = this.state.allItems.filter(item => {
        return item.node.frontmatter.name
          .concat(item.node.frontmatter.place_of_birth)
          .toLowerCase()
          .includes(value.toLowerCase())
      })
    }
    this.setState({ searchResult: searchRes })
    console.log("val " + value)
  }
  render() {
    return <I18n>
    {t => (
      <Layout>
        <div className="container">
          <form action="">
            <input
              type="search"
              placeholder= {t('search')}
              value={this.state.searchTerm}
              onChange={this.onChange}
            />
            <div class="fa fa-search"></div>
          </form>
          <div className="search-result">
            {this.state.searchResult.map(item => (
              <a
                key={item.node.frontmatter.id}
                href={item.node.frontmatter.path}
              >
                {item.node.frontmatter.name}
              </a>
            ))}
          </div>
        </div>
        
      </Layout>
    )}
  </I18n>
  }
}

export default withI18next()(Search);

export const query = graphql`
query($lng: String!) {
  locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
    ...TranslationFragment
  }
  allJavascriptFrontmatter(filter: { frontmatter: { lng: { eq: $lng } } }) {
    edges {
      node {
        id
        frontmatter {
          id
          name
          date
          path
          place_of_birth
        }
      }
    }
  }
}
`
