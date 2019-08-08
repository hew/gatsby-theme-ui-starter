/** @jsx jsx */
import { jsx, Main, Container } from "theme-ui"
import Layout from "../components/layout"
import { Background } from "../components/primatives"

import HomeHeader from "../components/home-header"

const home = () => (
  <Background>
    <Layout>
      <Main>
        <Container>
          <HomeHeader />
        </Container>
      </Main>
    </Layout>
  </Background>
)

export default home
