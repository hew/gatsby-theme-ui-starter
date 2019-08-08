import React from "react"
import Form from "../components/form"
import { Flex, Row, H1, P } from "../components/primatives"

const HomeHeader = () => {
  return (
      <Row py={[1, 5]} px={[3, 3]}>
        <Flex
          mt={[0, 0, -305]}
          px={[2, 2, 3]}
          width={["100%", "100%", "60%"]}
          flexDirection="column"
          justifyContent="flex-start"
        >
          <H1 color="secondary" f={[5, 8]} m={0}>
            Fill Out Form
          </H1>
          <P f={4} color="white" mr={[0, 0, 5]}>
            Because reasons
          </P>
        </Flex>
        <Flex mt={[2, 2, 0]} width={["100%", "100%", "40%"]}>
          <Form />
        </Flex>
      </Row>
  )
}

export default HomeHeader
