import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const AutherPage = ({ data }) => {
  const info = data.microcmsAuthers
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
            { 
              <li key={info.id}>
                  {info.name}<br />
                  <img src={info.image.url}></img><br />
                  {info.profile}<br />
              </li>
            }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
  microcmsAuthers {
    id
    image {
      url
    }
    name
    profile
  }
}

`
export default AutherPage;