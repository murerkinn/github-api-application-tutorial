import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import Loader from './Loader'
import { RootState } from '../store'
import Repositories from './Repositories'

const Panel: FC = () => {
  const { loading, error, data } = useSelector((state: RootState) => state.user)
  const { userInfo, repositories } = data

  return (
    <Container>
      <Row className='justify-between'>
        {userInfo !== null && (
          <>
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={userInfo.avatar_url} />
                <Card.Body>
                  <Card.Title>@{userInfo.login}</Card.Title>
                  <Card.Text>{userInfo.bio}</Card.Text>
                  <Card.Text>
                    <i className='fas fa-map-marker-alt'></i>{' '}
                    {userInfo.location}
                  </Card.Text>
                  {userInfo.blog && (
                    <Card.Link href={userInfo.blog} target='_blank'>
                      Website
                    </Card.Link>
                  )}
                </Card.Body>
              </Card>
            </Col>
            <Col md={8}>
              <h2>Repositories</h2>
              <hr />
              <Repositories repos={repositories} />
            </Col>
          </>
        )}
        {loading && <Loader />}
        {error && <h2>Error</h2>}
      </Row>
    </Container>
  )
}

export default Panel
