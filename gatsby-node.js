/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */ 
 const path = require(`path`)
 exports.createPages = async ({ graphql, actions, reporter }) => { 
   // リダイレクト処理
   const { createRedirect } = actions
   createRedirect({
     fromPath: `/blog/`,
     toPath: `/auther/`,
   })
 }
 