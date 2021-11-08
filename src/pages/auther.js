import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const AutherPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
            {
                data.allMicrocmsAuthers.edges.map(({node}) => (
                  <a href={"auther/" + node.id}>
                    <li key={node.name}>
                        {node.name}
                        {node.belongs}
                        {node.publishedAt}
                    </li>
                  </a>
                ))
            }
            </ul>
            <div>
              ID!!: {process.env.GATSBY_ID}
              PASSWORD!!: {process.env.GATSBY_PASSWORD}
            </div>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
  allMicrocmsAuthers(sort: {fields: publishedAt, order: DESC}) {
    edges {
      node {
        id
        name
        belongs
        publishedAt
      }
    }
  }
}


`
export default AutherPage;