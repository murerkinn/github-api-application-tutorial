import axios from 'axios'
import { Dispatch } from 'redux'
import { GET_USER, SET_ERROR, SET_LOADING } from './types'

export const getUser = (username: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: SET_LOADING,
    })

    const { data } = await axios.get(`https://api.github.com/users/${username}`)

    const repositories = await axios.get(data.repos_url)

    dispatch({
      type: GET_USER,
      payload: {
        userInfo: data,
        repositories: repositories.data,
      },
    })
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err,
    })
  }
}
