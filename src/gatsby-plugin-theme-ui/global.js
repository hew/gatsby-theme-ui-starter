import React from "react"
import { Global, css } from "@emotion/core"
import { meta } from "../../data/config"
import Helmet from "react-helmet"
import normalize from "./normalize.css"

export default () => (
  <>
    <Helmet
      title={meta.title}
      meta={[...meta.general, ...meta.social]}
      link={[...meta.link]}
    />
    <Global
      styles={css`
        ${normalize}
        * {
          box-sizing: border-box;
        }
      `}
    />
  </>
)

// Declare custom fonts in global (above)
// @font-face {
//   font-family: DinNext;
//   src: url("");
// }
