/** @jsx jsx */
import { jsx } from "theme-ui"
import * as Yup from "yup"
import { Formik, Form, Field } from "formik"
import { onSubmit } from "./utils/form-utils"
import { Styled } from "theme-ui"
import {
  Flex,
  Box,
  H2,
  P,
  Input,
  Button,
  Select,
} from "../components/primatives"

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!"),
  school: Yup.string().required("School is required"),
  city: Yup.string().required("City is required"),
  privacy: Yup.bool()
    .test(
      "privacy",
      "You have to read and agree with QUP's privacy policy!",
      value => value === true
    )
    .required("You have to read and agree with QUP's privacy policy!"),
})

const checkboxSize = {
  width: "18px",
  height: "18px",
  alignItems: "center",
  display: "flex",
}

const TextInput = ({ children, error }) => (
  <div
    sx={{
      margin: "1em 0",
      bg: "transparent",
      border: error ? "1px solid red" : "1px solid transparent",
      borderRadius: "4px",
    }}
  >
    {children}
  </div>
)

export default () => {
  return (
    <Formik
      initialValues={{
        email: "",
        city: "",
        profile: "",
        privacy: true,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => {
        return (
          <div>
            <H2 mt={3} color="white" fontFamily="body">
              Register right now for compelling reasons!
            </H2>
            <Form>
              <TextInput error={touched.email && errors.email}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </TextInput>
              <TextInput error={touched.city && errors.city}>
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
              </TextInput>
              <Box mb={2}>
                <Select name="profile">
                  <option value="" disabled="disabled" selected="selected">
                    I am a...
                  </option>
                  <option value="human">human</option>
                  <option value="bot">bot</option>
                </Select>
              </Box>
              <Flex width="100%" align="center">
                <Box px={1}>
                  <Field
                    type="checkbox"
                    name="privacy"
                    checked={values.privacy}
                    style={checkboxSize}
                  />
                </Box>
                <Box>
                  <P f={0} color={"white"} style={{ fontSize: "14px" }}>
                    I have read and agree with the privacy policy.
                  </P>
                  <div>{errors.privacy}</div>
                </Box>
              </Flex>
              <Button type="submit" mb={2} disabled={isSubmitting}>
                Register
              </Button>
            </Form>
            <P f={0} color={"white"}>
              I understand that I can withdraw my consent at any time and the
              withdrawal will not affect the lawfulness of the consent before
              its withdrawal, as described in the {" "}
              <Styled.a
                sx={{ color: "secondary" }}
                href=""
              >
                Privacy Policy
              </Styled.a>
              .
            </P>
          </div>
        )
      }}
    />
  )
}
