import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const AutherPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
            {
                data.allMicrocmsAuthers.edges.map(({node}) => (
                    <li key={node.name}>
                        {node.name}
                        {node.image.url}
                        {node.profile}
                    </li>
                ))
            }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
  allMicrocmsAuthers {
    edges {
      node {
        id
        image {
          url
        }
        name
        profile
      }
    }
  }
}

`
export default AutherPage;