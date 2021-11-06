import React, { useEffect, useState } from "react"
import { PageProps } from "gatsby"
import queryString from "query-string"
import AutherPage from "../auther"

const AutherPostPage = ({ location }) => {
  const { contentId, draftKey } = queryString.parse(location.search);
  const [data, setData] = useState;

  useEffect(() => {
    fetch(`https://simple-site.microcms.io/api/v1/authers/${contentId}?draftKey=${draftKey}`, 
    {
      headers: {
        'X-MICROCMS-API-KEY' : process.env.MICROCMS_API_KEY,
      },
    })
      .then(res => res.json())
      .then(res => setData({ microcmsNews: res }))
  }, []);

  if (data === null) {
    return null;
  }

  return (
    <AutherPage data={data} /> 
  )
}

export default AutherPostPage