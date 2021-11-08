import React from "react"
import { graphql } from 'gatsby'

export default function AutherPost({ data }) {
  const info = data.microcmsAuthers
  return (
      <>
      {info.name}
      {info.belongs}
      {info.publishedAt}
      </>
  )
}

export const query = graphql`
query AutherQuery($id: String!) {
  microcmsAuthers(id: {eq: $id}) {
    id
    name
    belongs
    publishedAt
  }
}`
