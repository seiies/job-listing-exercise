/* global fetch */

import config from '../next.config'
import checkServer from '../utils/checkServer'

export const actionTypes = {
  FETCHED_ITEM: 'FETCHED_ITEM',
  FETCHED_LIST: 'FETCHED_LIST'
}

export const fetchJobList = () => async dispatch => {
  const isServer = checkServer()
  let url = config.routes.api.route
  let payload

  if (isServer) {
    const api = require('../server/api')
    payload = await api.getList()
  } else {
    const res = await fetch(url)
    payload = await res.json()
  }

  return dispatch({ type: actionTypes.FETCHED_LIST, data: payload })
}

export const fetchJobItem = (id) => async dispatch => {
  const isServer = checkServer()
  let url = config.routes.api.route
  let payload

  if (isServer) {
    const api = require('../server/api')
    payload = await api.getItem(id)
  } else {
    url += `?id=${id}`
    const res = await fetch(url)
    payload = await res.json()
  }

  return dispatch({ type: actionTypes.FETCHED_ITEM, data: payload, id: id })
}
