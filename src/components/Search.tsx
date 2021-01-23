import React, { useState, FC, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { getUser } from '../store/actions'
import { Form, Button } from 'react-bootstrap'

const Search: FC = () => {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(getUser(username))
    setUsername('')
  }

  return (
    <>
      <h1>Enter a username</h1>
      <Form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <Form.Control
          className='mb-2 mr-sm-2'
          placeholder='Jane Doe'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type='submit' className='mb-2 rounded'>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Search
