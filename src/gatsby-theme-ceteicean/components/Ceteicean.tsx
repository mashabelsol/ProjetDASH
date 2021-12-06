import React from "react"
import Ceteicean, {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  TeiHeader, Tei, Note, Ref, Graphic
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"

import {Link} from "gatsby"

import { makeStyles, Theme, createStyles, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline"
import Paper from "@material-ui/core/Paper"

import theme from "../../theme"

import Layout from "../../components/layout"
import { Typography } from "@material-ui/core"

type Props = {
  pageContext: {
    name: string
    publicURL: string
    prefixed: string
    elements: string[]
  },
  location: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    original: {
      padding: '.7em 0 0 1em'
    }
  })
)

export default function MicroEditionCeteicean({pageContext}: Props) {
  const classes = useStyles()

  const routes: Routes = {
    "tei-teiheader": TeiHeader,
    "tei-tei": Tei, 
    "tei-note": Note,
    "tei-ref": Ref,
    "tei-graphic": Graphic
  }

  return(
    <Layout location="TEI">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Ceteicean pageContext={pageContext} routes={routes} />
        <Paper elevation={1} className={classes.original}>
          <Typography variant="body2">
            <a href={pageContext.publicURL} download>See original TEI.</a>
          </Typography>
        </Paper>
      </ThemeProvider>
    </Layout>
  )

}
