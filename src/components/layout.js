import React from "react"
import { Main, Layout } from "theme-ui"
import Global from "../gatsby-plugin-theme-ui/global"
import Nav from "../components/nav"

export default ({ children }) => {
  return (
    <>
      <Global />
      <Layout>
        <Nav />
        <Main>{children}</Main>
      </Layout>
    </>
  )
}
