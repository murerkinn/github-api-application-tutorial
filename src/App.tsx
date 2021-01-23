import React, { FC } from 'react'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import Search from './components/Search'
import Panel from './components/Panel'
import Footer from './components/Footer'

const App: FC = () => {
  return (
    <Container fluid>
      <Jumbotron fluid>
        <Container>
          <Search />
        </Container>
      </Jumbotron>
      <Panel />
      <Footer />
    </Container>
  )
}

export default App
