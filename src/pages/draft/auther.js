import React, { useEffect, useState } from "react"
import queryString from "query-string"
import AutherPage from "../auther"

const AutherDraftPage = ({ location }) => {
  const { contentId, draftKey } = queryString.parse(location.search)
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`${process.env.GATSBY_MICROCMS_URL}/api/v1/authers/${contentId}?draftKey=${draftKey}`,
    {
      headers: {
        'X-MICROCMS-API-KEY' : process.env.GATSBY_MICROCMS_API_KEY,
      },
    })
      .then(res => res.json())
      .then(res => setData({ microcmsCommunities: res }))
  }, [])

  if (data === undefined) {
    return null
  }

  return (
    <AutherPage data={data} />
  )
}

export default AutherDraftPage
