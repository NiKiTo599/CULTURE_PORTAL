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
    if (this.data.allFile)
      this.state.allItems = this.data.allFile.edges
    else this.state.allItems = []
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    const value = e.target.value
    let searchRes = []
    this.setState({ searchTerm: value })
    if (value !== "") {
      searchRes = this.state.allItems.filter(item => {
        return item.node.childDataJson.name
          .concat(item.node.childDataJson.place_of_birth)
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
                key={item.node.childDataJson.id}
                href={item.node.childDataJson.path}
              >
                {item.node.childDataJson.name}
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
}`

