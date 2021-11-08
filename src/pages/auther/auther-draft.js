import React, { useEffect, useState } from "react"
import { PageProps } from "gatsby"
import queryString from "query-string"
import AutherPost from "../../templates/auther-post"

const AutherDraftPage = ({ location }) => {
  const { contentId, draftKey } = queryString.parse(location.search);
  const [data, setData] = useState();

  console.log("contentId  " + contentId)
  console.log("draftKey  " + draftKey)
  console.log(queryString.parse(location.search))
  console.log("process.env.MICROCMS_API_KEY  " + process.env.MICROCMS_API_KEY)

  useEffect(() => {
    fetch(`https://simple-site.microcms.io/api/v1/authers/qznj0mhnlv?draftKey=gxyXbSS06A`,

    // fetch(`https://simple-site.microcms.io/api/v1/authers/${contentId}?draftKey=${draftKey}`,
    {
      headers: {
        'X-MICROCMS-API-KEY' : process.env.MICROCMS_API_KEY,
      },
    })
      .then(res => res.json())
      .then(res => setData({ microcmsAuthers: res }))
  }, []);

  if (data === undefined) {
    return null;
  }

  console.log("data  " + data.microcmsAuthers)

  return (
    <AutherPost data={data} /> 
  )
}

export default AutherDraftPage