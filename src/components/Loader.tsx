import React, { FC } from 'react'
import { Spinner } from 'react-bootstrap'

const Loader: FC = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{ width: '7rem', height: '7rem', margin: '3em auto' }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
