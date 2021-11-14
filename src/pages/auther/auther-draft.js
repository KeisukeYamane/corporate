import React, { useEffect, useState } from "react"
import { PageProps } from "gatsby"
import queryString from "query-string"
import AutherPost from "../../templates/auther-post"

const AutherDraftPage = ({ location }) => {
  const { contentId, draftKey, apiName } = queryString.parse(location.search);
  const [data, setData] = useState();
  const queryName = `microcms${setHeadCharToUppercamel(apiName)}`

  console.log("contentId  " + contentId)
  console.log("draftKey  " + draftKey)
  console.log("apiName  " + apiName)
  console.log(queryString.parse(location.search))
  console.log("queryName  " + queryName)
  console.log("process.env.GATSBY_MICROCMS_API_KEY  " + process.env.GATSBY_MICROCMS_API_KEY)

  useEffect(() => {
    fetch(`https://simple-site.microcms.io/api/v1/authers/qznj0mhnlv?draftKey=gxyXbSS06A`,

    // fetch(`https://simple-site.microcms.io/api/v1/${apiName}/${contentId}?draftKey=${draftKey}`,
    {
      headers: {
        'X-MICROCMS-API-KEY' : "3db31925-660a-4bf1-b3d0-040fbf30f164",
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

function setHeadCharToUppercamel(apiName) {
    return apiName.charAt(0).toUpperCase() + apiName.slice(1)
}