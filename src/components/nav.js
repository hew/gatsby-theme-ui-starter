import React from "react"
import { Container } from "theme-ui"
import { Flex, Button, Logo } from "../components/primatives"

export default () => (
  <Container>
    <Flex px={2} align="center">
      <Flex>
        <Logo />
      </Flex>
      <Flex flex={1} />
      <Flex>
        <a href="https://hummus.com">
          <Button mb={2}>Action</Button>
        </a>
      </Flex>
    </Flex>
  </Container>
)
