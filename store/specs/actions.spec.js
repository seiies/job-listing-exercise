/* global jest, describe, it, expect */

import { actionTypes, fetchJobItem, fetchJobList } from '../actions'
import checkServer from '../../utils/checkServer'

jest.mock('../../server/api')
jest.mock('../../utils/checkServer')

describe('actions', () => {
  const dispatch = jest.fn()

  describe('fetchJobList', async () => {
    const action = fetchJobList()

    const expectedPayload = [{ id: 1 }, { id: 2 }]
    global.fetch = () => ({
      json () {
        return expectedPayload
      }
    })

    it('returns action with list on server-side', async () => {
      checkServer.mockReturnValue(true)
      await action(dispatch)

      expect.assertions(1)
      expect(dispatch).toBeCalledWith({ type: actionTypes.FETCHED_LIST, data: expectedPayload })
    })

    it('returns action with list on client-side', async () => {
      checkServer.mockReturnValue(false)
      await action(dispatch)

      expect.assertions(1)
      expect(dispatch).toBeCalledWith({ type: actionTypes.FETCHED_LIST, data: expectedPayload })
    })
  })

  describe('fetchJobItem', () => {
    const id = 1
    const action = fetchJobItem(id)
    const expectedPayload = { title: 'new', html: 'never forget doctype' }
    global.fetch = () => ({
      json () {
        return expectedPayload
      }
    })

    it('returns action with item on server-side', async () => {
      checkServer.mockReturnValue(true)
      await action(dispatch)

      expect.assertions(1)
      expect(dispatch).toBeCalledWith({ type: actionTypes.FETCHED_ITEM, data: expectedPayload, id: id })
    })

    it('returns action with item on client-side', async () => {
      checkServer.mockReturnValue(false)
      await action(dispatch)

      expect.assertions(1)
      expect(dispatch).toBeCalledWith({ type: actionTypes.FETCHED_ITEM, data: expectedPayload, id: id })
    })
  })
})
