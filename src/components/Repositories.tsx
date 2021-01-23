import React, { FC } from 'react'
import { Card } from 'react-bootstrap'
import { RepositoryData } from '../store/types'

const Repositories: FC<IProps> = ({ repos }) => {
  return (
    <>
      {repos.map((repo: RepositoryData) => (
        <Card key={repo.id} className='mb-2'>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{' '}
              </p>
              <footer className='blockquote-footer'>
                Someone famous in <cite title='Source Title'>Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

interface IProps {
  repos: RepositoryData[]
}

export default Repositories
