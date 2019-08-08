import downArrow from "../icons/down-arrow";

const heading = {
  fontFamily: "heading",
  fontWeight: "bold",
  color: "text",
  lineHeight: "heading",
}

const button = {
  appearance: "none",
  fontWeight: "body",
  lineHeight: "body",
  fontSize: 0,
  padding: "0 24px",
  width: "100%",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  textTransform: "uppercase",
  borderRadius: "2px",
  borderWidth: "2px",
  borderStyle: "solid",
  height: "44px",
  boxShadow: "none",
  transition: "all 260ms ease-in-out",
  ":hover": {
    outline: 0,
    background: "primary",
    backgroundColor: "primary",
  },
  ":focus": {
    outline: 0,
  },
}

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "system-ui, 'Helvitica Neue', sans-serif",
    heading: "system-ui",
    monospace: "monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 800,
  },
  lineHeights: {
    body: 1.2,
    heading: 0.96,
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      "-webkit-font-smoothing": "subpixel-antialiased"
    },
    Main: {
      padding: "0px",
    },
    Container: {
      px: 4
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
      textDecoration: "none"
    },
    strong: {
      color: "secondary"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
  select: {
    primary: {
      display: "block",
      width: "100%",
      height: "38px",
      padding: "8px 12px",
      fontSize: 0,
      lineHeight: "1.42857",
      color: "textWhite",
      bg: "backgroundDark",
      backgroundImage: `url(${downArrow})`,
      backgroundSize: "12px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "97%",
      borderRadius: "3px",
      border: 0,
      "-moz-appearance": "none",
      "-webkit-appearance": "none"
    },
  },
  input: {
    primary: {
      bg: "backgroundDark",
      width: "100%",
      height: "44px",
      fontSize: 0,
      padding: 2,
      borderWidth: 0,
      outline: "none",
      outlineColor: "transparent",
      borderRadius: "4px",
      borderColor: "backgroundDark",
      appearance: "none",
      color: "textWhite",
      "::placeholder": {
        color: "textWhite",
        opacity: 1,
      },
      ":-ms-input-placeholder": {
        color: "textWhite",
      },
      "::-ms-input-placeholder": {
        color: "textWhite",
      },
      "-moz-appearance": "none",
      "-webkit-appearance": "none"

    },
  },
  buttons: {
    primary: {
      ...button,
      color: "white",
      bg: "secondary",
      borderColor: "secondary",
    },
  },
}
