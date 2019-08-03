import React from "react"
import Layout from "../components/layout"
import { Container } from 'react-bootstrap';
import "./search.css"

class Search extends React.Component {
  constructor({ data }) {
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
    return (
      <Layout>
        <Container>
          <form action="">
            <input
              type="search"
              placeholder="Begin your search..."
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
        </Container>
      </Layout>
    )
  }
}

export default Search

export const queryResult = graphql`
  query MyQuery {
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
`