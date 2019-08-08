/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

// using the custom function allows better interop with the existing code, that's it.
// Button needs a custom func because it is a 'variant' (see theme-ui variants for more)

export const Logo = () => (
  <h1
    sx={{
      fontFamily: "heading",
      fontSize: "48px",
      color: "white",
    }}
  >
    Title
  </h1>
)

export const Button = ({ ...props }) => (
  <button
    {...props}
    sx={{
      variant: "buttons.primary",
    }}
  >
    {props.children}
  </button>
)

export const Background = ({ children }) => (
  <div sx={{ bg: "primary" }}> {children}</div>
)

export const Select = ({ children, ...props }) => (
  <select
    {...props}
    sx={{
      variant: "select.primary",
    }}
  >
    {children}
  </select>
)

export const Input = ({
  f,
  p,
  px,
  py,
  m,
  mr,
  ml,
  mt,
  mb,
  mx,
  color,
  ...props
}) => (
  <input
    {...props}
    sx={{
      variant: "input.primary",
    }}
  >
    {props.children}
  </input>
)

export const Strong = ({
  f,
  p,
  px,
  py,
  m,
  mr,
  ml,
  mt,
  mb,
  mx,
  color,
  fontWeight,
  fontFamily,
  ...props
}) => (
  <Styled.strong
    {...props}
    sx={{
      p,
      px,
      py,
      m,
      mr,
      ml,
      mt,
      mb,
      mx,
      color,
      fontWeight,
      fontFamily,
      fontSize: f,
    }}
  />
)
export const P = ({
  f,
  p,
  px,
  py,
  m,
  mr,
  ml,
  mt,
  mb,
  mx,
  color,

  fontWeight,
  fontFamily,
  ...props
}) => (
  <Styled.p
    {...props}
    sx={{
      p,
      px,
      py,
      m,
      mr,
      ml,
      mt,
      mb,
      mx,
      color,
      fontWeight,
      fontFamily,
      fontSize: f,
    }}
  />
)

export const H1 = ({
  f,
  p,
  px,
  py,
  m,
  mr,
  ml,
  mt,
  mb,
  mx,
  fontStyle,
  fontWeight,
  fontFamily,
  color,
  ...props
}) => (
  <Styled.h1
    {...props}
    sx={{
      p,
      px,
      py,
      m,
      mr,
      ml,
      mt,
      mb,
      mx,
      color,
      fontStyle,
      fontWeight,
      fontFamily,
      fontSize: f,
    }}
  />
)

export const H2 = ({
  f,
  p,
  px,
  py,
  m,
  mr,
  ml,
  mt,
  mb,
  mx,
  color,
  fontWeight,
  fontFamily,
  ...props
}) => (
  <Styled.h2
    {...props}
    sx={{
      p,
      px,
      py,
      m,
      mr,
      ml,
      mt,
      mb,
      mx,
      color,
      fontWeight,
      fontFamily,
      fontSize: f,
    }}
  />
)

export const H3 = ({
  f,
  p,
  px,
  py,
  m,
  mr,
  ml,
  mt,
  mb,
  mx,
  color,
  fontWeight,
  fontFamily,
  ...props
}) => (
  <Styled.h3
    {...props}
    sx={{
      p,
      px,
      py,
      m,
      mr,
      ml,
      mt,
      mb,
      mx,
      color,
      fontFamily,
      fontWeight,
      fontSize: f,
    }}
  />
)

export const H4 = ({
  f,
  p,
  px,
  py,
  m,
  mr,
  ml,
  mt,
  mb,
  mx,
  color,
  fontFamily,
  fontWeight,
  ...props
}) => (
  <Styled.h4
    {...props}
    sx={{
      p,
      px,
      py,
      m,
      mr,
      ml,
      mt,
      mb,
      mx,
      color,
      fontFamily,
      fontWeight,
      fontSize: f,
    }}
  />
)
export const Flex = ({
  p,
  px,
  py,
  m,
  mr,
  ml,
  mt,
  mb,
  mx,
  width,
  color,
  backgroundColor,
  flex,
  flexWrap,
  flexDirection,
  align,
  justify,
  borderWidth,
  borderColor,
  boxShadow,
  ...props
}) => (
  <div
    {...props}
    sx={{
      display: "flex",
      p,
      px,
      py,
      m,
      mr,
      ml,
      mt,
      mb,
      mx,
      width,
      color,
      backgroundColor,
      flex,
      flexWrap,
      flexDirection,
      alignItems: align,
      justifyContent: justify,
      borderWidth,
      borderColor,
      boxShadow,
    }}
  />
)

export const Box = ({
  p,
  px,
  py,
  m,
  mr,
  ml,
  mt,
  mb,
  mx,
  width,
  color,
  backgroundColor,
  borderWidth,
  borderColor,
  boxShadow,
  display,
  ...props
}) => (
  <div
    {...props}
    sx={{
      p,
      px,
      py,
      m,
      mr,
      ml,
      mt,
      mb,
      mx,
      width,
      color,
      backgroundColor,
      borderWidth,
      borderColor,
      boxShadow,
      display,
    }}
  />
)

export const Row = ({ children, ...props }) => (
  <Flex flexWrap="wrap" justify="center" align="center" {...props}>
    {children}
  </Flex>
)
