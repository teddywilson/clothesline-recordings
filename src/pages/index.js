import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import DisplayCell from "../components/displayCell"
import DisplayGridList from "../components/displayGridList"
import LogoMenu from "../components/logoMenu"

import GridListTile from "@material-ui/core/GridListTile"

const Index = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/global/metadata/index/" }) {
        frontmatter {
          description
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CLOTHESLINE | home</title>
        <link rel="canonical" href="http://clotheslinerecordings.com" />
      </Helmet>
      <LogoMenu location={location} />
      <DisplayGridList>
        <GridListTile>
          <DisplayCell subtitle={data.markdownRemark.frontmatter.description} />
        </GridListTile>
      </DisplayGridList>
    </Layout>
  )
}

export default Index
